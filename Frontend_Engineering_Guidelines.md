# Byte Space -- Frontend Engineering Assignment Guidelines

## Project: ByteSpace

> **Goal:** Build the ByteSpace frontend from the provided Figma design
> with pixel-accurate UI, clean architecture, reusable components,
> responsive behavior, and production-level engineering practices.

------------------------------------------------------------------------

# 1. Engineering Goal

This assignment is not only a UI recreation task.

The implementation should demonstrate that I can:

-   Translate a Figma design accurately into a working interface.
-   Build scalable and reusable React/Next.js components.
-   Write clean TypeScript.
-   Use Tailwind CSS effectively.
-   Build responsive layouts.
-   Handle UI states properly when dynamic data is involved.
-   Make sensible Next.js rendering decisions.
-   Optimize images and frontend performance.
-   Follow accessibility and semantic HTML practices.
-   Organize code so another engineer can maintain it.
-   Use Git/GitHub professionally.
-   Debug problems independently.
-   Use AI-assisted development without sacrificing code quality.

### Target reviewer impression

> "This developer can take a production UI design, understand it, break
> it into reusable components, implement it accurately in
> Next.js/React/TypeScript, make it responsive, and maintain the code
> like an engineer."

------------------------------------------------------------------------

# 2. Source of Truth

The Figma design is the primary visual specification.

Do not rely on memory or approximation.

For every major section, compare:

**Figma → Implementation → Screenshot → Difference Check → Fix**

Pay attention to:

-   Typography
-   Font family
-   Font weight
-   Font size
-   Line height
-   Letter spacing
-   Colors
-   Backgrounds
-   Gradients
-   Borders
-   Border radius
-   Shadows
-   Widths
-   Heights
-   Spacing
-   Alignment
-   Image dimensions
-   Image positioning
-   Decorative elements
-   Section spacing
-   Responsive behavior

------------------------------------------------------------------------

# 3. Recommended Technology

Use the simplest stack that satisfies the assignment.

### Core

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS

### Supporting

-   Lucide React or the icon solution provided by the design
-   Next/Image for optimized images
-   ESLint
-   Prettier if appropriate

### Avoid unnecessary technologies

Do not add these unless the assignment actually requires them:

-   Redux
-   RTK Query
-   Prisma
-   MongoDB
-   PostgreSQL
-   Redis
-   Socket.io
-   Docker
-   Complex state-management libraries

The objective is to demonstrate frontend engineering, not technology
quantity.

------------------------------------------------------------------------

# 4. Before Coding --- Understand the Design

## Step 1: Audit the Figma

Before writing UI code, identify:

### Pages

Likely pages from the provided design:

-   Home
-   Courses
-   Login
-   Signup
-   Creator-related page/section

### Home sections

-   Navbar
-   Hero
-   Trusted companies/logos
-   Featured courses
-   Categories
-   Professional growth section
-   Creator section
-   Creator CTA
-   Testimonials
-   Footer

### Courses page

-   Navbar
-   Search
-   Filter controls
-   Category filters
-   Course grid
-   Course cards

### Authentication

-   Signup
-   Login

------------------------------------------------------------------------

# 5. Create a Design Inventory

Before implementation, record:

## Colors

Extracted directly from the Figma Style Guide:

### Neutral (Black Scale)
``` text
White:       #FFFFFF
Neutral-50:  #f5f5f6
Neutral-100: #e5e6e8
Neutral-200: #ced0d3
Neutral-300: #abaeb5
Neutral-400: #82868e
Neutral-500: #666973
Neutral-600: #585a62
Neutral-700: #4b4c53
Neutral-800: #424348
Neutral-900: #3a3b3f
Neutral-950: #242528
```

### Primary (Electric Violet / Blue Scale)
``` text
White:       #FFFFFF
Primary-50:  #e7f6ff
Primary-100: #d3eeff
Primary-200: #b0ddff
Primary-300: #81c5ff
Primary-400: #4f9dff
Primary-500: #2872ff
Primary-600: #0445ff
Primary-700: #0043ff
Primary-800: #003be2
Primary-900: #0b36a4
Primary-950: #071e5f
```

### Secondary (Crimson / Lime Scale)
``` text
White:         #FFFFFF
Secondary-50:  #fdffe4
Secondary-100: #faffc5
Secondary-200: #f2ff92
Secondary-300: #e4ff54
Secondary-400: #d4fb20
Secondary-500: #cbfc01
Secondary-600: #8cb400
Secondary-700: #6a8902
Secondary-800: #546b09
Secondary-900: #465a0d
Secondary-950: #243300
```

