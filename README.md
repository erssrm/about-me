# Smruti Ranjan Mohanta — Portfolio

Personal portfolio and resume site. Plain HTML, CSS, and JavaScript — no framework, no build step.

**Live:** https://erssrm.github.io/about-me/

## What's here

- **`index.html`** — the portfolio: About, Experience, Projects, Skills, Education, and Contact, plus a hero "spec sheet" summary. Real semantic HTML (not JS-rendered), so it reads correctly for recruiters, screen readers, and search engines. Supports light/dark mode and has print styles for saving to PDF.
- **`resume.pdf`** — downloadable resume, linked from the hero.
- **`interactive/`** — the original interactive resume: an explorable D3.js force-graph with a Three.js character that tracks your cursor. Kept as a linked showcase project rather than the main entry point. Edit `js/training-data.js` to change its content.
- **`robots.txt`** / **`sitemap.xml`** — search engine indexing config.

## Project structure

```
index.html            Main portfolio (start here)
css/main.css           Styles for the main portfolio
js/main.js             Nav, theme toggle, project detail modals

interactive/            Bonus: D3.js + Three.js interactive resume
  index.html
css/base.css, training.css
js/script.js, training.js, training-data.js
model/, fonts/          Three.js character assets

images/                Shared image assets (project screenshots, logos, photo)
resume.pdf             Downloadable resume
```

## Running locally

```
npm install
npm start
```

Then open http://127.0.0.1:8080/. `npm start` runs [live-server](https://www.npmjs.com/package/live-server) with live reload — no build step required for either the main site or `/interactive/`.

## Updating content

- Portfolio content (experience, projects, skills, etc.) lives directly in `index.html` as static markup — edit it there.
- The interactive resume's content lives in `js/training-data.js`.

## Deployment

Served via GitHub Pages from the `master` branch, root path. Merge changes into `master` to publish.
