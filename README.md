# Asher Marsee — Professional Portfolio

A React + Vite website introducing Asher Marsee, presenting selected projects, and displaying a downloadable PDF resume.

## Run locally

```sh
npm install
npm run dev
```

## Site structure

The site uses hash routes for static hosting:

- `#/home` — introduction and selected work
- `#/portfolio` — project portfolio
- `#/portfolio/<slug>` — project details
- `#/resume` — embedded PDF resume and download link

## Updating projects

Project content lives in the `projects` array in `src/App.jsx`. Each project has a unique `slug`, `title`, `type`, and `summary`, with page content defined in blocks or sections. Covers and project-specific media are organized under `src/assets/projects/<slug>/`. The card gallery opens on request so card images load only when needed.

## Resume

The resume page displays and links to `src/assets/AsherMarseeCV.pdf`. Replace that file to update the resume. The homepage portrait is `src/assets/Asher_Grad.jpg`. The shared profile image and favicon are `public/favicon.png`, and the GitHub profile link is in the site footer.

## Checks

```sh
npm run lint
npm run build
```
