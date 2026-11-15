# VIPER VISUALS

Toronto video production / photography / design portfolio.
Built to feel like jedidahm.com (minimal, cinematic, editorial) using Viper
Visuals branding. Single-file vanilla JS app — no frameworks, $0/mo hosting.

## Structure
```
index.html             # app shell + hash router routes
css/style.css          # design system (black #000, panels #0f0f11, accent #3791DE)
js/app.js              # router + PROJECTS data + rendering
assets/img/viper-logo.gif   # rotating snake logo (banner, all routes)
_redirects             # SPA fallback + legacy redirect stubs
CNAME                  # vipervisuals.ca
CONTENT.md             # how to add your real logo/video/photos
```

## Routes
`#/` — Home (zero-scroll hero video)  
`#/video` → Music Videos / Social Content / Recaps → `#/video/project/<slug>`  
`#/photo` → Concerts / Press / Album Covers  
`#/design` → Merch / Branding / Creative Direction (blank, ready to populate)

## Add your content
Edit `js/app.js` → `PROJECTS` array and drop media into `assets/`. Full guide:
`CONTENT.md`.

## Publish for free

### Option 1: Cloudflare Pages (recommended, custom domain vipervisuals.ca)
1. Create a GitHub repo, e.g. `viper-visuals`, and push this folder:
   ```bash
   git add -A && git commit -m "Initial site build"
   git remote add origin https://github.com/vipervisuals14/viper-visuals.git
   git push -u origin main
   ```
2. In Cloudflare Pages: "Create a project" → connect the GitHub repo.
   Build command: none (static). Build output: leave blank / root.
3. Add domain `vipervisuals.ca` in Pages → Custom domains and follow the DNS
   instructions (CNAME / A records).
4. The `_redirects` file handles client-side routes on refresh.

### Option 2: GitHub Pages
1. Push to a repo, go to Settings → Pages → Build source: `Deploy from a
   branch` → `main` (or `docs`).
2. GitHub Pages serves the site at `https://vipervisuals14.github.io/<repo>/`.
   Hash routes work, but a direct refresh of a sub-route 404s unless you add a
   custom 404 that rewrites to `index.html`.

### Video hosting (free)
- Homepage hero: self-host a short compressed MP4/WebM in `assets/video/` —
  fastest load, you pay only GitHub/Cloudflare bandwidth (plenty for a
  portfolio).
- Project videos: YouTube embeds (`youtube-nocookie.com`) — free, unlimited,
  offloads all bandwidth. Just add the YouTube ID to `PROJECTS`.

## Notes
- Your `viper-logo.gif` is ~7.5 MB. It's used as-is per your request. If load
  time is a concern, export a smaller optimised version (see CONTENT.md).
- No frameworks, no paid plugins, no subscriptions. Everything is static and
  free to host.
