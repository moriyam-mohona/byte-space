# GUIDELINE — byte-space

> **Recommendations, patterns, and rationale.**
> These are not hard rules — they are the preferred way to do things in this project and the reasoning behind them.
> When in doubt, follow these. When you deviate, leave a comment explaining why.

---

## 1. Project context

**Byte Space** is a humanitarian foundation website. The site is content-heavy, expected to receive significant traffic, and has no active backend yet. The design is entirely custom — hand-built with Next.js 16, React 19, Tailwind CSS v4, and centralized tokens in `src/app/globals.css`.

Key traits to keep in mind when building:
- **Bilingual with Bengali primary** — all UI copy is localized via `src/shared/i18n/dictionaries/{bn,en}.ts` with Bengali as the default language
- **Dual-font typography** — `Hind Siliguri` for Bengali and `Ubuntu Sans` for English, loaded via `next/font/google`
- **Trust matters** — the site handles donation and volunteer flows; reliability, clean design, and accessibility are paramount
- **Performance is critical** — target audience may be on mid-range Android devices on mobile networks
- **The backend does not exist yet** — build the frontend with modular feature APIs ready for future backend connection

---

## 2. How to add a new page

1. Localized pages reside inside `src/app/[locale]/<slug>/page.tsx`
2. Keep the page thin — import feature components and pass locale or fetch params
3. If it requires domain data, create or use the feature folder: `src/features/<feature>/`
4. Add data fetchers in `api/`, query hooks in `hooks/`, and UI components in `components/`
5. Add UI copy keys to both `src/shared/i18n/dictionaries/bn.ts` and `en.ts`

**Example structure for a "Programs" page:**
```
src/
├── app/[locale]/programs/page.tsx        ← thin route, renders ProgramList
└── features/programs/
    ├── api/getPrograms.ts
    ├── hooks/usePrograms.ts
    ├── components/ProgramList.tsx
    ├── components/ProgramCard.tsx
    └── types/ProgramSchema.ts
```

**Example page implementation:**
```tsx
// src/app/[locale]/programs/page.tsx
import { ProgramList } from "@/features/programs/components/ProgramList";

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-surface">
      <ProgramList locale={locale} />
    </main>
  );
}
```

---

## 3. How to build a section layout

Every page section follows this full-bleed + constrained container pattern, combined with the project's standardized vertical padding:

```tsx
// Full-bleed background, standardized section padding, constrained content
<section className="section-padding bg-surface-muted">
  <div className="container">
    {/* content here */}
  </div>
</section>
```

- **Never** set `max-width` directly on a `<section>` — sections go edge to edge
- **Always** put `.container` on the inner `<div>` that holds the content (caps at 1140px and centers)
- **Always** use `.section-padding` for vertical spacing rhythm (40px top / 32px bottom on mobile, 52px top / 48px bottom on desktop)
- `padding-inline` (1rem / 16px) is already handled by `.container` — do not double it

---

## 4. Design tokens & styling priority

### 🚨 MANDATORY TOKEN PRIORITY RULE
1. **Always check and use variables and utilities from `globals.css` FIRST:**
   - **Colors**: Use the project's semantic tokens (`bg-primary`, `text-primary`, `bg-secondary`, `bg-surface`, `bg-surface-muted`, `border-border`, etc.) before any standard color.
   - **Font sizes & typography**: Use project typography utilities (`text-hero`, `text-h1` through `text-h5`, `text-body-sm` through `text-body-2xl`) before standard font sizes.
   - **Layout & padding**: Use `.container` (`max-w-content`) and `.section-padding` from `globals.css`.
2. **If and only if a specific color, font size, or variable is NOT available in `globals.css`**:
   - Use standard Tailwind utility classes (e.g. `text-slate-500`, `text-xs`, `gap-4`).
3. **Strictly forbidden**:
   - **Never use arbitrary brackets for colors or sizes** (e.g., `bg-[#f2006a]`, `text-[18px]`, `max-w-[1140px]`).
   - **Never use inline `style={{ }}`** attributes on elements.
   - If a new color scale or size is needed across multiple components, register it in `globals.css` first.
