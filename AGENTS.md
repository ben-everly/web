# AI Agents Guide

This document provides instructions and context for AI agents (like GitHub Copilot, Cursor, or CLI agents) to effectively work on this Nuxt 3 project.

## Project Stack
- **Framework:** Nuxt 3 (Vue 3)
- **Styling:** Tailwind CSS 4
- **Content:** Nuxt Content v3
- **Infrastructure:** Pulumi (AWS)
- **Language:** TypeScript

## Architecture Overview
- `components/`: Atomic Vue components.
- `pages/`: File-system based routing.
- `content/`: Markdown files for articles and pages.
- `assets/`: Global CSS and static assets.
- `public/`: Publicly accessible files (images, favicon).
- `infra/`: Pulumi infrastructure code.

## Development Standards

### Component Development
- Use `<script setup lang="ts">` for all components.
- Use Tailwind CSS for styling.
- Prefer functional and composable patterns.
- Follow the Vue 3 Composition API best practices.

### Routing & Content
- Dynamic routes are located in `pages/article/[slug].vue`.
- Content is managed via `@nuxt/content` using Markdown files in the `content/` directory.

### Code Style
- Follow Prettier configuration in `.prettierrc`.
- Use TypeScript for type safety across the entire codebase.

## Common Tasks

### Starting the Development Server
```bash
npm run dev
```

### Adding a New Article
1. Create a new `.md` file in `content/article/`.
2. Add necessary frontmatter (title, description, date, etc.).
3. Add a corresponding hero image in `public/images/`.

### Deployment
Infrastructure is managed via Pulumi.
```bash
npm run deploy
```
