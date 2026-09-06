// Restricted site writer for the bra-research static site.
// POST /api/site-write
// Body: { path, content, encoding?, message?, secret }

const REPO = "lobbycarroll-bot/bra-research-kb";
const BRANCH = "main";
const SITE_ROOT = "site";
const LIVE_ORIGIN = "https://bra-research.netlify.app";
const WRITE_SECRET = process.env.WIKI_WRITE_SECRET;
const GH_TOKEN = process.env.GITHUB_TOKEN_KB;

const HTML_PATHS = new Set([
  "index.html",
  "shopping.html",
  "kb/index.html",
  "articles/ambitionner-full-34-12-cup.html",
  "articles/armeria-marine-bra-considerations.html",
  "articles/lina7792-custom-bra-drafting.html",
  "articles/rysso-cup-seams-1.html",
  "articles/rysso-cup-shapes-2.html",
  "articles/sina-bra-pattern-drafting-wire-first.html",
  "articles/tianyi-elian-bra-components.html",
]);

const EXACT_SUPPORT_PATHS = new Set([
  "styles/site.css",
  "scripts/site.js",
  "data/site.json",
  "data/site-version.json",
]);

const ASSET_ROOTS = new Set([
  "ambitionner-full-34-12-cup",
  "armeria-marine-bra-considerations",
  "lina7792-custom-bra-drafting",
  "rysso-cup-seams-1",
  "rysso-cup-shapes-2",
  "tianyi-elian-bra-components",
]);

const TEXT_EXTENSIONS = new Set([".html", ".css", ".js", ".json"]);
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);
const FORBIDDEN_NAMES = new Set([
  "_headers",
  "_redirects",
  "netlify.toml",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
]);
const MAX_TEXT_BYTES = 2 * 1024 * 1024;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

const jsonResponse = (status, body, corsHeaders) =>
  new Response(JSON.stringify(body), { status, headers: corsHeaders });

function extension(path) {
  const dot = path.lastIndexOf(".");
  return dot === -1 ? "" : path.slice(dot).toLowerCase();
}

function validatePath(input) {
  if (typeof input !== "string" || !input || input.includes("\0") || input.includes("\\")) {
    return { error: "path must be a non-empty relative POSIX path" };
  }
  if (input.startsWith("/") || /^[A-Za-z]:/.test(input)) {
    return { error: "absolute paths are not allowed" };
  }

  const parts = input.split("/");
  if (parts.some((part) => !part || part === "." || part === "..")) {
    return { error: "empty, dot, and traversal path segments are not allowed" };
  }
  if (parts.some((part) => part.startsWith("."))) {
    return { error: "hidden files and directories are not allowed" };
  }

  const lowerParts = parts.map((part) => part.toLowerCase());
  if (
    lowerParts.some(
      (part) =>
        FORBIDDEN_NAMES.has(part) ||
        part === "functions" ||
        part === "credentials" ||
        part === "secrets" ||
        part === "environment" ||
        part === "env" ||
        part.startsWith(".env") ||
        part.includes("credential") ||
        part.includes("secret"),
    )
  ) {
    return { error: "configuration, function, environment, and credential paths are forbidden" };
  }

  const ext = extension(input);
  if (!TEXT_EXTENSIONS.has(ext) && !IMAGE_EXTENSIONS.has(ext)) {
    return { error: "file extension is not permitted" };
  }

  if (HTML_PATHS.has(input) || EXACT_SUPPORT_PATHS.has(input)) {
    return { path: input, ext };
  }

  if (parts.length === 3 && parts[0] === "assets" && ASSET_ROOTS.has(parts[1])) {
    if (!IMAGE_EXTENSIONS.has(ext) || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(parts[2])) {
      return { error: "asset filename or extension is not permitted" };
    }
    return { path: input, ext };
  }

  return { error: "path is not on the bra-research site allowlist" };
}

