# GUIDELINE — ByteSpace

> **Recommendations, patterns, and rationale.**
> These are the preferred practices and engineering guidelines for the ByteSpace project.
> When in doubt, follow these.

---

## 1. Project Context

**ByteSpace** is an online learning & course marketplace frontend.
The platform enables students to discover courses, learn from top creators, and upgrade their careers.
The design is hand-built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, with centralized tokens in `src/app/globals.css`.

Key traits:
- **Typography System**: `Poppins` for bold, impactful headings; `Satoshi` for body copy and UI labels.
- **Brand Identity**: Electric Violet / Blue primary palette paired with high-contrast Crimson / Lime neon accents and crisp Neutral black/gray tones.
- **12-Column Responsive Grid**: Standardized 12-column layout with 120px margins and 40px gutters on desktop.
- **Server Components by Default**: Zero unnecessary client-side JavaScript bundle; `"use client"` is reserved for interactive filters, modals, and navigation drawers.
- **Clean Component Architecture**: Reusable UI primitives in `src/components/ui/` and domain feature modules in `src/features/`.

---

## 2. Page & Routing Architecture

Routes reside inside `src/app/`:
- `src/app/(marketing)/page.tsx` — Landing page (Hero, Trusted Logos, Featured Courses, Categories, Growth, Creators, CTA, Testimonials).
- `src/app/courses/page.tsx` — Course catalog with multi-criteria filtering and search.
- `src/app/courses/[slug]/page.tsx` — Detailed course overview & syllabus.
- `src/app/login/page.tsx` & `src/app/signup/page.tsx` — Authentication screens.
- `src/app/design-system/page.tsx` — Design system token and typography verification showcase.

Keep page components thin — compose them from focused feature components and UI primitives.

---

## 3. Project Folder Structure

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
│   ├── layout.tsx               # Root layout (Poppins font & metadata)
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

## 4. Section Layout & 12-Column Grid

Every page section follows the full-bleed background + 12-column constrained container pattern:

```tsx
<section className="py-16 lg:py-24 bg-surface">
  <div className="container-custom">
    {/* 12-Column Grid or Flex layout */}
    <div className="grid-12">
      <div className="col-span-12 lg:col-span-6">
        {/* Left Column Content */}
      </div>
      <div className="col-span-12 lg:col-span-6">
        {/* Right Column Content */}
      </div>
    </div>
  </div>
</section>
```

- **Container**: Use `.container-custom` (`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]`).
- **Grid**: Use `.grid-12` (`grid grid-cols-12 gap-5 sm:gap-8 lg:gap-[40px]`).

---

## 5. Design Tokens & Styling Priority

### 🚨 Design Token Priority Rule
1. **Always use tokens and utility classes from `globals.css` FIRST:**
   - **Colors**: Use semantic tokens (`bg-primary`, `bg-secondary`, `bg-surface`, `border-border`, `text-neutral-950`, `text-neutral-500`, etc.).
   - **Typography**: Use standardized classes (`text-heading-l`, `text-heading-m`, `text-heading-s`, `text-heading-xs`, `text-body-l`, `text-body-m`, `text-body-s`, `text-body-xs`, `text-label-l`, `text-label-m`, `text-label-s`, `text-label-xs`).
2. **Never use arbitrary bracket values** when a token exists (e.g. avoid `bg-[#2872ff]` — use `bg-primary` or `bg-primary-500`).
3. **No inline `style={{ }}`** attributes unless dynamically computed (e.g., progress bar percentages).

---

## 6. Token Reference Guide

### 🎨 Color Palette

| Scale | Swatches | Purpose / Usage |
|---|---|---|
| **Neutral (Black Scale)** | `50` (`#f5f5f6`) → `950` (`#242528`), `#FFFFFF` | Backgrounds, surfaces, borders, text contrast, secondary icons |
| **Primary (Electric Violet)** | `50` (`#e7f6ff`) → `950` (`#071e5f`), `#2872ff` (`500`) | Primary CTA buttons, brand badges, active links, accents |
| **Secondary (Crimson / Lime)** | `50` (`#fdffe4`) → `950` (`#243300`), `#cbfc01` (`500`) | Highlight callouts, attention badges, high-contrast markers |

### 🔤 Typography Scale

| Token Class | Font Family | Size | Line Height | Weight | Usage |
|---|---|---|---|---|---|
| `.text-heading-l` | Poppins | 72px (`4.5rem`) | 120% (1.2) | SemiBold (600) | Hero display headlines |
| `.text-heading-m` | Poppins | 44px (`2.75rem`) | 120% (1.2) | SemiBold (600) | Major section headings |
| `.text-heading-s` | Poppins | 36px (`2.25rem`) | 120% (1.2) | SemiBold (600) | Subsection headings & modal titles |
| `.text-heading-xs` | Poppins | 20px (`1.25rem`) | 120% (1.2) | SemiBold (600) | Card headings, feature titles |
| `.text-body-l` | Satoshi | 18px (`1.125rem`) | 160% (1.6) | Regular (400) | Lead body text, hero descriptions |
| `.text-body-m` | Satoshi | 16px (`1.000rem`) | 160% (1.6) | Regular (400) | Default body copy, paragraphs |
| `.text-body-s` | Satoshi | 14px (`0.875rem`) | 160% (1.6) | Regular (400) | Secondary text, course descriptions |
| `.text-body-xs` | Satoshi | 12px (`0.750rem`) | 160% (1.6) | Regular (400) | Small metadata, helper text |
| `.text-label-l` | Satoshi | 18px (`1.125rem`) | 120% (1.2) | Medium (500) | Large button labels |
| `.text-label-m` | Satoshi | 16px (`1.000rem`) | 120% (1.2) | Medium (500) | Primary button labels, input labels |
| `.text-label-s` | Satoshi | 14px (`0.875rem`) | 120% (1.2) | Medium (500) | Badges, filter chips, navigation links |
| `.text-label-xs` | Satoshi | 12px (`0.750rem`) | 120% (1.2) | Medium (500) | Micro tags, timestamp indicators |

---

## 7. Accessibility & Best Practices

- Every interactive button and link must have clear keyboard focus styles and hover feedback.
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Images must use `next/image` with explicit `width`, `height`, and descriptive `alt` text.
- Form inputs must have connected `<label>` elements.
