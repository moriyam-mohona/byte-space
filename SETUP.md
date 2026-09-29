# SETUP — ByteSpace Frontend Specification

This document describes the actual, implemented repository state, directory architecture, active dependencies, and design tokens for **ByteSpace**.

---

## 1. Project Overview

- **Project Name**: ByteSpace
- **Category**: Online Learning & Course Marketplace Frontend
- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 + Centralized Tokens (`src/app/globals.css`)

---

## 2. Actual Dependencies & Versions

From `package.json`:

```json
{
  "name": "byte-space",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "next": "16.3.4",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "tailwind-merge": "^3.6.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.3.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## 3. Implemented Folder Structure

```
src/
│
├── app/                         # Next.js App Router
│   ├── (site)/                  # Public marketplace route group
│   │   ├── layout.tsx           # Site layout pass-through shell
│   │   ├── page.tsx             # Home Landing Page (/)
│   │   ├── courses/
│   │   │   ├── page.tsx         # Course Catalog (/courses)
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Course Detail (/courses/[slug])
│   │   └── creators/
│   │       └── page.tsx         # Creators / Instructors (/creators)
│   ├── (auth)/                  # Authentication route group
│   │   ├── layout.tsx           # Auth layout pass-through shell
│   │   ├── login/
│   │   │   └── page.tsx         # Login Screen (/login)
│   │   └── signup/
│   │       └── page.tsx         # Signup Screen (/signup)
│   ├── design-system/
│   │   └── page.tsx             # Style Guide Showcase (/design-system)
│   ├── layout.tsx               # Root HTML shell with Poppins font & Providers
│   ├── globals.css              # Central tokens, typography utilities, 12-col grid
│   └── providers.tsx            # Root Client Provider wrapper
│
├── components/                  # Reusable UI primitives & layout
│   ├── ui/                      # Base UI primitives (Button, Input, Badge, AvatarGroup)
│   └── layout/                  # Global layout components (Navbar, Footer, MobileMenu)
│
├── features/                    # Domain feature modules
│   ├── home/                    # Hero, TrustedLogos, Categories, Growth, CreatorCTA, Testimonials
│   ├── courses/                 # CourseCard, CourseGrid, CourseFilters, CourseSearch
│   └── auth/                    # AuthLayout, LoginForm, SignupForm
│
├── lib/                         # Shared utilities & helpers
│   ├── api.ts                   # Fetcher and API client helpers
│   ├── utils.ts                 # cn class merging utility (clsx + tailwind-merge)
│   └── constants.ts             # Site-wide constants & navigation links
│
├── hooks/                       # Reusable React hooks (e.g. useDebounce.ts)
│
├── types/                       # Shared TypeScript types (course.ts, common.ts)
│
└── data/                        # Static mock data fixtures (courses.ts, categories.ts)

public/
├── images/                      # Course thumbnails, hero graphics, avatars
├── icons/                       # SVG icons & vector assets
└── fonts/                       # Local font assets
```

---

## 4. Typography & Font Configuration

- **Heading Font**: `Poppins`
  - Loaded in `src/app/layout.tsx` via `next/font/google`
  - CSS Variable: `--font-poppins`
  - Weights: `400`, `500`, `600`, `700`
- **Body & Label Font**: `Satoshi`
  - Loaded in `src/app/globals.css` via Fontshare CSS
  - Fallbacks: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - CSS Variable: `--font-body`

### Typography Hierarchy Tokens (From `src/app/globals.css`)

| Level | Token Class | Font Family | Size | Line Height | Weight |
|---|---|---|---|---|---|
| **Heading L** | `.text-heading-l` | Poppins | 72px (`4.5rem`) | 120% (1.2) | SemiBold (600) |
| **Heading M** | `.text-heading-m` | Poppins | 44px (`2.75rem`) | 120% (1.2) | SemiBold (600) |
| **Heading S** | `.text-heading-s` | Poppins | 36px (`2.25rem`) | 120% (1.2) | SemiBold (600) |
| **Heading XS** | `.text-heading-xs` | Poppins | 20px (`1.25rem`) | 120% (1.2) | SemiBold (600) |
| **Body L** | `.text-body-l` | Satoshi | 18px (`1.125rem`) | 160% (1.6) | Regular (400) |
| **Body M** | `.text-body-m` | Satoshi | 16px (`1.000rem`) | 160% (1.6) | Regular (400) |
| **Body S** | `.text-body-s` | Satoshi | 14px (`0.875rem`) | 160% (1.6) | Regular (400) |
| **Body XS** | `.text-body-xs` | Satoshi | 12px (`0.750rem`) | 160% (1.6) | Regular (400) |
| **Label L** | `.text-label-l` | Satoshi | 18px (`1.125rem`) | 120% (1.2) | Medium (500) |
| **Label M** | `.text-label-m` | Satoshi | 16px (`1.000rem`) | 120% (1.2) | Medium (500) |
| **Label S** | `.text-label-s` | Satoshi | 14px (`0.875rem`) | 120% (1.2) | Medium (500) |
| **Label XS** | `.text-label-xs` | Satoshi | 12px (`0.750rem`) | 120% (1.2) | Medium (500) |

---

## 5. Design Tokens (From `src/app/globals.css`)

### Colors
- **Neutral (Black Scale)**: `neutral-50` (`#f5f5f6`) to `neutral-950` (`#242528`), and `#FFFFFF`
- **Primary (Electric Violet / Blue)**: `primary-50` (`#e7f6ff`) to `primary-950` (`#071e5f`), and `#2872ff` (`500`)
- **Secondary (Crimson / Lime)**: `secondary-50` (`#fdffe4`) to `secondary-950` (`#243300`), and `#cbfc01` (`500`)

### Layout Utilities
- `.container-custom`: `max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]`
- `.grid-12`: `grid grid-cols-12 gap-5 sm:gap-8 lg:gap-[40px]`

---

## 6. Key Commands & Verification

```bash
# Start local development server
npm run dev

# Run TypeScript typecheck
npx tsc --noEmit

# Run production build validation
npm run build
```
