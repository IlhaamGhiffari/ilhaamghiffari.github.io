# Ilhaam Ghiffari

**Platform engineer** building cloud infrastructure, automation, and developer tooling — with a side track in data/hydrology engineering.

[![Live](https://img.shields.io/website?up_message=live&down_message=offline&label=ilhaamghiffari.codes&url=https%3A%2F%2Filhaamghiffari.codes&color=0a0a0b)](https://ilhaamghiffari.codes)
[![CI](https://github.com/IlhaamGhiffari/ilhaamghiffari.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/IlhaamGhiffari/ilhaamghiffari.github.io/actions/workflows/deploy.yml)
[![Svelte](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-0a0a0b?logo=open-source-initiative&logoColor=white)](LICENSE)

Source code of [ilhaamghiffari.codes](https://ilhaamghiffari.codes) — a personal portfolio focused on **platform engineering** (cloud, IaC, Kubernetes, CI/CD) and **water-resources engineering** (debit andalan, F.J. Mock, ETo). Built with SvelteKit, animated with GSAP + Lenis, deployed to GitHub Pages via GitHub Actions.

![Hero section](static/preview/hero.png)

![Work section](static/preview/work.png)

## Table of Contents

- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [CI/CD](#cicd)
- [Custom Domain](#custom-domain)
- [Contact](#contact)
- [License](#license)

## Highlights

- **Editorial dark design** — Instrument Serif display type, mono accents, film-grain texture
- **Motion-forward** — split-text hero reveal, scroll-triggered animations (GSAP ScrollTrigger), smooth scrolling (Lenis), custom cursor
- **Accessibility-minded** — semantic HTML, `prefers-reduced-motion` fully respected, keyboard-focus states
- **Fully static** — prerendered output, no server required, fast on Pages
- **Real content** — every project, metric, and link is verifiable (no placeholders)

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | [SvelteKit](https://svelte.dev) 5 · `@sveltejs/adapter-static` |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Animation | [GSAP](https://gsap.com) (ScrollTrigger) · [Lenis](https://lenis.darkroom.engineering) |
| Fonts | Instrument Serif · Inter · JetBrains Mono (Google Fonts) |
| Hosting | [GitHub Pages](https://pages.github.com) |
| CI/CD | GitHub Actions (`deploy.yml`) |

## Project Structure

```
.
├── .github/workflows/deploy.yml   # CI/CD — build & deploy to GitHub Pages
├── src/
│   ├── app.css                    # design tokens, reset, utilities
│   ├── lib/
│   │   ├── components/            # Hero, Work, About, Contact, Nav, Cursor, Marquee
│   │   ├── data.ts                # content: projects, skills, timeline
│   │   └── motion.ts              # Lenis + GSAP/ScrollTrigger wiring
│   └── routes/                    # +layout.svelte, +page.svelte (prerendered)
│       ├── work/[slug]/           # project case studies
│       └── blog/[slug]/           # engineering blog posts
├── static/
│   ├── CNAME                      # custom domain: ilhaamghiffari.codes
│   ├── resume.pdf                 # downloadable CV
│   ├── robots.txt · sitemap.xml   # SEO
│   ├── 404.html                   # custom 404
│   └── preview/                   # screenshots used in this README
└── package.json
```

## Getting Started

Requires **Node.js 22+** and npm.

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:5173
npm run check     # svelte-check (type checking)
npm run build     # prerender static site → build/
npm run preview   # serve the production build locally
```

## CI/CD

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes the site on every push to `main` (or manual `workflow_dispatch`):

1. `checkout` + `setup-node` (v22, npm cache)
2. `npm ci` → `npm run build` (prerendered static output)
3. `upload-pages-artifact` → `deploy-pages` (Pages source: **GitHub Actions**)

No manual deploy steps — push and it ships.

## Custom Domain

`ilhaamghiffari.codes` (apex) is configured via `static/CNAME`. DNS at the registrar:

```
A     @    → 185.199.108.153
A     @    → 185.199.109.153
A     @    → 185.199.110.153
A     @    → 185.199.111.153
CNAME www  → ilhaamghiffari.github.io
```

TLS is auto-provisioned by GitHub (Let's Encrypt); `www` ↔ apex redirect is automatic.

## Contact

- **Website** — [ilhaamghiffari.codes](https://ilhaamghiffari.codes)
- **GitHub** — [IlhaamGhiffari](https://github.com/IlhaamGhiffari)
- **LinkedIn** — [in/ilhaam-ghiffari-3b3b27217](https://www.linkedin.com/in/ilhaam-ghiffari-3b3b27217)
- **Email** — [ghiffariilhaam@gmail.com](mailto:ghiffariilhaam@gmail.com)

## License

MIT — see [LICENSE](LICENSE).

---

© 2026 Muhaammad Ilhaam Ghiffari · [ilhaamghiffari.codes](https://ilhaamghiffari.codes)
