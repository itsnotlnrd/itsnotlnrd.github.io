# John Lennard Dequiña — Portfolio

Personal portfolio website. Plain HTML, CSS and JavaScript: no build step, no dependencies, no backend.
Hosted for free on **GitHub Pages**, so it stays online 24/7 regardless of any local computer.

## Project structure

```
index.html              Page layout and static text (hero, about)
assets/js/data.js       ← YOUR CONTENT: contact links, skills, experience, projects, achievements
assets/js/main.js       Renders data.js and handles navigation/animations (rarely needs editing)
assets/css/styles.css   Design: colors, spacing, layout
assets/favicon.svg      Browser tab icon
assets/resume.pdf       Your résumé (add this file, see below)
.nojekyll               Tells GitHub Pages to serve files as-is
```

## How to update the site

Every change pushed to the `main` branch is published automatically within ~1 minute.

**Easiest way (in the browser):**
1. Open the repository on github.com.
2. Click the file you want to change (usually `assets/js/data.js`).
3. Click the pencil icon ✏️ (Edit), make your change, then click **Commit changes**.
4. Wait about a minute and refresh your site.

### Update skills, experience, projects or achievements
Edit `assets/js/data.js`. Each section is a list. Copy an existing entry, paste it below, and change the text.
Lines marked `TODO` are things only you can fill in. Empty sections automatically show a tidy
"coming soon" message instead of placeholder text, so nothing broken is ever shown to visitors.

### Add or replace your résumé
1. In the repository, open the `assets` folder → **Add file** → **Upload files**.
2. Upload your PDF named exactly **`resume.pdf`** (uploading again with the same name replaces it).
3. The first time only: in `assets/js/data.js` set `resume: { available: true, ... }`.

The "Download résumé" and "View résumé" buttons then work automatically.

### Update contact links
In `assets/js/data.js`, fill in `email`, `linkedin`, `github`, and optional `otherLinks`.
Use a personal email address (not a work one). Blank values are hidden.

### Change the hero or About text
Edit the text directly in `index.html` (search for "I turn complex technical issues").

### Change colors
Edit the variables at the top of `assets/css/styles.css` (`--accent` is the orange highlight).

## Content checklist (TODO)
- [x] LinkedIn and GitHub links (`data.js`)
- [ ] Personal email (`data.js` → `email`)
- [x] Experience history, skills, education and certifications (from LinkedIn, Oct 2026)
- [ ] Review the Technical Support Engineer bullets and add specifics (no confidential details)
- [ ] Projects / case studies (personal or fully sanitized)
- [ ] Upload `assets/resume.pdf` and set `available: true`
- [ ] Review the About section's career-goal sentence

## Privacy rule
Never publish customer names, case numbers, internal screenshots, logs, or proprietary employer
information. The repository is public.

## Preview locally (optional)
Any static file server works, e.g. with Python installed: `python -m http.server` in this folder,
then open http://localhost:8000.
