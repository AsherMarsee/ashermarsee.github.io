# Asher Marsee — Professional Portfolio

A React + Vite website introducing Asher Marsee, presenting selected projects, and providing a printable online resume.

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
- `#/resume` — online resume, with print-to-PDF support

## Updating projects

Project content lives in the `projects` array in `src/App.jsx`. Each project has a unique `slug`, `title`, `type`, `summary`, and `detail`. Add further verified project information there as it is ready to share.

## Resume

The resume is rendered as an accessible web page. Use **Print / save as PDF** to print it or save a PDF from the browser. Update the profile and experience in `ResumePage` as additional resume details are available.

## Checks

```sh
npm run lint
npm run build
```
