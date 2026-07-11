# Nolan McAllister Portfolio

This repository contains Nolan McAllister’s personal portfolio website, built with React, TypeScript, Vite, and Tailwind CSS.

## About

The site is a single-page portfolio with the following sections:
- Profile
- Projects
- Skills
- Experience
- Education
- Contact

Content is managed through structured data in `src/data`, and pages are rendered dynamically by `src/app.tsx`.

## Key technologies

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- `@vitejs/plugin-react`
- `tailwind-variants`
- JSON-LD / SEO metadata injection

## Repository structure

- `src/app.tsx` — main application component
- `src/main.tsx` — app bootstrap
- `src/data` — portfolio content and section definitions
- `src/components` — reusable UI components and layout
- `src/config/site.ts` — SEO metadata builder
- `vite.config.ts` — Vite config with React plugin and SEO injection
- `public` — static assets and metadata files

## Local development

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Useful scripts

- `npm run dev` — start the development server
- `npm run build` — compile the site for production
- `npm run preview` — preview the built site
- `npm run lint` — run ESLint
- `npm run format` — format code with Prettier
- `npm run typecheck` — run TypeScript build checks

## Notes

- The personal profile data is defined in `src/data/profile.ts`.
- Sections are configured in `src/data/sections.ts`.
- Navigation is implemented in `src/components/secondary/navigation`.
- SEO tags are injected into `index.html` through a Vite transform plugin in `vite.config.ts`.

## License

This repository is a personal portfolio project and does not include an explicit license.
