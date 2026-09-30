# ByteSpace

A modern e-learning marketplace platform built with Next.js, React, TypeScript, and Tailwind CSS.

---

## Features

- **Responsive Marketplace Interface**: Tailored desktop, tablet, and mobile layouts with fluid typography and zero unwanted scrollbars.
- **Hero & Course Discovery**: Search with category filter dropdown, live stats, and 3D floating elements.
- **Interactive Category Filtering**: 3-row pill filter system and mobile peeking carousel with touch swipe navigation.
- **Dual-Block Growth Features**: Professional growth and course creation showcase with exact 4-layer Figma ambient radial glows.
- **3D Creator CTA Banner**: Full-width electric royal blue geometric grid banner with 7 floating clay objects.
- **Community Testimonials**: Review cards matching Figma typography and ambient gradient specs.
- **Authentication**: Dedicated Sign In (`/login`) and Sign Up (`/signup`) screens with interactive 3D course card composition and social logins.
- **Custom 404 Page**: Full-screen branded not found page with lime gradient backdrop and home navigation.
- **Design System Showcase**: Verification page at `/design-system` for tokens, colors, and typography.
- **Figma Pixel-Accurate Implementation**: Precise font scales (Poppins headings + Satoshi body/labels), exact color codes, and layer blurs.

---

## Tech Stack

- **Next.js** (v16.x App Router)
- **React** (v19.x)
- **TypeScript** (Strict Mode)
- **Tailwind CSS** (v4.x)
- **clsx** & **tailwind-merge**
- **ESLint**

---

## Project Structure

```text
byte-space/
├── public/
│   ├── icons/            # SVG logos, cart, search, learning paths
│   └── images/           # 3D assets, course previews, user avatars
│       ├── auth/         # 3D floating auth shapes
│       ├── avatars/      # Learner & instructor avatars
│       ├── courses/      # Course preview cards
│       ├── cta/          # 3D floating banner shapes
│       └── hero/         # Hero student & 3D clay shapes
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Authentication route group
│   │   │   ├── login/    # /login page
│   │   │   └── signup/   # /signup page
│   │   ├── (site)/       # Public site route group
│   │   │   └── page.tsx  # Landing page (Home)
│   │   ├── design-system/# Token verification page
│   │   ├── globals.css   # Single source of truth for tokens
│   │   ├── layout.tsx    # Root HTML shell & fonts
│   │   └── not-found.tsx # Custom 404 page
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, MobileMenu
│   │   └── ui/           # Generic primitives (AvatarGroup, etc.)
│   ├── features/
│   │   ├── auth/         # AuthVisualStage, LoginForm, SignupForm
│   │   └── home/         # Hero, FeaturedCourses, GrowthFeatures, CreatorBanner, Testimonials
│   ├── types/            # Strict TypeScript definitions (Course, Testimonial, Common)
│   └── lib/              # Utilities (cn class merger)
├── GUIDELINE.md          # Architectural guidelines
├── RULEBOOK.md           # Non-negotiable repository rules
├── SETUP.md              # Setup guide & token reference
└── README.md             # Project documentation
```

---

## Getting Started

### Prerequisites

- **Node.js**: `20.x` or higher
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/moriyam-mohona/byte-space.git
   cd byte-space
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

---

## Available Scripts

```bash
npm run dev      # Start development server with hot-reloading
npm run build    # Create optimized production build
npm run start    # Start production server
npm run lint     # Run ESLint validation
npx tsc --noEmit # Run strict TypeScript type check
```

---

## Git Workflow

Development was organized using structured feature branches and pull requests:

```text
main
├── reusable-foundation   # Design system, tokens, and core layout primitives
├── home-page             # Hero, Featured Courses, Growth Features, Creator CTA, Testimonials
├── auth                  # Login and Sign Up pages with 3D showcase
└── not-found             # Custom 404 error page
```

Features were developed on separate branches and merged into `main` through pull requests.

---

## Deployment

The project is deployed on Vercel.

- **Live Production URL**: [ByteSpace on Vercel](https://byte-space-woad.vercel.app)