## Typography

### Headings (Poppins SemiBold 600, Line Height: 120%)
``` text
Heading L:  72px (4.5rem)   | Line Height: 120% (1.2) | SemiBold
Heading M:  44px (2.75rem)  | Line Height: 120% (1.2) | SemiBold
Heading S:  36px (2.25rem)  | Line Height: 120% (1.2) | SemiBold
Heading XS: 20px (1.25rem)  | Line Height: 120% (1.2) | SemiBold
```

### Body (Satoshi Regular 400, Line Height: 160%)
``` text
Body L:     18px (1.125rem) | Line Height: 160% (1.6) | Regular
Body M:     16px (1.000rem) | Line Height: 160% (1.6) | Regular
Body S:     14px (0.875rem) | Line Height: 160% (1.6) | Regular
Body XS:    12px (0.750rem) | Line Height: 160% (1.6) | Regular
```

### Labels (Satoshi Medium 500, Line Height: 120%)
``` text
Label L:    18px (1.125rem) | Line Height: 120% (1.2) | Medium
Label M:    16px (1.000rem) | Line Height: 120% (1.2) | Medium
Label S:    14px (0.875rem) | Line Height: 120% (1.2) | Medium
Label XS:   12px (0.750rem) | Line Height: 120% (1.2) | Medium
```

## Layout Grid & Spacing

``` text
Grid Columns:     12 Columns
Desktop Margin:   120px
Desktop Gutter:   40px
Container Width:  1440px max-width (.container-custom)
```

## Components

Identify repeated UI:

``` text
Button (Primary, Secondary, Outline, Ghost, Soft)
Input (Search, Text, Email, Password)
Badge / Category Pill
Avatar Group
Course Card (Image, Meta, Title, Instructor, Rating, Price)
Course Metadata
Section Heading (Pill + Heading + Subtitle)
Navbar (Brand, Nav Links, Actions, Mobile Drawer)
Footer (Columns, Brand, Copyright)
Category Card / Button
Testimonial Card
```

------------------------------------------------------------------------

# 6. Project Architecture

Use an architecture that is strictly organized, scalable, and maintainable.

``` text
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

This is a guideline, not a rigid requirement.

Avoid unnecessary folder nesting.

------------------------------------------------------------------------

# 7. Component Design Rules

## Rule 1 --- Build components around responsibility

Good:

``` text
CourseCard
CourseRating
CourseMeta
CourseSearch
CourseFilters
```

Avoid:

``` text
EverythingComponent
UniversalCard
UniversalSection
UniversalWrapper
```

## Rule 2 --- Reuse actual repeated structures

If the same course card appears six times:

``` tsx
{courses.map((course) => (
  <CourseCard key={course.id} course={course} />
))}
```

Do not duplicate six blocks of JSX.

## Rule 3 --- Don't over-abstract

Create a component when:

-   It is repeated.
-   It has a clear responsibility.
-   It contains meaningful behavior.
-   It makes the parent component easier to understand.

Do not create a component simply because a `<div>` exists.

------------------------------------------------------------------------

# 8. Data-Driven UI

Repeated UI should be represented as data.

Example:

``` ts
export interface Course {
  id: string;
  title: string;
  image: string;
  instructor: string;
  rating: number;
  price: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
}
```

Then:

``` ts
const courses: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    image: "/images/course-1.jpg",
    instructor: "PurePearl Studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
];
```

Render through reusable components.

Apply the same principle to:

-   Categories
-   Testimonials
-   Navigation links
-   Footer links
-   Creator benefits
-   Trusted logos

------------------------------------------------------------------------

# 9. TypeScript Rules

Avoid unnecessary `any`.

Bad:

``` ts
const course: any = data;
```

Better:

``` ts
interface Course {
  id: string;
  title: string;
  price: number;
  rating: number;
}
```

Use explicit props:

``` ts
interface CourseCardProps {
  course: Course;
}
```

Prefer:

-   Interfaces/types for domain data.
-   Union types for finite values.
-   Proper function parameter types.
-   Typed component props.
-   Typed API responses if APIs are used.

------------------------------------------------------------------------

# 10. Next.js Rules

Use Next.js intentionally.

## Server Components

Prefer server components for static UI where interactivity is
unnecessary.

Examples:

-   Footer
-   Static sections
-   Static course presentation
-   Marketing content

## Client Components

Use `"use client"` only when needed.

Examples:

-   Search interaction
-   Course filtering
-   Mobile menu
-   Interactive forms
-   UI state

Do not put `"use client"` on every component by default.

------------------------------------------------------------------------

# 11. Responsive Design

The design must work beyond the supplied desktop screenshots.

Test at least:

``` text
Mobile
Tablet
Desktop
Large Desktop
```

## Course grid

``` text
Desktop → 3 columns
Tablet  → 2 columns
Mobile  → 1 column
```

## Navbar

Desktop:

``` text
Logo | Home | Courses | Creators | Sign In | Join Us
```

Mobile:

``` text
Logo | Menu
```

## Hero

Desktop and mobile should be intentionally composed.

Do not simply shrink the desktop layout.

Consider:

-   Text wrapping
-   Image positioning
-   Decorative elements
-   Search width
-   Card positioning
-   Section height
-   Horizontal padding

------------------------------------------------------------------------

# 12. Accessibility

Use semantic HTML.

Prefer:

``` html
<nav>
<header>
<main>
<section>
<footer>
<button>
<form>
<label>
```

Avoid clickable `<div>` elements.

Images need meaningful `alt` text when informative.

Decorative images should not unnecessarily add noise to screen readers.

Forms should have accessible labels.

Maintain reasonable keyboard interaction.

Do not sacrifice accessibility simply to match a visual design.

------------------------------------------------------------------------

# 13. Images and Assets

Use the exact assets from the design when available.

Avoid replacing important Figma assets with random images.

For Next.js images:

``` tsx
<Image
  src="/images/course.jpg"
  alt="Course preview"
  width={500}
  height={300}