4. **Light Mode Only**: Dark mode is disabled across this project. Always use light mode tokens.

### Available `globals.css` Tokens Quick Reference

#### Colors

| Category | Tailwind Classes / Tokens | Underlying CSS Variable | Notes |
|---|---|---|---|
| **Primary Brand (Scale)** | `bg-primary-25` ... `bg-primary-900`<br>`text-primary-500` | `--primary-25` ... `--primary-900` | Magenta / Pink scale (`500`: `#f2006a`) |
| **Primary Aliases** | `bg-primary`, `text-primary`<br>`bg-primary-soft`<br>`text-primary-lighter`<br>`bg-primary-darker` | `--primary`<br>`--primary-soft`<br>`--primary-lighter`<br>`--primary-darker` | `#f2006a`<br>`#fedeec`<br>`#ff0b76`<br>`#c20055` |
| **Secondary Brand** | `bg-secondary`, `text-secondary`<br>`bg-secondary-soft`<br>`text-secondary-lighter`<br>`bg-secondary-darker` | `--secondary`<br>`--secondary-soft`<br>`--secondary-lighter`<br>`--secondary-darker` | Dark Slate / Navy (`#0f172a`)<br>Soft tint (`#eef3fa`)<br>`#0b1a40`<br>`#000000` |
| **Surfaces & Base** | `bg-surface`, `bg-surface-muted`<br>`border-border`<br>`bg-background`, `text-foreground`<br>`text-base-white`, `bg-base-black` | `--surface`, `--surface-muted`<br>`--border`<br>`--background`, `--foreground`<br>`--base-white`, `--base-black` | Surface: `#ffffff`<br>Muted: `#f8fafc`<br>Border: `#e2e8f0` |
| **Feedback** | `bg-success`, `text-success`<br>`bg-warning`, `text-warning`<br>`bg-error`, `text-error`<br>`bg-info`, `text-info` | `--success`<br>`--warning`<br>`--error`<br>`--info` | Green (`#22c55e`)<br>Amber (`#e17100`)<br>Red (`#ef4444`)<br>Cyan (`#06b6d4`) |

#### Typography Scale (Headings & Body)

| Level | Tailwind Class | Size | Line Height | Tracking | Weight / Usage |
|---|---|---|---|---|---|
| **Hero Text** | `text-hero` | 66px (`4.125rem`) | 72px (`4.5rem`) | -1% (`-0.01em`) | Semi Bold (600) — Main Hero banner |
| **Heading 1** | `text-heading-1` / `text-h1` | 48px (`3rem`) | 52px (`3.25rem`) | -1% (`-0.01em`) | Semi Bold (600) — Section main title |
| **Heading 2** | `text-heading-2` / `text-h2` | 40px (`2.5rem`) | 44px (`2.75rem`) | -1% (`-0.01em`) | Semi Bold (600) — Subsection title |
| **Heading 3** | `text-heading-3` / `text-h3` | 32px (`2rem`) | 36px (`2.25rem`) | -1% (`-0.01em`) | Semi Bold (600) — Major card title |
| **Heading 4** | `text-heading-4` / `text-h4` | 24px (`1.5rem`) | 28px (`1.75rem`) | -1% (`-0.01em`) | Semi Bold (600) — Standard card title |
| **Heading 5** | `text-heading-5` / `text-h5` | 20px (`1.25rem`) | 24px (`1.5rem`) | -1% (`-0.01em`) | Semi Bold (600) — Small card / subhead |
| **Body 2X Large** | `text-body-2xl` | 20px (`1.25rem`) | 28px (`1.75rem`) | 0 | Lead text / emphasized descriptions |
| **Body Extra Large**| `text-body-xl` | 18px (`1.125rem`) | 26px (`1.625rem`) | 0 | Featured paragraph text |
| **Body Large** | `text-body-lg` | 16px (`1rem`) | 24px (`1.5rem`) | 0 | Default body text |
| **Body Medium** | `text-body-md` | 14px (`0.875rem`) | 20px (`1.25rem`) | 0 | Secondary body / captions / metadata |
| **Body Small** | `text-body-sm` | 12px (`0.75rem`) | 16px (`1rem`) | 0 | Badges, tags, fine print |

