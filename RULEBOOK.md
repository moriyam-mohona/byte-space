# RULEBOOK — byte-space

> **Hard rules. No exceptions without an explicit decision recorded here.**
> Applies to every developer and every AI agent working in this repository.

---

## 1. Tech Stack — use only what is installed

| Need | Tool | Do NOT use |
|---|---|---|
| Server/async state | `@tanstack/react-query` | `SWR`, `useEffect` + fetch for data |
| Client state | `zustand` | Redux, Jotai, Context for shared state |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` | Controlled inputs, uncontrolled `useState` forms |
| HTTP | `axios` via `@/shared/lib/axios` | Raw `fetch` in components, inline `axios.create()` |
| Styling | Tailwind v4 + vanilla CSS tokens in `globals.css` (**globals.css tokens MUST be used first**) | `styled-components`, `emotion`, `CSS Modules`, `inline style`, arbitrary `[#...]` |
| Component library | **None — hand-built only** | shadcn, MUI, Chakra, Radix (direct), Mantine, etc. |
| Class merging | `clsx` + `tailwind-merge` (`cn`) | String concatenation / raw template strings for complex class merging |
| Internationalization | Native custom dictionary system (`@/shared/i18n`) with `[locale]` routes | `next-intl`, `react-i18next`, CSS-based language switching |

Adding a new package requires a decision recorded in this file.

---

## 2. Folder Structure — no straying

```
src/
├── app/                    # Next.js routes ONLY — no business logic here
│   ├── [locale]/           # Dynamic locale route group (/bn, /en)
│   │   ├── design-system/  # Design system showcase & token reference page
│   │   ├── layout.tsx      # LocalizedRootLayout (fonts, Providers, Header)
│   │   └── page.tsx        # Localized home page
│   ├── (marketing)/        # Optional marketing route group
│   ├── favicon.ico
│   ├── globals.css         # Single source of truth for design tokens, themes & CSS utilities
│   └── providers.tsx       # Root client providers (QueryClient, LanguageProvider)
│
├── features/               # One folder per site domain/feature
│   └── home/               # Home page feature module
│       └── components/     # Feature-scoped UI (HeroBanner, AboutSection, CorePrograms, etc.)
│
├── shared/
│   ├── components/         # Reusable primitives used across ≥2 features
│   │   ├── language/       # LanguageSwitcher
│   │   ├── layout/         # Header, Nav, etc.
│   │   └── preview/        # SectionPreview, etc.
│   ├── hooks/              # Reusable shared hooks
│   ├── i18n/               # i18n system (config, dictionaries, client, server, format)
│   │   ├── config.ts       # Locales list (bn, en), configs, font modes
│   │   ├── dictionaries/   # Source of truth for UI copy (bn.ts, en.ts)
│   │   ├── client.tsx      # LanguageProvider, useTranslations, useCurrentLocale
│   │   ├── server.ts       # getTranslations, getDictionary
│   │   └── format.ts       # Localized numbers, dates, currencies
│   ├── lib/
│   │   ├── axios.ts        # Single axios instance — import this everywhere
│   │   └── queryClient.ts  # Single QueryClient — never create another
│   └── utils/              # Pure utility functions (cn from @/shared/utils)
│
└── proxy.ts                # Locale routing, matcher & redirects
```

**Rules:**
- `app/` pages must be thin — no business logic, no data fetching inline
- Routes live under `src/app/[locale]/` for bilingual routing (`bn` default, `en` supported)
- `features/` folders stay scoped to their respective domain
- Nothing goes into `shared/` unless it is used by **at least two features**
- No barrel (`index.ts`) files unless explicitly decided — import directly

---

## 3. Imports — always use the alias

```ts
// CORRECT
import { api } from "@/shared/lib/axios";
import { queryClient } from "@/shared/lib/queryClient";

// WRONG
import { api } from "../../shared/lib/axios";
```

Alias `@/*` maps to `src/*` (see `tsconfig.json`).

---

## 4. State rules

### Server / async state (API data)
- Always managed by TanStack Query
- Query key arrays must be defined as `const` in the feature's `api/` file — never inline
- `staleTime` defaults to `60_000` (set in `queryClient.ts`) — override per query only when justified

### Client state (UI-only)
- Zustand stores for: menu open/close, active filters, modal state, language toggle
- Do NOT put server data into Zustand — that is TanStack Query's job
- One store file per feature area under `features/<feature>/hooks/use<Feature>Store.ts`

---

## 5. Data fetching rules

- Data fetchers live in `features/<feature>/api/` — plain async functions, **not hooks**
- Hooks that call those fetchers live in `features/<feature>/hooks/`
- Never call `api` (axios) directly inside a component
- Never use `useEffect` to fetch data — use TanStack Query

```ts
// CORRECT — features/donations/api/getDonations.ts
export async function getDonations() {
  const { data } = await api.get("/donations");
  return data;
}

// CORRECT — features/donations/hooks/useDonations.ts
export function useDonations() {
  return useQuery({ queryKey: ["donations"], queryFn: getDonations });
}

// WRONG — inside a component
const [data, setData] = useState(null);
useEffect(() => { axios.get("/donations").then(setData); }, []);
```

---

## 6. Caching rules (Next.js Cache Components)

- `"use cache"` goes on **data-fetcher functions only** — never on page components
- Static/marketing pages: `cacheLife("days")` or `cacheLife("max")`
- Dynamic sections with backend data: `cacheLife("minutes")` + `cacheTag("<tag>")`
- Never add `"use cache"` to a component that accepts user-specific props

```ts
// CORRECT
"use cache";
import { cacheLife } from "next/cache";

export async function getHomeContent() {
  cacheLife("days");
  // ...fetch
}

// WRONG — never on the page itself
export default async function Page() {
  "use cache";
}
```

---

## 7. TypeScript rules

- `strict: true` is on — do not disable it
- No `any` — use `unknown` and narrow it
- No type assertions (`as SomeType`) without a comment explaining why
- All API response shapes must have a Zod schema in `features/<feature>/types/`
- All form schemas must be Zod schemas — pass to `useForm` via `zodResolver`

---

## 8. Styling rules

### MANDATORY Design Token & Variable Priority
1. **Always use colors, font sizes, line heights, font weights, and layout variables from `globals.css` FIRST:**
   - Design tokens are centrally authored in `:root` and registered under `@theme inline` in `src/app/globals.css`.
   - **Colors to use from `globals.css` first:**
     - Primary brand scale: `bg-primary`, `text-primary`, `bg-primary-500`, `bg-primary-25` through `bg-primary-900`, `bg-primary-soft`, `text-primary-lighter`, `bg-primary-darker`
     - Secondary brand scale: `bg-secondary`, `text-secondary`, `bg-secondary-soft`, `text-secondary-lighter`, `bg-secondary-darker`
     - Surfaces & layout base: `bg-surface`, `bg-surface-muted`, `border-border`, `text-foreground`, `bg-background`, `text-base-white`, `bg-base-black`
     - Feedback: `text-success` / `bg-success`, `text-warning` / `bg-warning`, `text-error` / `bg-error`, `text-info` / `bg-info`
   - **Typography to use from `globals.css` first:**
     - Headings (pre-bundled size, leading, tracking, weight): `text-hero`, `text-heading-1` / `text-h1`, `text-heading-2` / `text-h2`, `text-heading-3` / `text-h3`, `text-heading-4` / `text-h4`, `text-heading-5` / `text-h5`
     - Body text (pre-bundled size, leading, tracking): `text-body-2xl`, `text-body-xl`, `text-body-lg`, `text-body-md`, `text-body-sm`
   - **Layout utilities from `globals.css` first:**
     - Content container: `.container` / `max-w-content` (constrained to 1140px, auto centered with inline padding)
     - Section rhythm: `.section-padding` (40px/32px on mobile, 52px/48px on desktop)
2. **If and only if a color, font size, or specific utility is NOT available in `globals.css`, then use standard Tailwind CSS classes** (e.g. `text-slate-500`, `text-xs`, `gap-4`, `p-4`).
3. **Hard prohibitions:**
   - **No arbitrary bracket values** (e.g. `bg-[#f2006a]`, `text-[18px]`, `w-[1140px]`). If a new token is genuinely required across the app, define it in `globals.css`.
   - **No `style={{ }}` inline styles** on JSX elements — all styling must flow through CSS classes.
   - **Dark mode is disabled** — the entire site uses light mode tokens exclusively (`bg-surface`, `text-secondary`, `text-foreground`, etc.).

---

## 9. Font rules

- **Bilingual font system:**
  - **Primary font: Hind Siliguri** (Bengali) — loaded for Bengali glyphs (`subsets: ["bengali"]`, weights: `400`, `500`, `600`, `700`, CSS variable: `--font-bengali`)
  - **Secondary font: Ubuntu Sans** (Latin/English) — loaded for English glyphs (`subsets: ["latin"]`, weights: `400`, `500`, `600`, `700`, CSS variable: `--font-ubuntu`)
- Both fonts are loaded via `next/font/google` in `src/app/[locale]/layout.tsx` — do not import Google Fonts anywhere else.
- Font switching mechanism is handled in `globals.css`:
  - `html.font-bengali-first` (default) sets `--font-body: var(--font-bengali), var(--font-ubuntu), sans-serif`.
  - `html.font-english-first` overrides `--font-body: var(--font-ubuntu), var(--font-bengali), sans-serif`.
- Do not load any additional fonts or @font-face rules without updating this file and `globals.css`.

---

## 10. Form rules

- Every form must have a Zod schema
- Every form must use `react-hook-form` with `zodResolver`
- Server actions or API calls go in the `onSubmit` handler — no logic inside JSX
- Display field-level errors from `formState.errors` — never `alert()`

---

## 11. Performance rules

- Never import an entire library — use named imports
- Images use `next/image` — no raw `<img>` tags, descriptive alt text required
- Links use `next/link` — no raw `<a>` tags for internal navigation
- No `useEffect` for anything that can be done at render time
- `React.lazy` / dynamic imports for any component > ~50kB that is below the fold

---

## 12. File naming

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `DonationCard.tsx` |
| Hooks | camelCase, `use` prefix | `useDonations.ts` |
| Utilities | camelCase | `formatCurrency.ts` |
| Stores | camelCase, `use` prefix | `useNavStore.ts` |
| API fetchers | camelCase, verb prefix | `getDonations.ts`, `postContact.ts` |
| Types/schemas | PascalCase | `DonationSchema.ts` |
| Route files | lowercase (`page.tsx`, `layout.tsx`) | Next.js convention |

---

## 13. What is explicitly deferred (do not implement yet)

- Backend integration — `axios.ts` and all fetchers are placeholders
- Auth — no auth system until requirements are confirmed
- Search / large-dataset layer — revisit when backend defines the dataset
- Feature folders — stay empty until each section's scope is locked in (currently `home` is active)
- Note: `proxy.ts` is **active** for routing and locale detection/redirection (rate-limiting stubs inside remain deferred).

---

## 14. Internationalization (i18n) rules

- **Supported Locales:** `bn` (Bangla, default) and `en` (English), defined in `src/shared/i18n/config.ts`.
- **Route localization:** All user routes live inside `src/app/[locale]/`. `src/proxy.ts` automatically redirects non-localized requests (e.g. `/` -> `/bn`).
- **Single Source of Truth for Text:**
  - All UI copy must be stored in `src/shared/i18n/dictionaries/bn.ts` and `src/shared/i18n/dictionaries/en.ts`.
  - When adding or modifying text, **always update both dictionaries simultaneously**.
  - Never hardcode raw UI copy in component JSX.
- **Client Components:**
  - Use `useTranslations("namespace")` and `useCurrentLocale()` from `@/shared/i18n/client`.
- **Server Components:**
  - Use `getTranslations(locale, "namespace")` from `@/shared/i18n/server`.
- **Formatting:**
  - Format numbers, dates, and currency with `formatNumber`, `formatDate`, and `formatCurrency` from `@/shared/i18n/format`.

