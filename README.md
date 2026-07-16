# Portfolio

A personal portfolio site built with React, Tailwind CSS, and Framer Motion.
Dark, editorial, typography-first design — near-black background, huge
bold serif hero with a gold/silver shimmer, one gold accent color used
throughout, projects shown as an image gallery split into Websites and
Apps. One-page layout: Hero, About, Projects, Contact.

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
- **Your projects** — edit `src/data/projects.js`. Each entry supports:
  - `title`, `type` (`"website"` or `"app"` — controls which gallery it
    lands in), `category`, `year`, `tags` (array)
  - `image` — import a screenshot from `src/assets/` and it fills the tile,
    with the category/title caption sliding in on hover. Leave `null` and
    the tile falls back to a plain title card.
  - `liveUrl` — shows a "Live" link when set
  - `githubUrl` — shows a "Source" link when set
  - Leave both `null` and the tile reads "Private" instead — a project can
    have just one link, both, or neither.
- **Resume** — drop a PDF at `public/resume.pdf` and it'll match the
  `resumeUrl` default in `profile.js`.
- **Favicon** — replace `public/favicon.svg`.
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
  (`src/components/Reveal.jsx`), the hover captions on project tiles
  (`src/components/ProjectTile.jsx`), and the fade-ins on the gold-tick
  section labels (`src/components/Eyebrow.jsx`)
- [lucide-react](https://lucide.dev/) for generic icons (GitHub/LinkedIn
  logos are hand-rolled SVGs in `src/components/icons/BrandIcons.jsx`, since
  lucide-react's v1 release dropped brand icons)