#### Layout & Spacing Utilities

| Utility | Definition | Usage |
|---|---|---|
| `.container` | `max-width: var(--content-width)` (1140px), centered, `padding-inline: 1rem` | Wrap all section content |
| `.section-padding` | Mobile: `pt-10 pb-8` (40px/32px)<br>Desktop: `pt-13 pb-12` (52px/48px) | Consistent vertical section spacing |
| `max-w-content` | `max-width: var(--content-width)` (1140px) | Constraint for non-container elements |

### Component Usage Example:

```tsx
// CORRECT: globals.css tokens used first
<section className="section-padding bg-surface-muted">
  <div className="container space-y-6">
    <h2 className="text-h2 text-secondary font-bold">
      আমাদের <span className="text-primary">কার্যক্রম</span>
    </h2>
    <p className="text-body-lg text-secondary/80">
      সমাজসেবামূলক প্রকল্পের বিবরণ এখানে থাকবে।
    </p>
    <button className="bg-primary text-base-white hover:bg-primary-600 px-6 py-3 rounded-xl font-semibold transition-colors">
      যুক্ত হোন
    </button>
  </div>
</section>
```

---

## 5. How to write a form

```tsx
// 1. Define schema in features/<feature>/types/
import { z } from "zod";
export const ContactSchema = z.object({
  name: z.string().min(2, "নাম অবশ্যই দিতে হবে"),
  email: z.string().email("সঠিক ইমেইল দিন"),
  message: z.string().min(10, "বার্তা সংক্ষিপ্ত হয়েছে"),
});
export type ContactFormData = z.infer<typeof ContactSchema>;

// 2. Use in the form component
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
  resolver: zodResolver(ContactSchema),
});

// 3. Show errors in Bangla
<span className="text-red-500 text-sm">{errors.name?.message}</span>
```

Write all validation messages in Bangla by default.

---

## 6. How to handle loading and error states

TanStack Query gives you `isLoading`, `isError`, `error`, and `data` — use them:

```tsx
const { data, isLoading, isError } = usePrograms();

if (isLoading) return <ProgramListSkeleton />;
if (isError) return <ErrorMessage />;
return <ProgramList programs={data} />;
```

- Build skeleton components (`<XxxSkeleton />`) — never show a blank div while loading
- Error components should be friendly, in Bangla, and not expose technical details
- Do not use `isFetching` for the initial loading state — `isLoading` is correct

---

## 7. How to think about caching

Since content barely changes, be aggressive with caching once pages have real data:

| Content type | Strategy |
|---|---|
| Static page content (about, mission) | `cacheLife("max")` — cache indefinitely, revalidate on deploy |
| Program listings | `cacheLife("days")` + `cacheTag("programs")` |
| News / updates | `cacheLife("hours")` + `cacheTag("news")` |
| User-specific data | No cache — TanStack Query handles this client-side |

When backend connects: add `revalidateTag("programs")` in the relevant mutation/webhook so the cache invalidates correctly.

---

## 8. Internationalization (i18n) & content guidelines

The project uses a clean, native i18n architecture without bulky external runtimes:

### Dictionary System
- **Dictionaries**: Located in `src/shared/i18n/dictionaries/` (`bn.ts` and `en.ts`).
- **Synchronized updates**: Whenever you add, rename, or remove a key, you **must** update both `bn.ts` and `en.ts` simultaneously.
- **Namespaces**: Organize dictionary keys by feature/page (e.g. `common`, `nav`, `home`, `programs`, `donations`).

### In Client Components:
```tsx
"use client";
import { useTranslations, useCurrentLocale } from "@/shared/i18n/client";

export function ExampleCard() {
  const t = useTranslations("home");
  const locale = useCurrentLocale();

  return (
    <div className="bg-surface p-6 rounded-2xl border border-border">
      <h3 className="text-h3 text-secondary">{t("hero.titleLine1")}</h3>
      <p className="text-body-md text-secondary/70">{t("hero.subtitle")}</p>
    </div>
  );
}
```

