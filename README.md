# Mohamed Ayman — Portfolio

React + Vite project. Current build phase: **Intro loader → Navbar → Hero**.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

Uses [Framer Motion](https://www.framer.com/motion/) (`useScroll` + `useTransform`) to
drive the Home → About photo transition directly off scroll position — see
"The Home → About scene" below.

## Project structure

```
portfolio/
├── index.html                 # HTML shell, loads Google Fonts (Sora / Inter / Dancing Script)
├── vite.config.js
├── package.json
├── public/                    # put profile.jpg, CV.pdf, favicon, etc. here
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # top-level layout: intro + navbar + scene + sections
    ├── data/
    │   └── skills.js            # single source of truth for the tech-stack list
    ├── components/
    │   ├── IntroLoader.jsx      # the loading-screen animation sequence
    │   ├── Navbar.jsx
    │   ├── HeroAbout.jsx        # Home + About as one continuous Framer Motion scroll scene
    │   ├── Reveal.jsx           # shared fade-in-from-above wrapper for the lower sections
    │   ├── SkillMark.jsx        # renders a real brand logo or a fallback icon
    │   └── Placeholder.jsx      # stub for Skills/Works/Experience/Contact
    └── styles/
        └── index.css            # all styling, organized by section
```

## The Home → About scene

`HeroAbout.jsx` is not two separate sections — it's one tall scroll region
(`.scene-wrap`) with a `position: sticky` viewport inside it. Framer Motion's
`useScroll` tracks scroll progress across that region (0 → 1), and
`useTransform` maps that progress straight onto the photo's position, scale,
rotation and blur:

- top-right (Home) → bottom-left (About), continuously, in lockstep with your scroll
- scroll back up and the motion reverses exactly — there's no "play once" animation
- Hero text fades out over the first ~35% of the scroll, About text fades in
  over the last ~45%, both scroll-linked the same way
- `prefers-reduced-motion` disables the movement entirely (position/scale/blur
  all collapse to static values) while keeping the opacity crossfade

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

Brand icons (PHP, Laravel, MySQL, JavaScript, Bootstrap, HTML5, CSS3, Flutter, Dart,
Git, GitHub, Postman, Linux, Apache, JWT, Composer) load live from the
[Simple Icons CDN](https://simpleicons.org) with their official colors —
`https://cdn.simpleicons.org/<slug>/<hexColor>`. That means:

- They're the real, current, official logos — nothing hand-approximated.
- They need internet access in the visitor's browser to load (not a build step).
- If a logo doesn't load in your environment, tell me and I'll swap in a local SVG.

Concept skills that have no real logo (REST APIs, PDO, Database Design, Query
Optimization, Transactions) use a deliberate `lucide-react` icon instead — see
`src/data/skills.js` to change any of this.

## To customize

- Replace `PROFILE_IMAGE` and `CV_URL` in `src/data/skills.js` with your real photo
  and CV file (drop the files in `public/` and reference them as `/profile.jpg`, etc.).
- Colors, spacing and every animation live in `src/styles/index.css`.

## Not built yet

About / Skills / Works / Experience / Contact are placeholder sections right now
(just so the navbar has somewhere to scroll to) — next build phase.
"# Portfolio" 
