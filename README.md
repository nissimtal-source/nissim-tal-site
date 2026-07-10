# Nissim Tal — Portfolio Site (Astro)

Bilingual (English/Hebrew) artist portfolio site, statically generated with Astro.

- `/` — English homepage
- `/he` — Hebrew homepage (RTL, IBM Plex Sans Hebrew)

## Running it locally

```
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:4321).

## Building for deployment

```
npm run build
```

The static output goes to `dist/` — upload that folder's contents to any static host.

## Structure

- `src/data/content.ts` — English text + image data for every section.
- `src/data/content.he.ts` — Hebrew mirror of the same data (same `id`s, so anchors match).
- `src/components/Layout.astro` — page shell, nav (with Projects dropdown), lightbox, and all CSS.
- `src/components/Gallery.astro` — renders one project section (title, meta, optional statement, image grid).
- `src/pages/index.astro` / `src/pages/he.astro` — assemble each homepage from the data above.
- `public/images/` — local images, referenced as `/images/...` (no `public` prefix) from the content files.

To edit content: change `content.ts` (and `content.he.ts` for the Hebrew equivalent). To add/remove a project, add/remove an entry in the `projects` array in both files — it automatically appears in the nav dropdown and gets its own page section.
