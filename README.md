# webpage

A minimal, frontend-only React application built with Vite, TypeScript, Tailwind CSS, and Storybook.

## Stack

- **React** — UI library
- **Vite** — fast dev server and build tool
- **TypeScript** — static typing
- **Tailwind CSS** — utility-first styling
- **Storybook** — component development and documentation
- **ESLint** — code linting

> This is a **frontend-only** project. There is no backend, API, or database.

## Setup

Requires [pnpm](https://pnpm.io/installation).

```bash
pnpm install
```

## Scripts

| Command                | Description                         |
|------------------------|-------------------------------------|
| `pnpm dev`             | Start local development server      |
| `pnpm build`           | Type-check and build for production |
| `pnpm preview`         | Preview the production build        |
| `pnpm storybook`       | Start Storybook component explorer  |
| `pnpm build-storybook` | Build Storybook as static site      |
| `pnpm lint`            | Run ESLint                          |

## Project Structure

```
/src
  /components       # Reusable UI components
    Button.tsx
    /__stories__
      Button.stories.tsx
  /pages            # Route-level pages
    LandingPage.tsx
    /__stories__
      LandingPage.stories.tsx
  App.tsx
  main.tsx
  index.css
/public
.storybook/         # Storybook configuration
index.html
vite.config.ts
tsconfig.json
eslint.config.js
```
