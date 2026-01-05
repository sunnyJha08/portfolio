# Personal Portfolio

**A professional, responsive portfolio website that showcases projects, blog posts, and a contact form.** Built with React, TypeScript, and Vite — this repository contains the full source, development scripts, and build output for the live site.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

---

## Overview

This repository is a personal portfolio site that demonstrates technical work, blog posts, and a contact mechanism. It focuses on performance, accessibility, and a clean responsive UI with a dark/light theme.

## Key Features ✅

- Responsive, accessible UI with dark/light **theme toggle**
- Projects showcase (data-driven via metadata JSON)
- Blogging support (static blog metadata)
- Contact form with **rate limiting** and an email service integration
- Pre-rendered build output for fast static hosting
- SEO-friendly files (`robots.txt`, `sitemap.xml`) and optimized images

## Tech Stack 🔧

- React + TypeScript
- Vite (see `vite.config.ts`)
- pnpm for package management
- Lightweight utilities and small, focused components in `app/components`

## Project Structure 📁

- `app/` — application source (routes, components, styles)
  - `app/components/` — UI & layout components (header, footer, theme provider)
  - `app/lib/` — utilities, rate limiting, schemas, and services (e.g., `contact-email.service.ts`)
  - `app/routes/` — route-level code (home, blogs, contact)
- `public/` — static assets served as-is
- `build/` — production build output (ready to deploy)
- `package.json`, `pnpm-workspace.yaml` — project scripts & workspace config

## Getting Started (Local Development) 💻

Prerequisites: Node.js and `pnpm` installed.

1. Install dependencies

```bash
pnpm install
```

2. Start the dev server

```bash
pnpm dev
```

3. Build for production

```bash
pnpm build
```

Edit content for projects and blogs by updating the metadata files in `app/routes/` (for example, `projectsMetaData.json` and `blogsMetaData.json`).

## Build & Deployment 🚀

- Run `pnpm build` to produce optimized output in the `build/` folder.
- The contents of `build/` and `public/` are suitable for static hosting providers (Netlify, Vercel, GitHub Pages) or can be served by a simple Node/Static server.
