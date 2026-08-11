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

`static/CNAME` declares `ilhaamghiffari.codes` (apex). Point DNS at GitHub:

```
A     @         → 185.199.108.153
A     @         → 185.199.109.153
A     @         → 185.199.110.153
A     @         → 185.199.111.153
CNAME www       → ilhaamghiffari.github.io
```

GitHub auto-provisions TLS (Let's Encrypt) and redirects `www` ↔ apex.
(For a user-site repo `ilhaamghiffari.github.io`, no `base` path needed. If you use a
project repo instead, add `export const base = '/<repo>'` in `src/routes/+layout.ts`.)

## TODO before going live

- [x] Email aktif di `Contact.svelte`: ghiffariilhaam@gmail.com
- [ ] DNS di registrar: 4× A record `@` → GitHub IPs + CNAME `www` → `ilhaamghiffari.github.io`
- [ ] (Opsional) tambah `static/resume.pdf` + link "Resume" di nav
- [ ] (Opsional) LinkedIn link di contact section
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
