# portfolio — Ilhaam Ghiffari

Awwwards-style portfolio: **SvelteKit** (static adapter) + GSAP/ScrollTrigger + Lenis,
deployed to **GitHub Pages** via GitHub Actions.

## Local dev

```bash
npm install
npm run dev        # dev server
npm run build      # static build → build/
npm run preview    # preview the static build
```

## Deploy

Push to `main` → the `.github/workflows/deploy.yml` workflow builds and publishes
to GitHub Pages automatically.

## Custom domain

`static/CNAME` declares `portfolio.ilhaamghiffari.tech`. Point DNS at GitHub:

```
CNAME  portfolio  →  ilhaamghiffari.github.io
```

(For a user-site repo `ilhaamghiffari.github.io`, no `base` path needed. If you use a
project repo instead, add `export const base = '/<repo>'` in `src/routes/+layout.ts`.)

## TODO before going live

- [x] Email aktif di `Contact.svelte`: ghiffariilhaam@gmail.com
- [ ] (Opsional) tambah `static/resume.pdf` + link "Resume" di nav
- [ ] (Opsional) LinkedIn link di contact section
- [ ] Set DNS CNAME `portfolio` → `ilhaamghiffari.github.io`
- [ ] Pilih nama repo: `ilhaamghiffari.github.io` (user site, clean root URL)

## Structure

```
src/
  app.css              # tokens, reset, utilities
  lib/motion.ts        # Lenis + GSAP/ScrollTrigger init
  lib/data.ts          # projects, facts, skills, timeline
  lib/components/      # Hero, Marquee, Work, About, Contact, Nav, Cursor
  routes/+layout.svelte
  routes/+page.svelte
```
