# Guohao Li — Academic Homepage (v12)

A static, two-page academic homepage with an editorial / scholarly visual
design: white background, a muted academic accent, a serif display face
(Fraunces) paired with a refined reading serif (Newsreader), numbered
sections, a vertical education timeline, and reference-style paper lists.

## Files

- `index.html` — English homepage
- `zh.html` — Chinese homepage
- `assets/css/style.css` — full visual style (colors, fonts, layout, motion)
- `assets/js/main.js` — footer year, mobile navigation, active-section highlighting
- `assets/img/avatar-placeholder.svg` — portrait placeholder (replace with a real photo)

## Routine updates

Most content updates only require editing `index.html` and `zh.html`:

- **Papers** — add an `<li>` inside the relevant `<ol class="papers ...">`.
  Numbering (`01`, `02`, … for working papers; `[1]`, `[2]`, … for
  publications) is generated automatically by CSS.
- **Education** — add an `<li>` to `<ul class="timeline">` with three spans:
  `t-year`, `t-title`, `t-place`.
- **Research interests** — edit the `<ul class="chips">` in the sidebar.
- **Section numbers** (`01`–`05`) live in each `<span class="section-no">`.

## Notes

- Fonts are loaded from Google Fonts; if offline, the page falls back to
  Georgia / Songti and remains fully readable.
- To use a real portrait, replace `assets/img/avatar-placeholder.svg` (a
  square image around 360×360 px or larger works best).
- Layout is responsive: a sticky sidebar on desktop, a stacked header on
  tablets, and a collapsible menu on phones. A reduced-motion preference
  disables the load-in animation.

- English prose paragraphs use desktop two-sided alignment for a cleaner reading block; mobile keeps left alignment for readability.


## v13 refinements

- Removed numeric section labels for a cleaner heading hierarchy.
- Reformatted research projects into multi-line entries, aligned with the paper-list style.
- Emphasized advisor links and journal names with stronger color and italic styling.
