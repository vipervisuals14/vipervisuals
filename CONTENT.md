# VIPER VISUALS — content replacement guide

This site is built as a single, dependency-free HTML page with a hash-router
(`js/app.js`) so navigation is instant and it works on any $0/mo static host
(GitHub Pages, Cloudflare Pages). You only ever edit **two** files to add your
real work:

1. `js/app.js` — the `PROJECTS` array (titles, YouTube IDs, gallery clips)
2. `assets/` — drop in your actual videos, photos, and posters

---

## 1. Your logo (already in place)

`assets/img/viper-logo.gif` is your rotating logo and is used in the banner on
every route, including mobile.

> ⚠️ Performance note: your GIF is ~7.5 MB. It's displayed small in the header,
> but the browser still downloads the full file. If load time matters, consider
> exporting a smaller/optimised version or keeping `assets/img/viper-still.png`
> as a fallback for slow connections. Do not replace the GIF unless you want to.

---

## 2. Add your projects — `js/app.js`

At the top of `js/app.js` is the `PROJECTS` array. It is intentionally empty so
you don't get fake/invented work. Fill it with your real projects, e.g.:

```js
const PROJECTS = [
  {
    slug: 'jordan-poy',                 // unique, URL-safe id
    title: 'PROUD OF YOU',
    artist: 'JORDAN MACKAMPA',
    category: 'music-videos',           // music-videos | social-content | recaps | concerts | press | album-covers | merch | branding | creative-direction
    youtubeId: 'VIDEO_ID_HERE',         // just the YouTube ID, not the full URL
    poster: 'assets/img/posters/jordan-poy.webp',
    gallery: [
      { type: 'image', src: 'assets/img/gallery/shot-1.webp', caption: '' },
      { type: 'video', src: 'assets/video/clip-1.mp4', poster: 'assets/img/gallery/clip-1.jpg', caption: '' },
    ],
  },
  // …add as many as you like
];
```

Rules:
- `slug` must be unique and URL-safe (no spaces).
- `category` controls which subcategory page the project appears on.
- `youtubeId` is what goes on the individual project page under the title.
- `gallery` is the scrollable production gallery underneath the YouTube video.
- Leave `gallery: []` if you have no clips yet — the page still works.

---

## 3. Homepage hero video

The homepage is zero-scroll: header + one large immersive video. In `js/app.js`
`renderHome()` there's a commented block showing two options:

**Option A — self-hosted (fastest first paint):**
```html
<video playsinline muted loop poster="assets/img/posters/hero.jpg">
  <source src="assets/video/hero.webm" type="video/webm">
  <source src="assets/video/hero.mp4" type="video/mp4">
</video>
```
Use a short (5–15 s), compressed, looping MP4/WebM. Keep it under ~5–10 MB.
Add a `poster` image so something paints immediately.

**Option B — YouTube embed (free, offloads bandwidth):**
```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"
        loading="lazy" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

Replace the `.hero-placeholder` play button with whichever you choose, then
remove the `hero-note` placeholder text.

---

## 4. Images & video assets

Put everything under `assets/`:

```
assets/img/viper-logo.gif        (your logo — already here)
assets/img/posters/*.webp        (hero + project posters)
assets/img/gallery/*.webp        (gallery stills)
assets/video/hero.mp4 / hero.webm (homepage hero)
assets/video/clip-*.mp4          (gallery clips — short, compressed)
```

Recommended free formats:
- Stills: **WebP** (or AVIF) — small, sharp
- Video: **MP4 (H.264)** or **WebM** — 1080p max, CRF ~23–28, short loops
- Lazy-loading is already applied to off-screen images/iframes.

No stock imagery is used anywhere — every media slot is a clearly-marked
placeholder until you drop in your real files.

---

## 5. Design panel (blank on purpose)

`#/design/merch`, `#/design/branding`, `#/design/creative-direction` are
intentionally empty "ready to populate" states. Add items to `PROJECTS` with the
matching `category` and they'll appear automatically.

---

## 6. Contact / Instagram

- The Instagram button is in the header top bar: `https://www.instagram.com/thevipervisuals`
- It's also in the mobile menu and the site footer.
- Contact is intentionally **not** in the top navigation, per your brief.

If you want a working contact form, wire a free endpoint (Formspree or
Web3Forms) into a `mailto:`/form. See the publishing README for the current
placeholder note.

---

## 7. Publishing (free)

See `README.md` for GitHub + Cloudflare Pages setup and how to connect
`vipervisuals.ca`.
