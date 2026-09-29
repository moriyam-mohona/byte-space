# RULEBOOK — ByteSpace

> **Hard Rules & Non-Negotiable Standards**
> This document defines the strict, enforceable rules for the ByteSpace frontend repository.
> Every human engineer and AI coding assistant MUST follow these rules without exception.

---

## 1. Tech Stack & Dependency Rules

- **Allowed Dependencies ONLY**:
  - `next` (v16.x App Router)
  - `react` / `react-dom` (v19.x)
  - `typescript` (v5.x)
  - `tailwindcss` (v4.x)
  - `clsx` and `tailwind-merge`
- **MUST NOT** install component libraries (`shadcn`, `MUI`, `Chakra`, `Radix`, `Ant Design`). All components MUST be hand-built.
- **MUST NOT** introduce unapproved state libraries (`Redux`, `Zustand`, `MobX`, `Jotai`). Use React built-in state (`useState`, `useReducer`, URL search parameters).
- **MUST NOT** install heavy HTTP or data fetching libraries (`axios`, `SWR`, `react-query`) unless explicitly requested and approved.
- **MUST NOT** add utility or icon libraries without explicit approval.

---

## 2. Architecture & Directory Boundaries

- **MUST** follow the exact repository directory structure:
  - `src/app/(site)/`: All public-facing pages (`/`, `/courses`, `/courses/[slug]`, `/creators`).
  - `src/app/(auth)/`: Authentication screens (`/login`, `/signup`).
  - `src/app/design-system/`: Design system and token verification showcase.
  - `src/components/ui/`: Generic, domain-agnostic UI primitives (`Button`, `Input`, `Badge`, `AvatarGroup`).
  - `src/components/layout/`: Global layout components (`Navbar`, `Footer`, `MobileMenu`).
  - `src/features/<feature>/`: Domain-specific components scoped to features (`home`, `courses`, `auth`).
  - `src/lib/`: Shared utility functions, API stubs, and constants (`utils.ts`, `api.ts`, `constants.ts`).
  - `src/hooks/`: Generic reusable hooks (`useDebounce.ts`).
  - `src/types/`: Shared TypeScript types and interfaces (`course.ts`, `common.ts`).
  - `src/data/`: Static mock data and fixtures (`courses.ts`, `categories.ts`).
- **MUST NOT** place business logic, data fixtures, or feature-specific UI directly inside `src/app/` route files. Route files MUST remain thin.
- **MUST NOT** create ad-hoc root folders outside the approved structure.
- **MUST** import shared modules using the `@/*` path alias. Relative imports going up more than one directory (e.g. `../../`) MUST NOT be used.

---

## 3. Server & Client Component Rules

- **Server Components by Default**: All components MUST be Server Components unless client-side interactivity is strictly required.
- **"use client" Restrictions**:
  - **MUST ONLY** use `"use client"` when component requires: React hooks (`useState`, `useEffect`, `useCallback`), event listeners, browser APIs, or interactive state (e.g., search debounce, mobile menu toggle, interactive filters).
  - **MUST NOT** put `"use client"` on layout shells, static marketing sections, static cards, or root page wrappers.
  - **MUST** push client component boundaries to the furthest leaves of the component tree.

---

## 4. Design Tokens & Typography Rules

- **Source of Truth**: `src/app/globals.css` is the single source of truth for color, typography, and grid tokens.
- **Typography Tokens (Figma Exact)**:
  - **Headings (Poppins SemiBold 600, Line Height: 120%)**:
    - `Heading L` (72px / 120%): MUST use `.text-heading-l`
    - `Heading M` (44px / 120%): MUST use `.text-heading-m`
    - `Heading S` (36px / 120%): MUST use `.text-heading-s`
    - `Heading XS` (20px / 120%): MUST use `.text-heading-xs`
  - **Body (Satoshi Regular 400, Line Height: 160%)**:
    - `Body L` (18px / 160%): MUST use `.text-body-l`
    - `Body M` (16px / 160%): MUST use `.text-body-m`
    - `Body S` (14px / 160%): MUST use `.text-body-s`
    - `Body XS` (12px / 160%): MUST use `.text-body-xs`
  - **Labels (Satoshi Medium 500, Line Height: 120%)**:
    - `Label L` (18px / 120%): MUST use `.text-label-l`
    - `Label M` (16px / 120%): MUST use `.text-label-m`
    - `Label S` (14px / 120%): MUST use `.text-label-s`
    - `Label XS` (12px / 120%): MUST use `.text-label-xs`
