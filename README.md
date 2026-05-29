# Tanishq Annavaram — Portfolio

A single-page portfolio (React + Vite + Tailwind) with a **role lens toggle**:
switching between *Software Engineer*, *Data & ML*, and *All* re-ranks the
experience, swaps which projects lead, changes the hero headline, and serves the
matching résumé PDF — same content, framed for each audience.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Deploy (Vercel — free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.
4. Deploy. (Netlify works the same way; `netlify.toml` not required since
   `vercel.json` handles SPA routing — Netlify auto-detects Vite.)

## Customizing

- **Your photo:** drop a square image at `public/headshot.jpg`. Until then a
  styled "TA" placeholder shows automatically.
- **Content:** everything lives in `src/data.js` — profile, skills, experience,
  projects. Each experience/project has a `lens` tag and per-lens `weight`
  controlling ordering when the toggle changes.
- **Résumés:** in `public/resumes/`. Update paths in `PROFILE.resume` if renamed.
- **Colors/fonts:** `tailwind.config.js`.
- **Project proof of work:** add demo links, screenshots, or diagrams via each
  project's `links` array in `data.js`. To show images, place them in `public/`
  and reference `/your-image.png`.

## Structure

```
src/
  data.js            # all content + lens tags (edit here)
  App.jsx            # lens state + section order
  components/
    Nav.jsx          # sticky nav + lens toggle (desktop + mobile)
    Hero.jsx         # headshot, headline, CTAs
    About.jsx        # bio + education
    Skills.jsx       # grouped, click-to-filter skills
    Experience.jsx   # accordion, ranked by lens
    Projects.jsx     # cards + detail modal, ranked by lens
    Contact.jsx      # contact + footer
```
