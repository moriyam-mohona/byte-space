# RULEBOOK — ByteSpace

> **Hard rules. No exceptions without an explicit architectural decision recorded here.**
> Applies to every engineer working in this repository.

---

## 1. Tech Stack — use only what is installed

| Need | Tool | Do NOT use |
|---|---|---|
| Framework | Next.js 16 (App Router) + React 19 | Pages router, Vite, CRA |
| Language | TypeScript (Strict mode) | JavaScript, loose typing (`any`) |
| Styling | Tailwind CSS v4 + Design tokens in `globals.css` | `styled-components`, `emotion`, `CSS Modules`, arbitrary `[#...]`, inline styles |
| Component Library | **Hand-built only** | shadcn, MUI, Chakra, Radix (direct), Mantine |
| Class Merging | `clsx` + `tailwind-merge` (`cn` from `@/lib/utils`) | String concatenation, template string mess |
| State Management | React built-in (`useState`, `useReducer`, URL params) | Redux, Zustand, Recoil (unnecessary overhead for present scope) |

Adding a new package requires a formal proposal and justification.

---

## 2. Exact Project Folder Structure

```
src/
│
├── app/                         # Next.js routing (App Router)
│   ├── (site)/                  # Main public website route group
│   │   ├── layout.tsx           # Shared Site layout
│   │   ├── page.tsx             # ByteSpace Landing Page (/)
│   │   ├── courses/
│   │   │   ├── page.tsx         # Course Catalog (/courses)
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Course Detail (/courses/[slug])
│   │   └── creators/
│   │       └── page.tsx         # Creators / Instructors Page (/creators)
│   ├── (auth)/                  # Authentication route group
│   │   ├── layout.tsx           # Focused Auth layout
│   │   ├── login/
│   │   │   └── page.tsx         # Login Screen (/login)
│   │   └── signup/
│   │       └── page.tsx         # Signup Screen (/signup)
│   ├── design-system/
│   │   └── page.tsx             # Style Guide & Design System Showcase (/design-system)
│   ├── layout.tsx               # Root HTML shell layout (Poppins font & metadata)
│   ├── globals.css              # Central tokens, typography utilities, grid layout
│   └── providers.tsx            # Root client provider wrapper
│
├── components/                  # Generic reusable UI
│   ├── ui/                      # Base primitives (Button, Input, Badge, AvatarGroup)
│   └── layout/                  # Layout primitives (Navbar, Footer, MobileMenu)
│
├── features/                    # Feature-specific domain code
│   ├── home/                    # Hero, TrustedLogos, Categories, Growth, CreatorCTA, Testimonials
│   ├── courses/                 # CourseCard, CourseGrid, CourseFilters, CourseSearch
│   └── auth/                    # AuthLayout, LoginForm, SignupForm
│
├── lib/                         # Utilities / API / helpers
│   ├── api.ts                   # Fetcher and API client helpers
│   ├── utils.ts                 # cn class merging utility
│   └── constants.ts             # Site-wide constants & navigation links
│
├── hooks/                       # Reusable React hooks (e.g. useDebounce)
│
├── types/                       # Shared TypeScript type definitions (course.ts, common.ts)
│
└── data/                        # Static mock data (courses.ts, categories.ts)

public/
├── images/                      # Course thumbnails, hero visuals, avatars
├── icons/                       # SVG icons & vector assets
└── fonts/                       # Local font assets
```

---

## 3. Typography & Styling Rules

### MANDATORY Design Token Priority
1. **Always use tokens and classes from `globals.css` FIRST:**
   - **Headings**: Use `.text-heading-l`, `.text-heading-m`, `.text-heading-s`, `.text-heading-xs` (Poppins SemiBold 600, line-height 120%).
   - **Body**: Use `.text-body-l`, `.text-body-m`, `.text-body-s`, `.text-body-xs` (Satoshi Regular 400, line-height 160%).
   - **Labels**: Use `.text-label-l`, `.text-label-m`, `.text-label-s`, `.text-label-xs` (Satoshi Medium 500, line-height 120%).
   - **Colors**: Use semantic classes (`bg-primary`, `text-primary`, `bg-secondary`, `bg-neutral-50` through `bg-neutral-950`).
2. **Prohibited:**
   - No arbitrary bracket values (e.g. `text-[72px]`, `bg-[#2872ff]`). Use token utilities.
   - No inline `style={{ }}` attributes.
   - Dark mode is disabled; design is clean light-mode with high-contrast accents.

---

## 4. Layout Grid Rules

- **12-Column Responsive Grid**: Use `.grid-12` (`grid grid-cols-12 gap-5 sm:gap-8 lg:gap-[40px]`).
- **Container**: Use `.container-custom` (`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]`).
- Sections must be full-bleed with constrained inner content container.

---

## 5. TypeScript Rules

- `strict: true` must remain enabled.
- `any` is strictly forbidden. Use proper interfaces, generics, or `unknown` with narrowing.
- All repeated domain items (courses, categories, testimonials) must have explicit types in `src/types/`.

---

## 6. Next.js & Performance Rules

- **Server Components by Default**: Only add `"use client"` when component requires client state (e.g. search filter input, mobile menu toggle, interactive carousel).
- **Images**: Always use `next/image` with explicit width/height and descriptive `alt` text.
- **Links**: Always use `next/link` for internal routing.
