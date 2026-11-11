# Safiyya Muhsina M — Portfolio

Personal portfolio of Safiyya Muhsina M, a Computer Science and Technology student exploring technology, product, business, marketing and project management.

Live site: <https://safiyyamuhsina.vercel.app>

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript (strict)
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Fonts via `next/font`: Instrument Serif (display), Geist (text), Geist Mono (labels)
- No animation or UI libraries. Motion is CSS plus one small `IntersectionObserver`.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Project structure

```
app/
  layout.tsx          fonts, metadata, no-flash theme script
  page.tsx            page composition
  globals.css         tokens, light/dark themes, component styles, keyframes
  icon.svg            "SM" monogram favicon
components/           one file per section, plus navbar, theme toggle, icons
data/portfolio.ts     all content (edit this to update the site)
lib/motion.ts         stagger-delay helper
public/images/        portrait and project screenshots
```

## Updating content

Everything shown on the page lives in `data/portfolio.ts`: profile details, skills, projects, internship, education, hackathons, certificates, activities and languages.

- **Add a project link:** add `repo` / `demo` fields to a project in `data/portfolio.ts` and render them in `components/projects-section.tsx`. No links are shown today because none have been verified.
- **Replace the portrait:** drop a new image into `public/images/` and update `images.portrait` in the data file.

## Themes

Dark and light themes are driven by `data-theme` on `<html>`. A tiny inline script in `app/layout.tsx` applies the saved (or system) preference before first paint, so there is no flash. The choice is stored in `localStorage` under `theme`.

## Accessibility

Skip link, semantic landmarks, visible focus states, keyboard-operable navigation and mobile menu (Escape closes, focus is kept inside), `aria-current` for the active section, descriptive link labels, and full `prefers-reduced-motion` support. Content stays visible if JavaScript is unavailable.

## Deployment

Deployed on [Vercel](https://vercel.com). With the default Git integration, pushes to the production branch (`main`) deploy to production and other branches get preview deployments.
