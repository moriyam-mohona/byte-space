import NextImage from "next/image";
import Link from "next/link";

export function CreatorBanner() {
  return (
    <section className="relative w-full bg-primary-800 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* ─── Geometric Grid Overlay (88px square grid) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "88px 88px",
        }}
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════════════════
          3D FLOATING ELEMENTS (Left & Right Flanks)
      ═══════════════════════════════════════════════════════════════ */}
      {/* 1. Top-Left: Lime Spiral */}
      <div className="pointer-events-none absolute -top-8 sm:-top-12 lg:-top-14 -left-6 sm:-left-10 lg:-left-12 w-28 sm:w-48 lg:w-60 z-10 animate-float-slow select-none">
        <NextImage
          src="/images/cta/top-left-lime-spiral.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      {/* 2. Top-Left: White Squiggle */}
      <div className="pointer-events-none absolute top-4 sm:top-6 lg:top-8 left-20 sm:left-36 lg:left-52 w-16 sm:w-28 lg:w-36 z-10 animate-float-subtle select-none">
        <NextImage
          src="/images/cta/top-left-white-squiggle.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* 3. Bottom-Left: White Cone */}
      <div className="pointer-events-none absolute bottom-6 sm:bottom-10 lg:bottom-12 -left-4 sm:-left-6 lg:-left-6 w-16 sm:w-28 lg:w-36 z-10 animate-float-reverse select-none">
        <NextImage
          src="/images/cta/bottom-left-white-cone.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* 4. Bottom-Left: Lime Ring / Donut */}
      <div className="pointer-events-none absolute -bottom-12 sm:-bottom-20 lg:-bottom-24 left-10 sm:left-20 lg:left-28 w-32 sm:w-52 lg:w-64 z-10 animate-float-slow select-none">
        <NextImage
          src="/images/cta/bottom-left-lime-ring-donut.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      {/* 5. Top-Right: Lime Pyramid */}
      <div className="pointer-events-none absolute top-4 sm:top-6 lg:top-8 right-20 sm:left-auto sm:right-36 lg:right-56 w-16 sm:w-28 lg:w-36 z-10 animate-float-subtle select-none">
        <NextImage
          src="/images/cta/top-right-lime-pyramid.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* 6. Top-Right: White Cylinder */}
      <div className="pointer-events-none absolute -top-6 sm:-top-10 lg:-top-12 -right-6 sm:-right-10 lg:-right-10 w-32 sm:w-52 lg:w-64 z-10 animate-float-slow select-none">
        <NextImage
          src="/images/cta/top-right-white-cylinder.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      {/* 7. Bottom-Right: Lime Spirals */}
      <div className="pointer-events-none absolute -bottom-8 sm:-bottom-12 lg:-bottom-14 right-6 sm:right-16 lg:right-24 w-32 sm:w-52 lg:w-64 z-10 animate-float-reverse select-none">
        <NextImage
          src="/images/cta/bottom-right-lime-spirals.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CENTERED HERO COPY & CALL-TO-ACTION
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
        <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950 text-white drop-shadow-sm">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="font-body text-body-m sm:text-body-l text-black-700 leading-relaxed max-w-170 mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="pt-2 sm:pt-3">
          <Link
            href="/register/creator"
            className="inline-flex items-center justify-center font-heading font-bold text-xs sm:text-sm bg-secondary text-neutral-950 px-7 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-md hover:bg-[#d8ff1a] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