/>
```

Consider:

-   Correct dimensions
-   Appropriate quality
-   Lazy loading where appropriate
-   Avoiding huge source files
-   Correct object-fit behavior

Do not use enormous images when a smaller optimized asset is sufficient.

------------------------------------------------------------------------

# 14. Pixel-Perfect Implementation Process

Implement in this order:

## Phase 1 --- Global Foundation

1.  Project setup
2.  Fonts
3.  Colors
4.  Tailwind configuration
5.  Global styles
6.  Container system
7.  Typography system
8.  Buttons
9.  Inputs
10. Common badges

## Phase 2 --- Layout

1.  Navbar
2.  Footer
3.  Global page container
4.  Responsive breakpoints

## Phase 3 --- Home

1.  Hero
2.  Trusted logos
3.  Featured courses
4.  Categories
5.  Growth section
6.  Creator section
7.  Creator CTA
8.  Testimonials
9.  Footer

## Phase 4 --- Courses

1.  Header
2.  Search
3.  Filters
4.  Categories
5.  Course grid
6.  Course cards
7.  Responsive states

## Phase 5 --- Authentication

1.  Signup
2.  Login
3.  Form states
4.  Responsive layouts

------------------------------------------------------------------------

# 15. Figma Comparison Workflow

For every major section:

### Step A

Implement the section.

### Step B

Run the application.

### Step C

Capture a screenshot.

### Step D

Compare against Figma.

Check:

``` text
[ ] Width
[ ] Height
[ ] Position
[ ] Typography
[ ] Font weight
[ ] Spacing
[ ] Colors
[ ] Borders
[ ] Radius
[ ] Shadows
[ ] Images
[ ] Alignment
[ ] Responsive behavior
```

### Step E

Fix the differences.

### Step F

Repeat.

Do not move to the next major section while the current section is
substantially wrong.

------------------------------------------------------------------------

# 16. State Handling

If the assignment contains dynamic/API-driven UI, explicitly handle:

``` text
Loading
Success
Empty
Error
```

Example:

``` text
Loading
  ↓
Course Skeleton

Success
  ↓
Course Grid

Empty
  ↓
No courses found

Error
  ↓
Something went wrong
Retry
```

Avoid silently rendering nothing when data is missing.

------------------------------------------------------------------------

# 17. API Integration

If APIs are provided:

Create a clean separation between:

``` text
UI
↓
API/service layer
↓
Backend
```

Do not scatter fetch logic across many UI components.

For example:

``` text
lib/
└── api/
    └── courses.ts
