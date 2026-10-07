# APRP & Partners LLP — website

Next.js 16 (App Router) + Tailwind CSS 4. A one-page, fully static site, migrated 1:1 from the approved
design in `../website/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (every route is prerendered as static HTML)
npm start        # serve the production build
```

## Where things live

| Path | What it is |
| --- | --- |
| `content/site.ts` | **All wording and firm details.** Edit this to update the site. |
| `app/globals.css` | Design tokens (colours, type scale, motion, breakpoints) in Tailwind's `@theme`. |
| `app/layout.tsx` | Page metadata (title, description, Open Graph, robots), JSON-LD, disclaimer. |
| `components/sections/` | One component per section: Hero, PracticeAreas, WhyUs, Cases, Partners, Testimonials, AppPromo, Contact. |
| `components/layout/` | Header, desktop nav (active-section highlight), mobile menu, footer. |
| `components/disclaimer/` | Bar Council disclaimer (shown on every visit). |
| `components/ui/` | Shared building blocks: Section, Button, AutoGrid, StoreBadge, PhoneMockup, icons. |
| `lib/structured-data.ts` | schema.org data for search engines (built from `content/site.ts`). |
| `public/images/` | Hero artwork (desktop/tablet and phone versions). |

## Before launch

Fill in everything in `content/site.ts` marked `TODO`, in `[brackets]`, or set to `null`:
partners (names, photos), case figures, testimonials (with written consent), street address and PIN,
phone, email, hours, Google Maps links, app store links and App Store id, app screenshot.

Real values are added to the search-engine structured data automatically; placeholders never are.

## SEO checklist

Already in place: page title and description, canonical URL, Open Graph and Twitter cards (with the hero
artwork), `robots.txt`, `sitemap.xml`, web manifest, favicons, `LegalService` structured data, one `<h1>`,
semantic sections, alt text, self-hosted fonts, optimised AVIF/WebP hero images, static prerendering.

After deploying:

1. Verify the domain in [Google Search Console](https://search.google.com/search-console), then add the
   token to `app/layout.tsx` (`verification: { google: "…" }`) and submit `https://www.legacylawyers.in/sitemap.xml`.
2. Create or claim the firm's **Google Business Profile**. For a local law firm it matters more than
   anything on the page. Use exactly the same name, address and phone as `content/site.ts`.
3. Check the structured data with the [Rich Results Test](https://search.google.com/test/rich-results).
4. Add social profiles (e.g. LinkedIn) to `site.sameAs`.

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com), or run `npm run build` and serve with
`npm start` on any Node host. Point `legacylawyers.in` / `www.legacylawyers.in` at it.
