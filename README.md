# Travis Emslander Personal Site

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Adding a Post

1. Create a new Markdown file in `src/content/posts/YYYYMMDD-page-title.md`:
   ```markdown
   ---
   title: "Post Title"
   date: 2026-10-18T08:00:00-05:00
   topic: "Engineering" # Optional (or use `tags: ["Engineering"]`); auto-inferred if omitted
   ---

   Post content here...
   ```
2. Preview locally with `npm run dev`.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to preview the site.

## Publishing Changes

Commit and push changes to `main`. GitHub Actions (`.github/workflows/hugo.yml`) will automatically build the Astro site (`npm ci` & `npm run build`) and deploy `./dist` to GitHub Pages.
