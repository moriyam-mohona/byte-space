import Image from "next/image";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { STUDENT_AVATARS } from "@/data/avatars";
import { HeroSearchBar } from "./HeroSearchBar";

export function Hero() {
  return (
    <section className="relative w-full bg-primary-800 bg-hero-grid overflow-hidden pt-46 sm:pt-32 lg:pt-36 pb-0">
      {/* ─── 3D Floating Shapes: Left Side ─── */}
      <>
        {/* Top-Left Lime Zigzag (bleeds partially off the top-left edge) */}
        <div className="absolute top-16 md:top-32 lg:top-46 left-0 w-40 md:w-32 xl:w-64 h-auto pointer-events-none select-none z-10 animate-float-slow">
          <Image
            src="/images/hero/lime-zigzag.png"
            alt=""
            width={531}
            height={774}
            priority
            className="w-full h-auto drop-shadow-xl"
            aria-hidden="true"
          />
        </div>

        {/* Mid-Left White Small Zigzag (tilted floating squiggle) */}
        <div className="absolute w-24 sm:w-20 md:w-24 lg:w-32 xl:w-40 top-18 sm:-top-10 md:top-88  lg:top-100 xl:top-96 left-26 xl:left-48 pointer-events-none select-none z-10 animate-float-reverse rotate-12 ">
          <Image
            src="/images/hero/whiye-small-zigzag.png"
            alt=""
            width={354}
            height={352}
            priority
            className="w-full h-auto drop-shadow-md"
            aria-hidden="true"
          />
        </div>

        {/* Bottom-Left White Donut / Torus (BIGGER, tilted ~35deg, right edge close to lime arc) */}
        <div className="absolute -left-6 sm:left-20 md:-left-8 lg:-left-14 xl:left-4 2xl:left-64 w-40 sm:w-56 md:w-64 xl:w-72 bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-4 xl:-bottom-4 2xl:bottom-4  pointer-events-none select-none z-20 animate-float-zoom rotate-12">
          <Image
            src="/images/hero/white-donut.png"
            alt=""
            width={688}
            height={686}
            priority
            className="w-full h-auto drop-shadow-2xl"
            aria-hidden="true"
          />
        </div>

        {/* ─── 3D Floating Shapes: Right Side ─── */}
        {/* Top-Right Lime Cylinder (bleeds partially off the top-right edge) */}
        <div className="absolute top-8 sm:top-12 xl:top-36 right-0 w-30 sm:w-26 lg:w-40 xl:w-48 h-auto pointer-events-none select-none z-10 animate-float-slow">
          <Image
            src="/images/hero/lime-cylinder.png"
            alt=""
            width={426}
            height={744}
            priority
            className="w-full h-auto drop-shadow-xl"
            aria-hidden="true"
          />
        </div>

        {/* Mid-Right White Pyramid */}
        <div className="absolute top-50 sm:top-72 lg:top-96 -right-5 sm:right-2 lg:right-42 w-24 sm:w-32 lg:w-44 h-auto pointer-events-none select-none z-10 animate-float-subtle">
          <Image
            src="/images/hero/white-pyramid.png"
            alt=""
            width={380}
            height={378}
            priority
            className="w-full h-auto drop-shadow-md"
            aria-hidden="true"
          />
        </div>

        {/* Bottom-Right White Large Zigzag / Spring Coil (BIGGER, close to right side of lime arc) */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 -right-6 sm:right-6 lg:right-6 w-40 sm:w-48 lg:w-75 h-auto pointer-events-none select-none z-20 animate-float-reverse ">
          <Image
            src="/images/hero/white-large-zigzag.png"
            alt=""
            width={633}
            height={664}
            priority
            className="w-full h-auto drop-shadow-2xl"
            aria-hidden="true"
          />
        </div>
      </>
      {/* ─── Center Hero Content (Headline, Subtitle, Search) ─── */}
      <div className="container relative z-30 flex flex-col items-center text-center px-4 sm:px-8">
        {/* Main Headline */}
        <h1 className="font-heading text-4xl sm:text-heading-m xl:text-heading-l text-white tracking-tight max-w-4xl xl:max-w-6xl text-balance">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="max-w-xs md:max-w-full font-body text-body-m sm:text-body-l text-neutral-100 mt-4 sm:mt-8 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* ─── Extracted Client Search Bar ─── */}
        <HeroSearchBar />
      </div>

      {/* ─── Hero Stage: Giant Lime Arc, Student & 3 Floating Cards ─── */}
      <div className="relative mt-24 lg:mt-32 xl:mt-20 w-full container mx-auto flex justify-center items-end px-2 sm:px-6">
        {/* Lime Background Crescent Arc (Scaled up to 1150px max width) */}
        <div className="relative w-full max-w-287.25 flex justify-center items-end">
          <Image
            src="/images/hero/lime-arc.svg"
            alt=""
            width={1149}
            height={442}
            priority
            className="w-full h-auto object-contain pointer-events-none select-none translate-y-1"
            aria-hidden="true"
          />

          {/* Central Student with Laptop (Grounded at bottom, head reaching above the arc) */}
          <div className="absolute bottom-0 w-[82%] sm:w-[70%] max-w-175 flex justify-center z-10 pointer-events-none select-none">
            <Image
              src="/images/hero/laptop-guy.png"
              alt="Student smiling with headphones and laptop learning on ByteSpace"
              width={1444}
              height={1030}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* ── Floating Card 1: UI/UX Design (Left of student's ear, partly on lime arc) ── */}
          <div className="absolute top-[2%] sm:top-[12%] lg:top-[15%] left-[-2%] sm:left-[8%] lg:left-[18%] z-20 animate-float-subtle origin-left scale-[0.65] sm:scale-[0.85] lg:scale-100">
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-neutral-100 flex flex-col gap-1 min-w-[170px] sm:min-w-[210px] text-left">
              <h4 className="text-label-m font-body text-neutral-950">
                UI/UX Design
              </h4>
              <p className="text-body-xs text-neutral-400 font-body">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>

          {/* ── Floating Card 2: Learning Progress (Right of student's head, on lime arc) ── */}
          <div className="absolute top-[12%] sm:top-[16%] lg:top-[18%] right-[2%] sm:right-[6%] lg:right-[20%] z-20 animate-float-slow origin-right scale-[0.65] sm:scale-[0.85] lg:scale-100">
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-neutral-100 flex flex-col gap-1.5 sm:gap-2 min-w-[175px] sm:min-w-[232px] text-left">
              <span className="text-label-s text-neutral-950 font-body">
                Learning Progress
              </span>
              <span className="text-heading-m text-neutral-950 leading-none">
                55%
              </span>
              {/* Progress Bar track and fill */}
              <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-secondary h-full rounded-full transition-all duration-1000 w-[55%]"
                  role="progressbar"
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>

          {/* ── Floating Card 3: Happy Students (Bottom-Left of student, overlapping arc border) ── */}
          <div className="absolute bottom-[6%] sm:bottom-[10%] lg:bottom-[14%] left-[-4%] sm:left-[10%] lg:left-[16%] z-20 animate-float-reverse origin-bottom-left scale-[0.65] sm:scale-[0.85] lg:scale-100">
            <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-2xl border border-neutral-100 flex flex-col gap-2 min-w-50 sm:min-w-60 text-left">
              <div className="flex flex-col">
                <h4 className="text-label-m font-body text-neutral-950">
                  Happy Students
                </h4>
                <div className="flex items-center gap-1 text-body-xs font-body">
                  <span className="text-neutral-800">4.5</span>
                  <span className="text-neutral-400 font-normal">(240)</span>
                  <span className="text-secondary-400 text-xl">★</span>
                </div>
              </div>
              <AvatarGroup
                avatars={STUDENT_AVATARS}
                badgeText="2K+"
                size={36}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
