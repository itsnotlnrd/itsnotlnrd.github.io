# John Lennard Dequiña — Portfolio

Personal portfolio website. Plain HTML, CSS and JavaScript: no build step, no dependencies, no backend.
Hosted for free on **GitHub Pages**, so it stays online 24/7 regardless of any local computer.

## Project structure

```
index.html              Page layout and static text (intro, section names)
assets/js/data.js       ← YOUR CONTENT: contact links, what I do, experience, projects, education
assets/js/main.js       Renders data.js and marks the current section in the nav (rarely needs editing)
assets/css/styles.css   Design: colors, type, spacing, layout
assets/img/             Portrait and project screenshots
assets/favicon.svg      Browser tab icon
assets/resume.pdf       Your résumé (add this file, see below)
.nojekyll               Tells GitHub Pages to serve files as-is
```

## Design in one paragraph
A printed working document: warm paper, black ink and one burnt-orange accent taken from the
graduation hood in the portrait. Fraunces (serif) for names and headings, IBM Plex Sans for reading,
IBM Plex Mono for labels and dates. Section labels sit in a left margin column and hairline rules do
the grouping instead of cards. Dark mode follows the visitor's system setting. Every text color
passes WCAG AA contrast (the values are listed at the top of `styles.css`).

## How to update the site

Every change pushed to the `main` branch is published automatically within ~1 minute.

**Easiest way (in the browser):**
1. Open the repository on github.com.
2. Click the file you want to change (usually `assets/js/data.js`).
3. Click the pencil icon ✏️ (Edit), make your change, then click **Commit changes**.
4. Wait about a minute and refresh your site.

### Update what I do, experience, projects or education
Edit `assets/js/data.js`. Each section is a list. Copy an existing entry, paste it below, and change the text.
Lines marked `TODO` are things only you can fill in.

- **What I do** (`capabilities`): one short sentence per area plus its tools. Keep sentences different
  from your experience bullets so the page doesn't repeat itself.
- **Projects**: give a project an `image` (a real screenshot in `assets/img/`) to feature it full width
  with a "What I built" list (`built`). Projects without an image show as short text entries.

### Add or replace your résumé
1. In the repository, open the `assets` folder → **Add file** → **Upload files**.
2. Upload your PDF named exactly **`resume.pdf`** (uploading again with the same name replaces it).
3. The first time only: in `assets/js/data.js` set `resume: { available: true, ... }`.

A download link then appears under the contact links.

### Update contact links
In `assets/js/data.js`, fill in `email`, `linkedin`, `github`, and optional `otherLinks`.
Use a personal email address (not a work one). Blank values are hidden.

### Change the intro text
Edit the text directly in `index.html` (search for "I keep work organized").

### Change colors
Edit the variables at the top of `assets/css/styles.css` (`--accent` is the orange). Check contrast
before changing text colors: normal text needs at least 4.5:1 against the background.

## Content checklist (TODO)
- [x] LinkedIn and GitHub links (`data.js`)
- [ ] Personal email (`data.js` → `email`)
- [x] Experience history, skills, education and certifications (from LinkedIn and résumé, Oct 2026)
- [x] Author website project with screenshot
- [ ] Upload `assets/resume.pdf` and set `available: true`

## Privacy rule
Never publish customer names, case numbers, internal screenshots, logs, or proprietary employer
information. The repository is public.

## Preview locally (optional)
Any static file server works, e.g. with Python installed: `python -m http.server` in this folder,
then open http://localhost:8000.