```

The UI should consume a clean data interface.

Handle:

-   Request state
-   Loading
-   Error
-   Empty response
-   Successful response
-   Request cancellation where appropriate
-   Basic error messaging

If no backend/API is provided, do not create unnecessary infrastructure
merely to demonstrate it.

------------------------------------------------------------------------

# 18. Performance Checklist

Before submission:

``` text
[ ] Use optimized images
[ ] Avoid unnecessary client components
[ ] Avoid unnecessary useEffect
[ ] Avoid unnecessary state
[ ] Avoid duplicate data
[ ] Avoid huge JavaScript dependencies
[ ] Use Next/Image where appropriate
[ ] Check font loading
[ ] Check layout shifts
[ ] Check unnecessary re-renders
[ ] Check mobile performance
```

Run Lighthouse if practical.

Pay attention to:

-   Performance
-   Accessibility
-   Best Practices
-   SEO

------------------------------------------------------------------------

# 19. UI Engineering Rules

### Avoid magic numbers everywhere

Bad:

``` tsx
<div className="ml-[137px] mt-[83px]">
```

If the value is only there because of a mistake in layout, fix the
layout.

Custom pixel values are acceptable when they are genuinely required to
reproduce the Figma.

### Prefer layout systems

Use:

``` text
flex
grid
gap
padding
margin
max-width
container
```

before relying on excessive absolute positioning.

### Absolute positioning

Use it when the design genuinely requires layered elements.

The ByteSpace hero has decorative/layered elements, so absolute
positioning can be appropriate there.

Do not use absolute positioning to solve normal document-layout
problems.

------------------------------------------------------------------------

# 20. Authentication Screens

The design includes Login and Signup screens.

Even if authentication is not functional, implement the UI accurately.

Structure:

``` text
AuthLayout
├── Branding/Visual Panel
└── Auth Form
    ├── Heading
    ├── Inputs
    ├── Primary Button
    ├── Secondary Actions
    └── Social Login UI if present
