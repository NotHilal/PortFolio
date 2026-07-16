# Portfolio

A personal portfolio site built with React, Tailwind CSS, and Framer Motion.
Dark, editorial, typography-first design — near-black background, huge
bold serif hero with a gold/silver shimmer, one gold accent color used
throughout, projects shown one per row alternating left/right with a
description and Live/GitHub buttons. One-page layout: Hero, About,
Experience, Projects, Contact.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

Build for production:

```bash
npm run build
```

The output goes to `dist/` — deploy that folder to Vercel, Netlify, GitHub
Pages, or any static host.

## Customizing

- **Your info** — edit `src/data/profile.js` (name, role, tagline, bio,
  email, resume link, social links, skills).
- **Your experience** — edit `src/data/experience.js` (org, role,
  description, and `period` — currently `null`/"Ongoing" everywhere until
  you fill in real dates).
- **Your projects** — edit `src/data/projects.js`. Each entry supports:
  - `title`, `type` (`"website"` or `"app"` — controls which gallery it
    lands in), `category`, `year`, `tags` (array), `description`
  - `image` — import a screenshot from `src/assets/` and it fills the
    frame. Leave `null` and the row falls back to a plain title card.
  - `liveUrl` — shows a solid gold "Live site" button when set
  - `githubUrl` — shows an outlined "GitHub" button when set
  - Leave both `null` and the row reads "Private project" instead — a
    project can have just one link, both, or neither.
- **Resume** — drop a PDF at `public/resume.pdf` and it'll match the
  `resumeUrl` default in `profile.js`.
- **Favicon** — `public/favicon.svg` (gold "H" monogram — swap the letter
  or redraw it for your own initials).
- **Social preview image** — `public/og-image.png`, shown when the link is
  shared on LinkedIn/Slack/etc. Regenerate it after changing your name,
  role, or tagline with `node scripts/generate-og.mjs` (uses `sharp`,
  already a dev dependency). Note the `og:image`/`twitter:image` tags in
  `index.html` use a root-relative path — once deployed, swap them for the
  full `https://yourdomain.com/og-image.png` URL, since the OG spec
  technically wants an absolute one.
- **Colors** — all in the `@theme` block at the top of `src/index.css`
  (`--color-paper`, `--color-ink`, `--color-accent`, etc.). The gold/silver
  shimmer gradient used on the hero name and closing CTA is the
  `.text-shine` class further down that same file.
- **Fonts** — Fraunces (display serif), Instrument Sans (body), IBM Plex
  Mono (labels/numbers), loaded via Google Fonts in `index.html`.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) — line-reveal headline animation
  (`src/components/Reveal.jsx`), the scroll progress bar
  (`src/components/ScrollProgress.jsx`), the magnetic hover on buttons/CTAs
  (`src/components/Magnetic.jsx`), and the fade-ins used throughout
- [Lenis](https://lenis.darkroom.engineering/) for inertial smooth
  scrolling (`src/components/SmoothScroll.jsx`) — disabled automatically
  under `prefers-reduced-motion`, and intercepts `#hash` links so nav/CTA
  clicks scroll smoothly instead of jumping
- [lucide-react](https://lucide.dev/) for generic icons (GitHub/LinkedIn
  logos are hand-rolled SVGs in `src/components/icons/BrandIcons.jsx`, since
  lucide-react's v1 release dropped brand icons)
- [sharp](https://sharp.pixelplumbing.com/) (dev-only) to rasterize the OG
  image from SVG — see `scripts/generate-og.mjs`
