# Asian Bra & Corsetry Research — Knowledge Base

> A shared, multi-agent research wiki. No auth needed to read. Push to update.

**Live browsable:** https://bra-research.netlify.app/kb/

---

## For Agents: How to Use This Wiki

### Read anything (no auth)

```bash
# Fetch any file directly
curl https://raw.githubusercontent.com/lobbycarroll-bot/bra-research-kb/main/glossary.md

# Or web_fetch the same URL in OpenClaw
```

All files are plain Markdown. Load any subset as model context.

### Update the wiki

```bash
cd /home/steve/.openclaw/workspace/bra-research-kb

# Pull latest first
git pull

# Edit any file (or create a new one)
# Then commit and push
git add -A
git commit -m "Add: [what you added]"
git push
```

Netlify auto-deploys within ~30 seconds of push.

### Add a new findings file

Create `findings/NN-topic-name.md` (increment the number), then add an entry to:
- `sources.md` if new sources were found
- `creators.md` if new creators were identified  
- `index.md` → update the file table
- `sites/bra-research/kb/index.html` → add a list item (or just redeploy from workspace)

### Conventions

- Files are plain Markdown; no special syntax needed
- Findings files should stand alone as context (don't assume the reader has session history)
- Preserve measurements in original units + English explanation
- Original-language terms → format as **term (romanisation if JP/KO)** = definition
- Sources get a quality rating: ⭐ to ⭐⭐⭐⭐⭐

---

## File Map

```
README.md               ← you are here
index.md                ← hub / overview
glossary.md             ← JP/KO/ZH → English term dictionary
sources.md              ← all sources, quality-rated
creators.md             ← people/channels worth following

findings/
  01-cup-construction.md    ← seam types, cup shapes, coverage vs volume
  02-small-bust-fitting.md  ← shallow/small-frame specific guidance
  03-wire-geometry.md       ← wire shapes, Asian vs Western supply
  04-body-casting.md        ← plaster casting, tape double, 3D scanning
  05-draping.md             ← draping methods for bras and corsets
  06-patterns-books.md      ← patterns, textbooks, schools
  07-asian-vs-western.md    ← hypothesis + evidence
```

---

## Subject

Jum (Steve's wife, Discord <@645323102380752916>): Asian, small-busted, small-framed. Underbust ~65–70 cm. Shallow, wide-set breasts. Interested in bra making, pattern drafting, corsetry.

English-language bra-making communities skew large-bust. This KB exists to surface and preserve knowledge from Japanese, Korean, and Chinese sources where the typical client is closer to Jum's geometry.

---

## Key Findings (quick reference)

- **Narrow-root wires:** jimura.jp (Japan, proxy required) sells L-type wires at 5.3cm width / 16.6cm length for size 65 — not available from Western suppliers at all. [→ findings/03]
- **Plate cups (お皿型):** Nearly flat; the correct cup shape for shallow busts. Wacoal ウンナナクール is the canonical example. Almost absent from Western retail. [→ findings/01, 02]
- **Wire-first drafting:** Chinese/Japanese industry drafts the cup FROM the wire arc, not from body measurements. [→ findings/03]
- **Low gore for small busts:** Chinese sources explicitly recommend 低鸡心 (low gore) for small/flat busts — a different default than Western guidance. [→ findings/01]
- **Plaster casting:** 石膏包帯法 is the only method that faithfully captures the apex-to-underbust break (the curve dress forms and 3D scans smooth away). [→ findings/04]
- **Draping is scale-invariant:** Draping from the actual body or from an existing bra auto-corrects for shallow cup depth — no formula needed. [→ findings/05]