- **Token Priority**:
  - **MUST** use token utility classes from `globals.css` for colors: `bg-primary`, `text-primary`, `bg-secondary`, `text-neutral-*`, `bg-neutral-*`.
  - **MUST** use layout tokens: `.container-custom` (1440px max-width, 120px desktop margin), `.grid-12` (12-column grid, 40px desktop gutter).
- **Prohibited Styling Practices**:
  - **MUST NOT** use arbitrary bracket values when a token exists (e.g. NEVER `text-[72px]`, `leading-[120%]`, `bg-[#2872ff]`, `max-w-[1440px]`).
  - **MUST NOT** use inline `style={{ }}` attributes on JSX elements.
  - **MUST NOT** invent design tokens, random colors, or approximate spacing not present in the Figma style guide.
  - **Dark Mode**: Disabled. The entire app MUST use the clean light-mode token theme exclusively.

---

## 5. TypeScript Rules

- **Strict Mode**: `strict: true` in `tsconfig.json` MUST NOT be disabled or relaxed.
- **No `any`**: The use of `any` is strictly FORBIDDEN. Use explicit interfaces, union types, generics, or `unknown` with type narrowing.
- **Explicit Types**:
  - All component props MUST have an explicit `interface` or `type`.
  - All domain entities (`Course`, `Category`, `Testimonial`) MUST have strict definitions in `src/types/`.
  - Type assertions (`as SomeType`) MUST AVOIDED unless narrowing DOM refs or library interop with explicit justification.

---

## 6. Component & Data-Driven UI Rules

- **Single Responsibility**: Each component MUST have a single, well-defined responsibility.
- **No Duplicated JSX**: Repeated UI structures MUST be rendered via data arrays (`data.map(...)`) and reusable components.
- **No Over-Abstraction**: Do NOT create a component wrapper merely because a `<div>` exists. Abstract only when UI is repeated, domain-meaningful, or encapsulates distinct behavior.
- **Explicit Prop Contracts**: Components MUST receive structured props rather than unstructured nested objects.

---

## 7. Images & Asset Rules

- **Next/Image ONLY**: All image rendering MUST use `next/image`. Raw HTML `<img>` tags MUST NOT be used.
- **Dimensions & Alt**: Every `<Image>` MUST include explicit `width`, `height` (or `fill`), appropriate `sizes`, and a descriptive `alt` attribute.
- **Asset Paths**: Static assets MUST be stored under `public/images/`, `public/icons/`, or `public/fonts/`.

---

## 8. Accessibility Rules

- **Semantic HTML**: MUST use proper HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<label>`).
- **No Clickable Divs**: Interactive elements MUST use native `<button>` or `<Link>` elements.
- **Keyboard Navigation**: All interactive triggers, links, and forms MUST be keyboard focusable with visible focus rings.
- **Form Labels**: Every input element MUST have an accessible, associated `<label>` (not just `placeholder`).

---

## 9. Git & AI Coding Rules

- **Phased Development**: MUST work in small phases: Plan → Implement → Inspect → Compare → Correct → Refactor → Commit.
- **No Silent Changes**: Do NOT make unrelated modifications to configuration, architecture, or working code.
- **AI Verification**: All AI-generated code MUST be reviewed, type-checked (`npx tsc --noEmit`), and verified against the build (`next build`) before committing.
- **Commit Messages**: MUST follow conventional commits (`feat:`, `fix:`, `style:`, `refactor:`, `chore:`).
