---
name: Ilhaam Ghiffari — Platform Engineering Portfolio
description: Terminal-first portfolio; dark shell, lime phosphor accent, mono body with serif name.
colors:
  void-black: "#0a0a0b"
  shell-grey: "#121214"
  ghost-white: "#eeece4"
  faded-echo: "#c4c2b8"
  dim-prompt: "#8b8981"
  lime-volt: "#c9f24f"
  accent-ink: "#0a0a0b"
  cursor-white: "#ffffff"
  cursor-white-soft: "rgba(255, 255, 255, 0.7)"
  cursor-white-faint: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(3rem, 12vw, 10.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.25em"
    textTransform: "uppercase"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section-y: "clamp(64px, 13vh, 176px)"
  row-y: "clamp(28px, 4.5vh, 48px)"
components:
  nav-link:
    typography: "{typography.label}"
    textColor: "{colors.ghost-white}"
  lang-toggle:
    typography: "{typography.label}"
    textColor: "{colors.ghost-white}"
  cta-link:
    typography: "{typography.label}"
    textColor: "{colors.ghost-white}"
  contact-mail:
    typography: "{typography.display}"
    textColor: "{colors.ghost-white}"
---

# Design System: Ilhaam Ghiffari — Platform Engineering Portfolio

## Overview

**Creative North Star: "The Root Prompt"**

The portfolio presents itself as a live terminal session with root access: a near-black shell, one phosphor-lime accent used like highlighted output, and a machine voice (JetBrains Mono) carrying everything except the moments that belong to a human — the name, rendered in a warm serif, italic where it breathes. The visitor is not reading a résumé page; they are dropped into an operator console for the person behind it.

Density is editorial-meets-console: generous vertical rhythm, hairline separators instead of cards, sharp corners everywhere, a fine grain like phosphor on glass. Depth is tonal, never shadowed. Motion is deliberate and transform-based — clip-path reveals, expo-out entrances — and fully disabled under `prefers-reduced-motion`.

**Key Characteristics:**
- Two voices: machine (mono) for everything, human (serif) for the name and headline moments.
- One accent color, spent like terminal highlight: rare, meaningful, never decorative at scale.
- No cards, no rounded corners, no shadows, no gradients — separation by hairline rules and spacing.
- Index-numbered sections and mono labels make the whole page read like shell output.
- Motion exists to reveal structure (clip-path, translate), never to bounce or decorate.

## Colors

One warm off-white ink family on a cold near-black shell, with a single phosphor accent. Character: hardware terminal at night.

### Primary
- **Lime Volt** (#c9f24f): the only accent. Hover states, selection, status pulse, index markers, active nav. Spent in small doses — its rarity is its power.

### Neutral
- **Void Black** (#0a0a0b): page background. The shell.
- **Shell Grey** (#121214): soft surface for the terminal block and secondary panels.
- **Ghost White** (#eeece4): primary text. Warm, not pure white.
- **Faded Echo** (#c4c2b8): secondary text / dimmed ink.
- **Dim Prompt** (#8b8981): labels, meta, muted copy.
- **Accent Ink** (#0a0a0b): text on Lime Volt (selection, active toggle).

### Decorative
One color exists only as cursor hardware, never as content color:
- **Cursor White** (#ffffff + 0.7 / 0.08 alphas): the custom cursor overlay — tinted white for softness over dark surfaces.

### Named Rules
**The Rarity Rule.** Lime Volt appears on ≤5% of any given screen. If a design needs more of it, the design is wrong — not the accent.

## Typography

**Display Font:** Instrument Serif (fallback Georgia, serif)
**Body Font:** JetBrains Mono (fallback ui-monospace, monospace)
**Label/Mono Font:** JetBrains Mono

**Character:** A machine/human dialogue. Monospace is the default voice — honest, technical, no serif sentimentality — except the name and headline moments, where a warm serif says "a person runs this console."

### Hierarchy
- **Display** (400, clamp(48px→172px), 1.02): the name in the hero, section titles, the contact mailto. Instrument Serif, letter-spacing −0.01em.
- **Body** (400, 16px, 1.55): all running text and blog prose. JetBrains Mono, tracking 0.
- **Label** (400, 12px, 0.25em, uppercase): section kickers, nav, indexes, footer — the shell's prompt text. Never used on running text.

### Micro Scale
The console voice has a documented hierarchy, all JetBrains Mono:
- **8px** — the kicker dot separator (decorative only).
- **12px** — the label floor: nav, section kickers, footer, chips, note pills, terminal body & input, row meta, live badges, diagram text. Labels are uppercase, tracked 0.25em; meta is lowercase with zero tracking.
- **13–14px** — hero status, list rows.
- **15px** — the hero role line ("platform engineer").

Headline moments (Instrument Serif) scale by context — work rows `clamp(30px, 4.2vw, 56px)`, contact mailto `clamp(48px, 8.5vw, 128px)`, case-study titles `clamp(44px, 6vw, 96px)`, section biglines `clamp(36px, 4.5vw, 66px)` — always serif, always a "human" moment per The Two-Voice Rule.

### Named Rules
**The Output-Voice Rule.** Text that *speaks* (role, status, CTA links, tags, meta, kicker) is lowercase mono with zero tracking — shell output. Text that *labels* (nav, section kickers, indexes) is uppercase, tracked 0.25em — chrome. Never apply the label voice to running text, and never track lowercase text.

### Named Rules
**The Two-Voice Rule.** If a string is part of the machine's output, it is mono. The serif is reserved for the human's name and its echoes — nothing else gets it.

## Layout

Single column with a max content width of 1520px, gutters `clamp(20px, 4vw, 56px)`, section rhythm `clamp(64px, 13vh, 176px)`. Sections are separated by 1px `var(--line)` hairlines (`.section-rule`) rather than cards. Lists (work, blog) are stacked grid rows with top hairlines: work rows are `56px 1fr auto 44px` (index / title / meta / arrow), blog rows `1fr auto auto` (title / date / arrow). Hover indents rows 10–12px via `transform: translateX` — never layout properties.

## Elevation & Depth

**Flat by doctrine.** No box-shadows anywhere in the system. Depth is conveyed by tonal layering (Void Black → Shell Grey) and by hairlines. The grain overlay (`mix-blend-mode: overlay`, 5% opacity, animated in 8s steps) supplies texture — phosphor dust on the glass — without any elevation.

### Named Rules
**The Flat-By-Default Rule.** A surface that needs a shadow is a surface that needs a rethink. Separate with tone and rules, not elevation.

## Shapes

Sharp corners everywhere — radius 0 is the system's default radius. Separation language is the 1px hairline (`var(--line)` / `var(--line-strong)`). The only "shape" vocabulary is linear: horizontal rules, vertical cursor bars, square index markers. Two deliberate exceptions: the case-study architecture diagram carries the window chrome radius (`10px`), and result markers are circles (`50%`) — hardware, not surface.

## Components

### Navigation
- **Style:** mono-label links (10–11px, uppercase, 0.25em tracking), inline, ghost-white at rest.
- **Hover / Active:** lime volt; active section underlined by a 1px accent rule.
- **Language toggle:** EN/ID text buttons; the active locale fills with Lime Volt + Accent Ink.
- **Mobile:** full-screen overlay menu, links at clamp(40px, 13vw, 64px) with index numbers (`01`, `02`…), accent on hover.

### CTA Links
- **Shape:** no button chrome — text link with a small arrow (`↓`) that translates on hover.
- **Style:** mono-label, ghost-white; hover → lime volt.

### Work / Blog Rows
- **Corner Style:** none (sharp).
- **Background:** transparent; separated by 1px top hairlines.
- **Internal Padding:** clamp(28px, 4.5vh, 48px) 14px (work), 34px 12px (blog).
- **Hover:** row translates 10–12px right, title turns lime volt, arrow fades in.

### Contact Mail
- **Style:** the name's voice — Instrument Serif at clamp(48px, 8.5vw, 128px), underline border that turns lime volt on hover.

### Signature Component — Terminal
A bare, chrome-less console pane on Shell Grey (`--bg-soft`) — no window bar, no traffic-light dots, sharp corners, hairline border. The prompt is real (`ilhaam@lab:~$`) and so is the vocabulary: `whoami`, `stack`, `projects`, `status`, `contact` — the commands a platform engineer actually types. Output renders instantly (no typewriter boot), and the terminal speaks the machine's language: command output stays English even on the ID page, like a real shell.

### Command Marquee
A slow scrolling strip of real shell commands (`terraform plan` · `kubectl apply -f` · `argocd app sync` …) separated by lime dots, paused on hover, `aria-hidden`. It reads like shell history scrolling past — not a keyword word-soup. The only uppercase text on the page is in labels, by design.

## Do's and Don'ts

### Do:
- **Do** keep the accent rare — a pulse dot, a hover, a selection (The Rarity Rule).
- **Do** separate surfaces with 1px hairlines and tonal steps, never shadows or cards.
- **Do** write every label in the mono voice, uppercase, tracked 0.25em.
- **Do** animate with transforms and clip-paths only; honor `prefers-reduced-motion` (the global kill switch is intentional and complete).
- **Do** let Instrument Serif appear only where the human speaks (name, headline moments).

### Don't:
- **Don't** introduce cards, rounded corners, gradients, glows, or box-shadows — they break the console illusion.
- **Don't** put the accent on more than ~5% of a screen.
- **Don't** use bounce/elastic easing anywhere; the system's easing is expo-out / cubic-bezier(0.16, 1, 0.3, 1).
- **Don't** switch body text off JetBrains Mono — the machine voice is the identity.
- **Don't** add decorative hero imagery, stock gradients, or template phrases; the terminal IS the imagery.
- **Don't** give the terminal window chrome — traffic-light dots, title bars, rounded glass. A real console pane is a flat hairline box with a prompt.
