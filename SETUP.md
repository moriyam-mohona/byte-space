# byte-space — Frontend Setup

Written against your actual uploaded project: a bare `create-next-app` scaffold — Next.js 16.3.4, React 19.2.8, Tailwind v4, React Compiler on. Nothing else installed yet. Backend and page content/copy are both deferred — this is structure only.

---

## 1. Install dependencies

Same core stack as your other two projects, **minus shadcn** (skipped per your call — you're designing this one yourself):

```bash
# Server state
npm install @tanstack/react-query
npm install -D @tanstack/react-query-devtools

# Client state (light use — filters, menu toggles)
npm install zustand

# Forms + validation (donation form, contact form, later)
npm install react-hook-form zod @hookform/resolvers

# HTTP client
npm install axios
```

## 2. One config change

Same as your other Next 16 projects — enable Cache Components so `"use cache"`/`cacheLife`/`cacheTag` are available:

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
```

## 3. Font — worth deciding now, not later

Your current `layout.tsx` only loads Geist with the `latin` subset, which doesn't cover Bengali script. Since this site's content is Bangla, swap or add a font with Bengali glyph support before you start building pages — retrofitting fonts after content exists means re-touching every page. `next/font/google` has Bengali-supporting options (e.g. Noto Sans Bengali, Hind Siliguri); pick one when you're ready for design, no action needed today beyond knowing this is pending.

## 4. Folder structure

No section names or copy baked in — just the skeleton, organized the same way as your other two projects (feature-based, thin `app/` routes):

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # homepage
│   │   └── layout.tsx
│   ├── layout.tsx                      # existing root layout — add <Providers> here
│   └── providers.tsx                   # new — TanStack QueryClientProvider
│
├── features/                           # empty for now — add a folder per section once
│                                        # scope is locked in (each gets api/, components/, etc.)
│
├── shared/
│   ├── components/                     # unstyled primitives — you're designing these
│   ├── lib/
│   │   ├── axios.ts                    # placeholder, points at an API URL later
│   │   └── queryClient.ts
│   └── utils/
│
└── proxy.ts                            # rate limiting / bot protection — matters given expected traffic volume
```

## 5. Core setup files

### `src/shared/lib/queryClient.ts`
```ts
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});
```

### `src/app/providers.tsx`
```tsx
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/queryClient";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

### Update your existing `src/app/layout.tsx`
Wrap `{children}`, keep everything else as-is for now:
```tsx
import { Providers } from "./providers";
// ...existing font imports stay (swap for Bengali-supporting fonts when ready — see §3)

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={/* existing className stays */}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```
(`lang="bn"` since content is Bangla — update if the site will be bilingual.)

### `src/shared/lib/axios.ts` (placeholder)
```ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10_000,
});

// TODO once backend connects: auth headers if needed, response interceptors
```

### `src/proxy.ts` (stub — rate limiting logic added once real traffic patterns are known)
```ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // TODO: rate limiting / bot protection once backend and infra are in place
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
```

## 6. Caching approach (for when pages exist)

No pages built yet, but keep this in mind as you add them — same Next 16 Cache Components model as your other projects:

- Static/marketing pages (once written): `"use cache"`, `cacheLife("days")` or `"max"` — this content barely changes.
- Any future large dataset section (once backend defines it): `"use cache"` with a shorter `cacheLife` and a `cacheTag`, same pattern as the storefront's product pages.
- Never put `"use cache"` directly on a page — cache the data-fetcher function it calls.

## 7. Explicitly deferred

- **Backend**: no API to connect to yet — `axios.ts` and any data fetchers stay placeholders.
- **Content/copy**: not added per your instruction — folders under `features/` stay empty until scope for each section is confirmed.
- **Design**: Tailwind only, no component library — you're building `shared/components/` yourself.
- **Search/large-dataset layer**: once the backend and the actual dataset (referenced in the plan you shared) are defined, this likely needs the same dedicated search-engine approach discussed for high-volume datasets — revisit then.
