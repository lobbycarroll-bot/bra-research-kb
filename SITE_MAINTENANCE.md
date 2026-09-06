# Bra Research Site Maintenance

The public site source lives under `site/` in this repository and deploys automatically to Netlify after an accepted push to `main`.

## Read

Every deployed source file is publicly readable without authentication:

```text
https://raw.githubusercontent.com/lobbycarroll-bot/bra-research-kb/main/site/{path}
```

Examples:

- `shopping.html`: `https://raw.githubusercontent.com/lobbycarroll-bot/bra-research-kb/main/site/shopping.html`
- `index.html`: `https://raw.githubusercontent.com/lobbycarroll-bot/bra-research-kb/main/site/index.html`
- Article: `https://raw.githubusercontent.com/lobbycarroll-bot/bra-research-kb/main/site/articles/ambitionner-full-34-12-cup.html`
- Asset: `https://raw.githubusercontent.com/lobbycarroll-bot/bra-research-kb/main/site/assets/ambitionner-full-34-12-cup/01.jpg`

Use the GitHub tree API to enumerate every exact file path:

```text
https://api.github.com/repos/lobbycarroll-bot/bra-research-kb/git/trees/main?recursive=1
```

Select entries whose path starts with `site/`, then use the raw URL pattern above.

## Write

Endpoint:

```text
POST https://bra-research.netlify.app/api/site-write
Content-Type: application/json
```

Text request:

```json
{
  "path": "shopping.html",
  "content": "<!DOCTYPE html>...",
  "encoding": "utf8",
  "message": "Update shopping guidance",
  "secret": "<securely configured value>"
}
```

Image request:

```json
{
  "path": "assets/ambitionner-full-34-12-cup/01.jpg",
  "content": "<base64 bytes>",
  "encoding": "base64",
  "message": "Update translated image",
  "secret": "<securely configured value>"
}
```

The authentication field is named `secret`. It uses the same server-side `WIKI_WRITE_SECRET` already provisioned for `wiki-write`; never place its value in chat, source control, logs, or documentation.

### Writable paths

- `index.html`
- `shopping.html`
- `kb/index.html`
- Existing allowlisted files under `articles/`
- Existing allowlisted article directories under `assets/`
- `styles/site.css`
- `scripts/site.js`
- `data/site.json`
- `data/site-version.json`

Allowed extensions are `.html`, `.css`, `.js`, `.json`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, and `.avif`. Image content must be base64. The endpoint rejects absolute paths, backslashes, dot segments, traversal, hidden paths, symlink targets, configuration files, environment files, dependency manifests, Netlify configuration, functions, credentials, secrets, unsupported extensions, and paths outside the allowlist.

An accepted write creates a GitHub commit. The response includes the repository path, full commit SHA, source URL, workflow URL, and expected live URL. The commit automatically starts the `Deploy bra-research site` workflow.

Deployment status:

```text
https://github.com/lobbycarroll-bot/bra-research-kb/actions/workflows/deploy-site.yml
```

After the workflow succeeds, fetch the returned `live_url` and verify the expected content. GitHub's public workflow-runs API can also be polled:

```text
https://api.github.com/repos/lobbycarroll-bot/bra-research-kb/actions/workflows/deploy-site.yml/runs?branch=main&per_page=1
```

## Important distinction

`POST /api/wiki-write` updates only `.md` and `.txt` research files in the repository root. It does **not** update the hard-coded Netlify pages.

`POST /api/site-write` updates allowlisted files under `site/` and automatically deploys them to `https://bra-research.netlify.app`.