```

If functionality is not required, do not implement fake authentication
logic.

------------------------------------------------------------------------

# 21. Course Cards

Course cards are one of the most important reusable components.

They should contain reusable substructures such as:

``` text
CourseCard
├── CourseImage
├── CourseMeta
├── CourseTitle
├── Instructor
├── Rating
├── LevelBadge
├── AvatarGroup
└── Price
```

The exact structure should follow the Figma.

The card should accept data rather than hardcoding content.

------------------------------------------------------------------------

# 22. Engineering Quality Checklist

Before considering a component complete:

``` text
[ ] Does it match Figma?
[ ] Is it responsive?
[ ] Is the component responsibility clear?
[ ] Can repeated content be data-driven?
[ ] Is TypeScript properly typed?
[ ] Is unnecessary state avoided?
[ ] Is accessibility reasonable?
[ ] Is the component reusable where appropriate?
[ ] Is the implementation maintainable?
[ ] Is the code readable?
```

------------------------------------------------------------------------

# 23. Git Workflow

Use meaningful commits.

Examples:

``` text
chore: initialize Next.js project
feat: add global typography and theme
feat: implement responsive navbar
feat: build hero section
feat: add reusable course card
feat: implement featured courses section
feat: add learning categories
feat: implement growth section
feat: add creator section
feat: implement testimonials
feat: build courses page
feat: add authentication screens
style: refine responsive spacing
perf: optimize image assets
fix: correct mobile navigation
```

Avoid:

``` text
update
fix
final
final-final
test
asdf
changes
```

------------------------------------------------------------------------

# 24. README Requirements

The repository README should include:

## Project Overview

What ByteSpace is.

## Features

List implemented frontend features.

## Tech Stack

``` text
Next.js
React
TypeScript
Tailwind CSS
```

## Project Structure

Explain the major folders.

## Getting Started

Installation and development commands.

## Environment Variables

Only if required.

## Screenshots

Show important implemented screens.

## Live Demo

Add the deployed URL.

## Notes

Mention any assumptions or limitations.

------------------------------------------------------------------------

# 25. AI-Assisted Development Rules

AI tools are allowed and explicitly mentioned in the job description.

Use AI to:

-   Research unfamiliar APIs
-   Debug errors
-   Explain browser behavior
-   Review code
-   Suggest refactoring
-   Generate repetitive boilerplate
-   Analyze performance problems
-   Help understand documentation

But do not blindly paste generated code.

For every AI-generated implementation:

``` text
Understand it
↓
Review it
↓
Adapt it
↓
Test it
↓
Refactor it
```

The final repository should look like code that **I understand and can
explain in an interview**.

------------------------------------------------------------------------

# 26. What NOT to Do

Avoid:

-   One huge page component
-   Excessive `"use client"`
-   `any` everywhere
-   Copy-pasted course cards
-   Hardcoded repeated UI
-   Random unnecessary dependencies
-   Over-engineered state management
-   Fake backend functionality
-   Excessive absolute positioning
-   Ignoring mobile
-   Ignoring accessibility
-   Huge unoptimized images
-   Unclear variable names
-   Dead code
-   Console errors
-   Unused imports
-   Meaningless Git commits
-   Copying AI output without understanding it

------------------------------------------------------------------------

# 27. Final Review --- Senior Engineer Checklist

Before submitting, review the project as if you were the reviewer.

## Visual

``` text
[ ] Figma match is highly accurate
[ ] Typography matches
[ ] Spacing matches
[ ] Colors match
[ ] Images match
[ ] Decorative elements match
[ ] Cards match
[ ] Navbar matches
[ ] Footer matches
```

## Responsive

``` text
[ ] Mobile
[ ] Tablet
[ ] Desktop
[ ] Large desktop
[ ] No horizontal overflow
[ ] Text does not break unexpectedly
[ ] Images scale correctly
```

## Code

``` text
[ ] Components have clear responsibilities
[ ] Repeated UI is reusable
[ ] Data is separated from presentation
[ ] TypeScript is properly used
[ ] No unnecessary any
[ ] No unnecessary state
[ ] No unnecessary effects
[ ] No dead code
[ ] No console errors
```

## Next.js

``` text
[ ] Server/client boundaries make sense
[ ] Images are optimized
[ ] Client components are justified
[ ] Routes are organized correctly
```

## Accessibility

``` text
[ ] Semantic HTML
[ ] Accessible buttons
[ ] Accessible inputs
[ ] Image alt text
[ ] Keyboard-friendly interaction
```

## Performance

``` text
[ ] Images optimized
[ ] Fonts optimized
[ ] No unnecessary dependencies
[ ] No obvious rendering problems
[ ] Lighthouse checked
```

## Git/GitHub

``` text
[ ] Clean commits
[ ] Good README
[ ] No secrets committed
[ ] No unnecessary files
[ ] .gitignore configured
[ ] Production build works
```

------------------------------------------------------------------------

# 28. Recommended Execution Order

Follow this exact sequence.

## Day/Phase 1 --- Analyze

``` text
Figma audit
↓
Identify pages
↓
Identify sections
↓
Identify reusable components
↓
Extract design tokens
↓
Collect assets
↓
Plan architecture
```

## Phase 2 --- Foundation

``` text
Initialize Next.js
↓
TypeScript
↓
Tailwind
↓
Fonts
↓
Colors
↓
Global styles
↓
Container
↓
Buttons / Inputs / Badges
```

## Phase 3 --- Layout

``` text
Navbar
↓
Footer
↓
Responsive foundation
```

## Phase 4 --- Home

``` text
Hero
↓
Trusted logos
↓
Featured courses
↓
Categories
↓
Growth
↓
Creator section
↓
Creator CTA
↓
Testimonials
```

## Phase 5 --- Courses

``` text
Search
↓
Filters
↓
Categories
↓
Course grid
↓
Reusable CourseCard
```

## Phase 6 --- Authentication

``` text
Signup
↓
Login
↓
Responsive refinement
```

## Phase 7 --- Engineering Review

``` text
TypeScript review
↓
Component review
↓
Accessibility review
↓
Performance review
↓
Responsive review
↓
Console/build review
```

## Phase 8 --- Pixel Review

``` text
Figma
↓
Screenshot
↓
Compare
↓
Fix
↓
Screenshot
↓
Compare again
```

## Phase 9 --- Submission

``` text
Production build
↓
Deploy
↓
README
↓
Git cleanup
↓
Final review
↓
Submit
```

------------------------------------------------------------------------

# 29. Final Definition of Done

The project is **DONE** only when:

> The UI is visually faithful to the Figma, responsive across major
> breakpoints, built from sensible reusable components, properly typed
> with TypeScript, uses Next.js appropriately, has reasonable
> accessibility and performance, contains no obvious console/build
> issues, and is presented in a professional GitHub repository.

The objective is not:

> "I finished the Figma."

The objective is:

> **"I demonstrated that I can engineer a production-quality frontend
> from a design specification."**

------------------------------------------------------------------------

# 30. Personal Rule for This Assignment

Whenever I am about to implement something, ask:

### 1. What does the Figma require?

### 2. What is the smallest clean component structure that solves it?

### 3. Can repeated UI be represented as data?

### 4. Does this need client-side JavaScript?

### 5. Is it responsive?

### 6. Is it accessible?

### 7. Is it performant?

### 8. Can I explain this code during an interview?

If the answer to all eight is yes, the implementation is probably on the
right engineering track.
