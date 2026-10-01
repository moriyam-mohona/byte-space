import NextImage from "next/image";
import Link from "next/link";

export function CreatorBanner() {
  return (
    <section className="relative w-full bg-primary-800 bg-hero-grid text-white py-28 xl:py-24 overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          3D FLOATING ELEMENTS (Left & Right Flanks)
      ═══════════════════════════════════════════════════════════════ */}
      {/* 1. Top-Left: Lime Spiral */}
      <div className="pointer-events-none absolute top-0 left-0 w-28 sm:w-48 lg:w-62 z-10 animate-float-slow select-none">
        <NextImage
          src="/images/cta/top-left-lime-spiral.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      {/* 2. Top-Left: White Squiggle */}
      <div className="pointer-events-none absolute top-4 sm:top-6 xl:top-8 left-20 sm:left-26 xl:left-52 w-28 xl:w-46 z-10 animate-float-subtle select-none">
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
      <div className="pointer-events-none absolute bottom-6 sm:bottom-10 lg:bottom-28 left-0 w-24 sm:w-28 xl:w-36 z-10 animate-float-reverse select-none">
        <NextImage
          src="/images/cta/bottom-left-white-cone.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* 4. Bottom-Left: Lime Donut */}
      <div className="pointer-events-none absolute -bottom-6 left-0 sm:left-10 xl:left-8 w-52 sm:w-74 xl:w-86 z-10 animate-float-slow select-none">
        <NextImage
          src="/images/cta/bottom-left-lime-ring-donut.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      {/* 5. Top-Right: Lime Pyramid */}
      <div className="pointer-events-none absolute top-4 sm:top-6 lg:top-2 right-20 sm:left-auto sm:right-20 xl:right-46 w-20 sm:w-32 xl:w-46 z-10 animate-float-subtle select-none">
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
      <div className="pointer-events-none absolute top-0 right-0 w-20 sm:w-32 xl:w-58 z-10 animate-float-slow select-none">
        <NextImage
          src="/images/cta/top-right-white-cylinder.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      {/* 7. Bottom-Right: Lime Spirals */}
      <div className="pointer-events-none absolute bottom-0 -right-6 sm:right-16 lg:right-4 w-52 lg:w-80 z-10 animate-float-reverse select-none">
        <NextImage
          src="/images/cta/bottom-right-lime-spirals.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CENTERED HERO COPY & CALL-TO-ACTION
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 max-w-280 mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
        <h2 className="font-heading text-3xl lg:text-heading-m text-white drop-shadow-sm">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="font-body text-body-m sm:text-body-l leading-relaxed max-w-280 mx-auto">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="pt-2 sm:pt-3">
          <Link
            href="/register/creator"
            className="inline-flex items-center justify-center font-heading text-label-m sm:text-label-l bg-secondary text-neutral-950 px-6 py-3 rounded-full shadow-md hover:bg-[#d8ff1a] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
