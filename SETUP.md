# SETUP — ByteSpace Frontend

This document outlines the active setup, dependency baseline, and folder architecture for **ByteSpace**.

---

## 1. Project Directory Structure

```
src/
│
├── app/                         # Next.js routing (App Router)
│   ├── (marketing)/
│   │   ├── layout.tsx           # Marketing layout (Navbar + Footer)
│   │   └── page.tsx             # ByteSpace Landing Page (/)
│   ├── courses/
│   │   ├── layout.tsx           # Courses layout (Navbar + Footer)
│   │   ├── page.tsx             # Course Catalog (/courses)
│   │   └── [slug]/
│   │       └── page.tsx         # Course Detail (/courses/[slug])
│   ├── login/
│   │   └── page.tsx             # Login Screen (/login)
│   ├── signup/
│   │   └── page.tsx             # Signup Screen (/signup)
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

## 2. Installed Dependencies

Minimal production stack with zero unnecessary bloat:

```json
{
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

## 3. Fonts & Typography Setup

- **Headings**: `Poppins` (Google Font)
  - Loaded in `src/app/layout.tsx` via `next/font/google`
  - Variable: `--font-poppins`
  - Weights: `400`, `500`, `600`, `700`
- **Body & Labels**: `Satoshi`
  - Loaded in `src/app/globals.css` via Fontshare CSS
  - Fallbacks: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - Variable: `--font-body`

---

## 4. Global Styles & Design Tokens

Configured in `src/app/globals.css`:

### Color System
- **Neutral (Black scale)**: `50` (`#f5f5f6`) to `950` (`#242528`), and `#FFFFFF`
- **Primary (Electric Violet / Blue)**: `50` (`#e7f6ff`) to `950` (`#071e5f`), and `#2872ff` (`500`)
- **Secondary (Crimson / Lime)**: `50` (`#fdffe4`) to `950` (`#243300`), and `#cbfc01` (`500`)

### 12-Column Layout Grid
- `.container-custom`: Max-width `1440px`, centered with `120px` desktop padding.
- `.grid-12`: 12-column CSS grid with `40px` desktop gutter.

---

## 5. Key Verification Commands

```bash
# Run local development server
npm run dev

# Run TypeScript typecheck
npx tsc --noEmit

# Run production build validation
npm run build
```
