// Wiki write endpoint — lets any HTTP client (ChatGPT, any agent) update the KB
// POST /api/wiki-write
// Body: { path: "findings/08-foo.md", content: "# ...", message: "optional commit message", secret: "..." }
// Returns: { ok: true, url: "..." } or { ok: false, error: "..." }

const REPO = "lobbycarroll-bot/bra-research-kb";
const BRANCH = "main";
const WRITE_SECRET = process.env.WIKI_WRITE_SECRET;
const GH_TOKEN = process.env.GITHUB_TOKEN_KB;

export default async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "POST required" }), {
      status: 405, headers: corsHeaders,
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
      status: 400, headers: corsHeaders,
    });
  }

  const { path, content, message, secret } = body;

  if (!WRITE_SECRET || secret !== WRITE_SECRET) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid secret" }), {
      status: 403, headers: corsHeaders,
    });
  }

  if (!path || !content) {
    return new Response(JSON.stringify({ ok: false, error: "path and content are required" }), {
      status: 400, headers: corsHeaders,
    });
  }

  // Sanitise path — must be a relative .md path, no traversal
  const cleanPath = path.replace(/^\/+/, "").replace(/\.\./g, "");
  if (!cleanPath.endsWith(".md") && !cleanPath.endsWith(".txt")) {
    return new Response(JSON.stringify({ ok: false, error: "Only .md or .txt files allowed" }), {
      status: 400, headers: corsHeaders,
    });
  }

  // Check if file already exists (to get SHA for updates)
  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${cleanPath}`;
  const getRes = await fetch(`${apiUrl}?ref=${BRANCH}`, {
    headers: { Authorization: `Bearer ${GH_TOKEN}`, "User-Agent": "bra-research-wiki" },
  });
  let sha;
  if (getRes.ok) {
    const existing = await getRes.json();
    sha = existing.sha;
  }

  // Write the file
  const commitMessage = message || `Update ${cleanPath}`;
  const putBody = {
    message: commitMessage,
    content: Buffer.from(content, "utf8").toString("base64"),
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  };

  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      "User-Agent": "bra-research-wiki",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(putBody),
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    return new Response(JSON.stringify({ ok: false, error: `GitHub error: ${err}` }), {
      status: 502, headers: corsHeaders,
    });
  }

  const result = await putRes.json();
  return new Response(JSON.stringify({
    ok: true,
    path: cleanPath,
    url: result.content?.html_url,
    commit: result.commit?.sha?.slice(0, 7),
  }), { status: 200, headers: corsHeaders });
};

export const config = { path: "/api/wiki-write" };
