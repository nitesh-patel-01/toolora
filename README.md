# Toolora — Free Online Tools (US & UK)

45 free, no-signup tools: text, calculators, converters, image, PDF, developer, SEO and everyday utilities. Built with Next.js 15, React 19, TypeScript and Tailwind CSS. Most tools run locally in the browser.

## Brand
Working name selected: **Toolora**. Alternatives considered: Utilia, ToolNest. Domain availability was NOT verified — check before buying/using a custom domain. Change the name via `lib/site.ts` (SITE_NAME) and the header/footer text.

## Setup
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to the real production URL
npm run dev
```

## Scripts
- `npm run build` — production build
- `npm run typecheck` — TypeScript
- `npm run lint` — ESLint (next/core-web-vitals)
- `npm test` — Vitest unit tests for calculation logic (lib/calc.ts)

## Environment
| Variable | Required | Notes |
|---|---|---|
| NEXT_PUBLIC_SITE_URL | Yes for production SEO | Absolute URL, no trailing slash. Drives canonicals, sitemap, robots, OG. |
| NEXT_PUBLIC_ADSENSE_CLIENT_ID | No | e.g. ca-pub-XXXX. Leave empty until AdSense approval. Ads render only when set; slots reserve space to prevent layout shift. |
| NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION | No | Search Console meta verification value |
| NEXT_PUBLIC_BING_SITE_VERIFICATION | No | Bing Webmaster msvalidate.01 value |

## AdSense steps (after approval)
1. Apply at google.com/adsense with the live domain. 2. Set NEXT_PUBLIC_ADSENSE_CLIENT_ID in Vercel → Project → Settings → Environment Variables (Production). 3. Redeploy. 4. Add specific ad-unit IDs to components/ui.tsx AdSlot if desired. 5. Update Privacy/Cookie policies and enable a consent solution (e.g. Google's CMP) if serving personalised ads in the UK/EEA. Never place ads next to download/run buttons in a way that invites accidental clicks.

## Search Console & Bing
1. Deploy to production first. 2. Google Search Console → Add property (Domain or URL prefix) → verify via the meta variable above or DNS. 3. Sitemaps → submit `sitemap.xml`. 4. URL Inspection → test the homepage and 3–4 top tools. 5. Bing Webmaster Tools → import from Google or add manually → submit the same sitemap. 6. Review Coverage/Pages and Performance monthly; improve pages with impressions but low clicks (better titles/descriptions) rather than creating duplicate pages.

## Owner actions before public launch
- Replace hello@toolora.example.com in Footer, Contact, security.txt with a real monitored inbox.
- Verify/replace the production URL and security.txt expiry (2027-10-22).
- Have privacy/terms reviewed for your jurisdiction.
- Pick a final domain, point it in Vercel, and set NEXT_PUBLIC_SITE_URL to match.

## Deployment
GitHub push to `main` → Vercel auto-deploys when the repo is connected in the Vercel dashboard (Framework preset: Next.js, build: `next build`). Or use the Vercel connector/CLI.
