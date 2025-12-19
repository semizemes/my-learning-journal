# My Learning Journal

A small, responsive learning-journal site built with Vite. Browse recent posts, open a single post, or read the “About me” section—all powered by static data in `posts.js`.

## Features
- Hero post plus grid of recent entries with lazy “View more” loading
- Single-post view that reuses existing post cards as “Recent posts”
- About section with bio plus recent posts
- Responsive layout for mobile-first up to desktop breakpoints

## Tech Stack
- Vite (vanilla JS)
- HTML, CSS, JavaScript

## Getting Started
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open the printed local URL (defaults to `http://localhost:5173`).

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — serve the production build locally

## Project Structure

### How It Works
- The home view renders the first three posts on load; the “View More” button appends more in batches of three.
- Clicking any post card opens a single-post page with its full content and a “Recent posts” section reusing the current cards.
- “HOME” and “ABOUT ME” links toggle between main feed and about view.

### Notes
- Images are loaded from `images/` and referenced in `posts.js`; ensure paths stay in sync if you add new posts.
- Content is static; connect a backend or CMS if you want live updates.

