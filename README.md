# Mostafa Mohamed — Portfolio

Personal portfolio site for **Mostafa Mohamed Mahmoud** — final-year Computer
Science student at Mansoura University, full-stack developer working with
**React** on the frontend and **Django** or **.NET** on the backend.

React + Vite project, fully built: Intro loader → Navbar → Hero → About →
Skills → Works → Experience → Contact, plus a dedicated detail page per project.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Before you deploy

- [ ] Confirm `public/Profile.png` is your real photo (replace it if not —
      keep the same filename, or update `PROFILE_IMAGE` in
      `src/data/skills.js` if you rename it)
- [ ] Add your real CV to `public/Mostafa-Mohamed-CV.pdf` (referenced by
      `CV_URL` in `src/data/skills.js` — currently no file there yet)
- [ ] Add real screenshots for GymX, Eflyer, QR Forge, and Arven in
      `public/works/<project>/` — Sarab, CineMatch and SentinelX already
      have real screenshots wired in `src/data/works.js`

## Project structure

```
portfolio/
├── index.html                 # HTML shell — meta tags, favicon, Google Fonts
├── vite.config.js
├── package.json
├── vercel.json / public/_redirects   # SPA rewrite rules for static hosting
├── public/
│   ├── Profile.png            # profile photo (replace with your own)
│   ├── favicon.svg            # branded "MM" favicon
│   └── works/                 # project screenshots, one folder per project
└── src/
    ├── main.jsx                # React entry point (BrowserRouter)
    ├── App.jsx                 # top-level layout: cursor + routes
    ├── Portfolio.jsx            # the single-page layout (all sections)
    ├── data/
    │   ├── skills.js            # name, contact links, skills, profile/CV paths
    │   └── works.js              # all 7 projects — summary, highlights, stack, links
    ├── components/
    │   ├── IntroLoader.jsx        # the loading-screen animation sequence
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx / GroupStop.jsx   # scroll-driven skills section
    │   ├── SkillMark.jsx          # renders a real brand logo, with a safe fallback
    │   ├── Works.jsx               # project carousel on the home page
    │   ├── Experience.jsx
    │   ├── Contact.jsx
    │   ├── SocialRail.jsx
    │   ├── Reveal.jsx               # shared fade-in-from-above wrapper
    │   └── Cursor.jsx
    ├── pages/
    │   └── ProjectDetail.jsx        # /works/:id — full case study per project
    └── styles/
        └── index.css                 # all styling, organized by section
```

## Intro loader sequence

`icons → lines → absorb → image → signature → pop → exit`

1. **icons** — every skill icon pops in, one after another, arranged in a ring.
2. **lines** — a thread is drawn from each icon to the center.
3. **absorb** — every icon is pulled inward along its own thread and shrinks away.
4. **image** — the profile photo grows out of the center, as if built from the icons.
5. **signature** — the name is "signed" letter by letter beneath the photo.
6. **pop** — the photo border pulses once (settle animation).
7. **exit** — the loader shrinks toward the navbar/hero and fades, revealing the real page underneath.

Plays once per browser session (`sessionStorage`), respects `prefers-reduced-motion`,
and has a "Skip" button.

## Real skill icons

Brand icons (Django, .NET, React, TypeScript, JavaScript, HTML5, CSS3,
PostgreSQL, MySQL, Docker, Git, GitHub, Linux, Red Hat, and more) load live
from the [Simple Icons CDN](https://simpleicons.org) with their official
colors — `https://cdn.simpleicons.org/<slug>/<hexColor>`. That means:

- They're the real, current, official logos — nothing hand-approximated.
- They need internet access in the visitor's browser to load.
- If any single icon ever fails to load (blocked domain, bad slug), it falls
  back automatically to a colored initial badge — see `SkillMark.jsx` — so
  nothing ever shows as a broken image.

Concept skills that have no real logo (REST APIs, OWASP Top 10, JWT, RBAC)
use a deliberate `lucide-react` icon instead — see `src/data/skills.js` to
change any of this.

## Color theme

The accent color is a dark burgundy gradient (`--accent-gradient` in
`src/styles/index.css`), used on the primary button and the ambient
background glow. Both dark and light mode are tuned to the same warm,
burgundy-leaning palette — light mode uses a warm cream background rather
than pure white.

## Deploying

`public/_redirects` (Netlify) and `vercel.json` (Vercel) are already
included so that direct links to a project page (e.g. `/works/sarab`) work
correctly on those platforms without extra configuration. For other static
hosts, make sure unknown paths fall back to `index.html`.