### In Server Components:
```tsx
import { getTranslations } from "@/shared/i18n/server";

export async function ExampleServerSection({ locale }: { locale: string }) {
  const t = await getTranslations(locale, "home");
  return <h2 className="text-h2 text-secondary">{t("about.title")}</h2>;
}
```

### Localized Formatting
Import format helpers from `@/shared/i18n/format`:
- `formatNumber(value, locale)` — formats `1234` as `১,২৩৪` in Bengali and `1,234` in English
- `formatCurrency(amount, locale)` — formats `1000` as `৳১,০০০` in Bengali and `৳1,000` in English
- `formatDate(date, locale)` — formats localized date strings (e.g. `১০ সেপ্টেম্বর ২০২৬`)

### Content Quality Rules
- **Proper Unicode Bengali**: Never paste Bijoy or ANSI encoded text
- **Numerals**: Body copy in Bengali should use Bengali numerals (`১`, `২`, `৩`); English uses Arabic numerals (`1`, `2`, `3`)
- **Currency**: `৳` symbol (Bangladeshi Taka), formatted as `৳১,০০০`
- **ARIA & Alt attributes**: Must be localized alongside UI text

---

## 9. Accessibility baseline

- Every interactive element must be keyboard-reachable and have a visible focus ring
- Images must have descriptive `alt` text in the active language
- Form fields must have associated `<label>` elements (not just `placeholder`)
- Color alone must never convey meaning — pair color with an icon or text
- Test with screen reader on at least one page before shipping

---

## 10. Component writing style

Prefer simple, readable components. This is a content site, not an app:

```tsx
// Good — clear, no magic
export function ProgramCard({ title, description, imageUrl }: ProgramCardProps) {
  return (
    <article className="...">
      <Image src={imageUrl} alt={title} width={400} height={240} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

// Avoid — over-engineered for this context
export const ProgramCard = memo(forwardRef<HTMLElement, ProgramCardProps>(({ ... }, ref) => ...));
```

Use `memo` / `forwardRef` only when you have a measured performance problem, not preemptively.

---

## 11. Zustand store shape

```ts
// features/nav/hooks/useNavStore.ts
import { create } from "zustand";

interface NavStore {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));
```

- Keep stores small and single-purpose
- Actions are defined inside `create()` — not outside
- No async logic inside stores — async goes in TanStack Query

---

## 12. Responsive breakpoints

Tailwind v4 defaults — use these:

| Breakpoint | Min-width | Use for |
|---|---|---|
| (default) | 0px | Mobile — design mobile-first |
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktop (content at 1140px fits here) |

Always design **mobile-first** — write base styles for mobile, then override with `md:`, `lg:`.

---

## 13. Git hygiene

- Commit message format: `type: short description` (e.g. `feat: add donation form`, `fix: nav menu z-index`)
- Types: `feat`, `fix`, `style`, `refactor`, `chore`, `docs`
- One logical change per commit — don't bundle unrelated work
- Never commit `.env.local` or any file containing secrets
- Feature branches off `main`, PR back to `main`

---

## 14. Before shipping any page

- [ ] **Design tokens from `globals.css` used first** — check colors (`bg-primary`, `text-secondary`, `bg-surface`), font sizes (`text-h1`–`text-h5`, `text-body-*`), and spacing (`.section-padding`, `.container`) before any standard Tailwind class
- [ ] **Zero arbitrary bracket values** — no `bg-[#...]` or `text-[...px]`
- [ ] **Bilingual UI copy synchronized** — every string is in both `src/shared/i18n/dictionaries/bn.ts` and `en.ts`
- [ ] **No raw text in JSX** — all user-facing strings accessed via `useTranslations` or `getTranslations`
- [ ] All images use `next/image` with localized `alt` attribute
- [ ] All internal links use `next/link`
- [ ] Loading and error states are handled
- [ ] Form validation messages are localized
- [ ] Page is navigable by keyboard
- [ ] Content is contained within `.container` (max 1140px)
- [ ] No `console.log` left in the code
- [ ] TypeScript reports zero errors (`npx tsc --noEmit`)

---

## 15. Shared utilities

- Import `cn` (and other shared utils) from `@/shared/utils` only — do not create additional re-export files.

