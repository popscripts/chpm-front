# Copilot instructions for CHPM

## Big picture architecture

- This is a Next.js App Router project (`app/`) that intentionally reuses screen components from a top-level `pages/` directory.
- Route entry files in `app/**/page.tsx` are thin wrappers; UI composition lives in `pages/*.tsx` and `src/components/**`.
- Shared layout is centralized in `app/layout.tsx` (`Navbar` + `FadeInProvider` + `Footer` around all pages).
- Path aliases: use `@/*` for `src/*` imports (configured in `tsconfig.json`), while `pages/*` is imported directly from project root.

## Data flow and service boundaries

- External content comes from Drupal JSON:API via `API_URL` (see `.env.example`, `src/data/albums.ts`, `src/data/events.ts`, `src/data/festivals.ts`).
- Server-side fetch/normalization belongs in `src/data/*`; keep components focused on rendering typed models (`AlbumItem`, `EventItem`, `FestivalItem`).
- Internal API routes in `app/api/**/route.ts` are thin proxies over `src/data/*` fetchers.
- Pattern example: `app/api/events/route.ts` -> `fetchEvents()` -> returns `{ events }` JSON.
- `APP_ENV` controls cache strategy in data fetchers:
  - `dev` / `development`: `cache: "no-store"`
  - other envs: ISR via `next.revalidate` (e.g., 3600 for albums/events, 2592000 for festivals)

## Routing and URL conventions

- Event details URL format is slug + id: `/wydarzenia/<slug>--<id>` (`createEventDetailsUrl` in `src/utils/helpers.ts`).
- Always recover canonical event id with `parseEventIdFromParam()` before fetching (`app/wydarzenia/[id]/page.tsx`).
- In-page event anchors use `event-<id>` via `createEventAnchorId()`.

## Component patterns

- Prefer server components for sections that fetch data (`pages/Events.tsx`, `src/components/creativity/Discography.tsx`).
- Use client components only for interactivity (`"use client"`), e.g. `DiscographyAlbumsList.tsx`, `AwardsListWithMore.tsx`, `Navbar.tsx`.
- Keep shared primitives in `src/components/ui/*` and page-domain sections under `src/components/{about,creativity,home,events,...}`.

## Styling conventions

- Tailwind CSS v4 with tokenized CSS variables in `app/globals.css`; prefer existing variables like `--color-soft-charcoal`, `--color-champagne-gold`.
- Existing code uses variable-driven utility syntax like `bg-(--color-soft-charcoal)` and `text-(--color-off-white)`; follow this style.
- Fonts are provided via utility classes (`font-playfair`, `font-montserrat`) from `globals.css`.

## Workflows and commands

- Package manager in repo is pnpm (`pnpm-lock.yaml`). Use:
  - `pnpm dev` - local development
  - `pnpm build` - production build
  - `pnpm start` - run production server
  - `pnpm lint` - ESLint (`eslint.config.mjs` with Next core-web-vitals + TypeScript config)
- Before testing Drupal-dependent views, set `.env.local` with `API_URL` and `APP_ENV`.

## Integration notes

- External images are constrained by `next.config.ts` `images.remotePatterns`; add hostnames there when introducing new remote sources.
- Some UI components still use `Image` with `unoptimized`; preserve behavior unless image pipeline changes are intentional.
