# GUIDELINE — ByteSpace Engineering Playbook

> **Methodology, Implementation Workflow & Architectural Patterns**
> This playbook provides the detailed reasoning, execution steps, and engineering practices for building ByteSpace.

---

## 1. Project Engineering Objective & Reviewer Expectations

### Objective
ByteSpace is an online learning and course marketplace frontend built to production standards. The goal is to translate the Figma visual design into a high-performance, pixel-accurate, responsive, and accessible Next.js web application with maintainable TypeScript code.

### Target Reviewer Impression
> *"This engineer understands design systems, translates Figma specifications accurately into Next.js/React/TypeScript, structures components cleanly with minimal dependencies, handles responsive states gracefully, and writes code that any senior engineer can maintain."*

---

## 2. Figma as Visual Source of Truth

The Figma design is the authoritative visual specification. Never guess or approximate visual properties from memory.

### Visual Properties to Compare:
- **Typography**: Font family, font weight, font size, line height, letter spacing
- **Colors & Tokens**: Background fills, borders, badge tints, text contrast
- **Spacing Rhythm**: Section padding, container widths, card inner padding, flex/grid gaps
- **Components**: Card structures, image aspect ratios, avatar stacks, button variants
- **Responsive Behavior**: Mobile column collapse, hamburger drawer, search bar reflow

---

## 3. Design System & Token Inventory

All design tokens are centrally configured in `src/app/globals.css`.

### 🎨 Color System

| Palette Scale | Tokens / Classes | Hex Range | Applied Usage |
|---|---|---|---|
| **Neutral (Black Scale)** | `neutral-50` ... `neutral-950`, `white` | `#f5f5f6` → `#242528` (`#FFFFFF`) | Base backgrounds, card surfaces, borders, body text, dark footer |
| **Primary (Electric Violet)** | `primary-50` ... `primary-950`, `primary` | `#e7f6ff` → `#071e5f` (`#2872ff`) | Main CTA buttons, active navigation, brand badges, key accents |
| **Secondary (Crimson / Lime)** | `secondary-50` ... `secondary-950`, `secondary` | `#fdffe4` → `#243300` (`#cbfc01`) | High-contrast highlight badges, callout tags, accent markers |

### 🔤 Typography Hierarchy

| Level | Utility Class | Font Family | Size | Line Height | Weight |
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

### 📐 12-Column Grid & Layout Container
- **Container**: `.container` (`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]`).
- **12-Column Grid**: `.grid-12` (`grid grid-cols-12 gap-5 sm:gap-8 lg:gap-[40px]`).

---

## 4. Component Design & Abstraction Strategy

### Rule 1: Build Around Clear Responsibilities
- `CourseCard`: Renders course thumbnail, level badge, title, instructor info, rating score, and price.
- `CourseGrid`: Renders a responsive 1-to-3 column grid container for courses.
- `CourseFilters`: Handles category, price, and level filter state.
- `CourseSearch`: Handles debounced search input.

### Rule 2: When to Abstract vs. When Not to Abstract
- **Abstract when**:
  - A UI element is repeated $\ge 2$ times (e.g. `Button`, `Badge`, `CourseCard`).
  - A component encapsulates distinct behavior (e.g. `Navbar` mobile drawer, `useDebounce`).
  - It makes parent components cleaner and easier to read.
- **Do NOT abstract when**:
  - It is a single-use `<div>` layout wrapper.
  - The abstraction hides standard Tailwind classes without providing real reuse.

---

## 5. Data-Driven UI Architecture

All repeated UI is driven by typed data structures located in `src/data/` and typed via `src/types/`.

### Course Model Example (`src/types/course.ts`):
```ts
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
    role: string;
  };
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice?: number;
  level: CourseLevel;
  lessons: number;
  duration: string;
  category: string;
  featured?: boolean;
}
```

---

## 6. Next.js Server & Client Component Strategy

- **Server Components (Default)**:
  - `src/app/(site)/page.tsx`
  - `src/app/(site)/courses/page.tsx`
  - `src/app/(site)/courses/[slug]/page.tsx`
  - `src/components/layout/Footer.tsx`
  - Static marketing sections (Hero layout, Trusted Logos, Categories grid)
- **Client Components (`"use client"`)**:
  - `Navbar.tsx` (Mobile menu toggle state, pathname active link detection)
  - `CourseSearch.tsx` (Interactive search input + debounced state)
  - `CourseFilters.tsx` (Interactive category filter buttons and checkboxes)
  - Interactive auth forms

---

## 7. Responsive Design Strategy

The application must be fully responsive across all device breakpoints:

| Viewport | Breakpoint | Layout Behavior |
|---|---|---|
| **Mobile** | `< 640px` | Single column grid (`grid-cols-1`), mobile navigation drawer, stacked hero elements, full-width inputs. |
| **Tablet** | `640px - 1023px` | 2-column course grid (`md:grid-cols-2`), compact header spacing, 2-column feature blocks. |
| **Desktop** | `1024px - 1279px` | 3-column course grid (`lg:grid-cols-3`), full desktop navigation links, visible action buttons. |
| **Large Desktop** | `≥ 1280px` | Constrained at 1440px with 120px margins (`.container-custom`) and 40px gutters (`.grid-12`). |

---

## 8. Dynamic UI States (Loading, Empty, Error)

When rendering dynamic or filter-driven views, always provide clean feedback states:
1. **Loading State**: Render skeleton placeholders (`<CourseCardSkeleton />`) that match the exact shape of content.
2. **Success State**: Render the populated course grid.
3. **Empty State**: Display an informative empty message with a "Clear Filters" or "Reset Search" action when no results match.
4. **Error State**: Render a friendly error recovery prompt.

---

## 9. Phased Implementation & Comparison Workflow

For every milestone:
1. **Plan**: Define components, props, data requirements, and tokens needed.
2. **Implement**: Build the section using data-driven Server Components and minimal Client Components.
3. **Inspect**: Run dev server (`npm run dev`) and test responsive viewports.
4. **Compare**: Measure against Figma (typography, colors, borders, spacing, alignment).
5. **Correct**: Fix any visual or functional discrepancies.
6. **Refactor**: Clean up class names, simplify logic, ensure strict TypeScript types.
7. **Commit**: Save clean, descriptive Git commit (`type: description`).

---

## 10. AI-Assisted Development Workflow

When developing with AI assistance:
- **Never blindly paste generated code**: Always review prop contracts, accessibility attributes, and styling tokens.
- **Enforce Token Usage**: Ensure the AI uses tokens from `globals.css` instead of inventing arbitrary values (`[#...]`).
- **Validate Locally**: Always run `npx tsc --noEmit` and `next build` to guarantee error-free compilation.

---

## 11. Final Definition of Done

A page, section, or feature is **DONE** only when:
- [ ] Matches the Figma visual design with pixel accuracy.
- [ ] Responsive across Mobile, Tablet, Desktop, and Large Desktop.
- [ ] Zero TypeScript errors (`npx tsc --noEmit`).
- [ ] Production build succeeds without errors or warnings (`next build`).
- [ ] Semantic HTML and proper keyboard accessibility in place.
- [ ] No arbitrary bracket classes or inline styles.
- [ ] Images optimized via `next/image` with localized alt text.
