---
target: homepage
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-25T05-18-41Z
slug: src-routes-page-svelte
---
# Critique — Homepage Portfolio (Assessment A + B)

**Method: dual-agent (A: design review · B: detector + browser).** Skor heuristik: 24/32 (7 & 10 n/a, mode Experience).

## Design Specificity
Sistem visual authored & tegas (two-voice typography, Rarity Rule, flat-by-doctrine, konsol literal). Lapisan konten sebagian genre-conventional: chrome terminal (dots, prompt, whoami/ls/cat), marquee keyword, pulse status — beat standar genre "terminal portfolio". Verdict: 8/10 sistem, 5/10 interaksi & konten.

## Priority Issues (sebelum fix)
- **P0** Default bahasa EN vs komitmen brand ID + bug `<html lang>` tidak sinkron setelah reload (a11y). → FIXED: default 'id', setLang di init, app.html lang="id".
- **P0** Terminal (signature) `display:none` <1080px — hilang di mobile/tablet. → FIXED: tampil stacked (max-width 560px) + coords disembunyikan.
- **P1** Teks vertikal coords menimpa tepi kanan terminal (1440px). → FIXED: coords pindah ke kiri.
- **P1** Penomoran seksi kontradiktif (Work 03 / About 05 / Contact 06 vs nav 01–05). → FIXED: Work 01, About 02, Contact 03; Blog 01.
- **P2** Bukti terlemah di klaim inti (Golden Path repo privat, ON DEMAND) + credentials 8/10 ML untuk target DevOps. → sebagian FIXED: credentials diurutkan DevOps-first, 2 beginner Google dibuang; publish repo = aksi user.
- **P2** Hierarki hero salah arah untuk HR (nama 172px vs role/status 11–13px muted). → FIXED: role 15px ink-dim, status 13px ink-dim.

## Fix lain (dari B + minor)
- Kontras: 3 tag hero (lime 45% @9px = 3.71:1) → alpha 0.7 + 10px; `.cissuer/.where` opacity 0.55 (2.49:1) → full muted; `.year` opacity dihapus.
- Normalisasi drift ramp: `.lede` 17→16, prose case-study 15→16, 13.5/14.5 → 14, chip 10.5→10.
- Terminal: boot instant saat prefers-reduced-motion, aria-live dihapus, role/tabindex/keydown a11y, `cat about.txt` ditambahkan (bug ls vs cat), `cat projects.md` kini menampilkan stack.
- Marquee: PROPHET → TRIVY (positioning platform-only).
- Copy: ID bigline diperhalus; `term.welcome2` "resume 2026 — shell interaktif" (anti-template).
- Nav: scrollspy (active section) diimplementasikan.
- 43 advisory design-system → 0: 4 drift dinormalisasi, skala mikro didokumentasikan (DESIGN.md §Micro Scale), warna dekoratif didokumentasikan, 21 nilai intentional di-waive dengan alasan di config.

## Remaining (butuh user)
- Publish Golden Path / repo sandbox + metrik terukur di desc (angka biaya/waktu deploy).
- Screenshot Grafana/demo untuk case study.