function decodeContent(content, encoding, ext) {
  if (typeof content !== "string") {
    return { error: "content must be a string" };
  }

  if (IMAGE_EXTENSIONS.has(ext)) {
    if (encoding !== "base64") {
      return { error: "image assets require encoding=base64" };
    }
    let bytes;
    try {
      bytes = Buffer.from(content, "base64");
    } catch {
      return { error: "invalid base64 image content" };
    }
    if (!bytes.length || bytes.length > MAX_IMAGE_BYTES) {
      return { error: "image content must be between 1 byte and 8 MiB" };
    }
    if (bytes.toString("base64").replace(/=+$/, "") !== content.replace(/\s/g, "").replace(/=+$/, "")) {
      return { error: "invalid base64 image content" };
    }
    return { bytes };
  }

  if (encoding && encoding !== "utf8") {
    return { error: "text files require encoding=utf8 or no encoding field" };
  }
  const bytes = Buffer.from(content, "utf8");
  if (!bytes.length || bytes.length > MAX_TEXT_BYTES) {
    return { error: "text content must be between 1 byte and 2 MiB" };
  }

  if (ext === ".html") {
    if (
      !/<!doctype html>/i.test(content) ||
      !/<html[\s>]/i.test(content) ||
      !/<body[\s>]/i.test(content)
    ) {
      return { error: "HTML must contain a doctype, html element, and body element" };
    }
  } else if (ext === ".json") {
    try {
      JSON.parse(content);
    } catch {
      return { error: "JSON content is invalid" };
    }
  }

  return { bytes };
}

function liveUrl(path) {
  if (path === "index.html") return `${LIVE_ORIGIN}/`;
  if (path.endsWith("/index.html")) return `${LIVE_ORIGIN}/${path.slice(0, -"index.html".length)}`;
  if (path.endsWith(".html")) return `${LIVE_ORIGIN}/${path.slice(0, -".html".length)}`;
  return `${LIVE_ORIGIN}/${path}`;
}

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
    return jsonResponse(405, { ok: false, error: "POST required" }, corsHeaders);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonResponse(400, { ok: false, error: "Invalid JSON body" }, corsHeaders);
  }

  const { path, content, encoding = "utf8", message, secret } = body;
  if (!WRITE_SECRET || secret !== WRITE_SECRET) {
    return jsonResponse(403, { ok: false, error: "Invalid secret" }, corsHeaders);
  }
  if (!GH_TOKEN) {
    return jsonResponse(503, { ok: false, error: "Site writer is not configured" }, corsHeaders);
  }

  const checkedPath = validatePath(path);
  if (checkedPath.error) {
    return jsonResponse(400, { ok: false, error: checkedPath.error }, corsHeaders);
  }

  const decoded = decodeContent(content, encoding, checkedPath.ext);
  if (decoded.error) {
    return jsonResponse(400, { ok: false, error: decoded.error }, corsHeaders);
  }

  const repoPath = `${SITE_ROOT}/${checkedPath.path}`;
  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${repoPath}`;
  const githubHeaders = {
    Authorization: `Bearer ${GH_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "bra-research-site-writer",
  };

  const existingResponse = await fetch(`${apiUrl}?ref=${BRANCH}`, { headers: githubHeaders });
  let sha;
  if (existingResponse.ok) {
    const existing = await existingResponse.json();
    if (existing.type !== "file") {
      return jsonResponse(400, { ok: false, error: "target is not a regular file" }, corsHeaders);
    }
    sha = existing.sha;
  } else if (existingResponse.status !== 404) {
    return jsonResponse(
      502,
      { ok: false, error: `GitHub read failed with HTTP ${existingResponse.status}` },
      corsHeaders,
    );
  }

  const commitMessage =
    typeof message === "string" && message.trim()
      ? message.trim().slice(0, 120)
      : `Update bra-research ${checkedPath.path}`;

  const putResponse = await fetch(apiUrl, {
    method: "PUT",
    headers: { ...githubHeaders, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: commitMessage,
      content: decoded.bytes.toString("base64"),
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!putResponse.ok) {
    return jsonResponse(
      502,
      { ok: false, error: `GitHub write failed with HTTP ${putResponse.status}` },
      corsHeaders,
    );
  }

  const result = await putResponse.json();
  const commit = result.commit?.sha;
  return jsonResponse(
    200,
    {
      ok: true,
      path: checkedPath.path,
      repository_path: repoPath,
      commit,
      commit_url: result.commit?.html_url,
      source_url: `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${repoPath}`,
      deploy: {
        automatic: true,
        workflow_url: `https://github.com/${REPO}/actions/workflows/deploy-site.yml`,
        live_url: liveUrl(checkedPath.path),
      },
    },
    corsHeaders,
  );
};

export const config = { path: "/api/site-write" };
