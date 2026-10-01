import NextImage from "next/image";
import Link from "next/link";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { CourseCard } from "@/shared/components/CourseCard";
import { COURSES_DATA } from "@/data/courses";
import { STUDENT_AVATARS } from "@/data/avatars";
import { Course } from "@/types/course";

const DEFAULT_BUILD_DIGITAL_ASSET: Course =
  COURSES_DATA.find((c) => c.slug === "build-digital-asset") ?? COURSES_DATA[1];

const DEFAULT_BIG_DATA: Course =
  COURSES_DATA.find((c) => c.slug === "the-power-of-big-data") ?? COURSES_DATA[2];

interface AuthVisualStageProps {
  title: string;
  subtitle: string;
  backgroundCourse?: Course;
  featuredCourse?: Course;
}

export function AuthVisualStage({
  title,
  subtitle,
  backgroundCourse = DEFAULT_BUILD_DIGITAL_ASSET,
  featuredCourse = DEFAULT_BIG_DATA,
}: AuthVisualStageProps) {
  return (
    <div className="flex flex-col items-start justify-between h-full space-y-8 sm:space-y-10 lg:space-y-12">
      {/* ─── Top Branding: Lime "b" Mark & Headings ─── */}
      <div className="space-y-5 sm:space-y-8 w-full">
        <Link
          href="/"
          className="inline-block transition-transform hover:scale-105"
        >
          <NextImage
            src="/icons/logo-mark.svg"
            alt="ByteSpace"
            width={38}
            height={42}
            className="w-8 sm:w-9 h-auto"
            priority
          />
        </Link>

        <div className="space-y-2.5 sm:space-y-3 max-w-118.75">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-heading-xs text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="font-body text-white/80 text-body-m sm:text-body-l leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ─── Layered Interactive Course Showcase with 3D Shapes ─── */}
      <div className="relative w-full max-w-[340px] sm:max-w-120 lg:max-w-125 mx-auto lg:mx-0 pt-4 sm:pt-6 pb-16 sm:pb-24">
        {/* 3D Floating Lime Ring / Donut (Top-Left, overlapping top-left of foreground card) */}
        <div className="pointer-events-none absolute -top-6 sm:top-8 left-2 sm:-left-4 w-20 sm:w-36 lg:w-40 z-20 animate-float-slow select-none">
          <NextImage
            src="/images/auth/lime-floating-lime-ring.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-2xl"
            aria-hidden="true"
          />
        </div>

        {/* 3D Floating Lime Pyramid (Bottom-Left, overlapping bottom-left of background card) */}
        <div className="pointer-events-none absolute -bottom-6 sm:-bottom-24 lg:-bottom-28 -left-3 sm:-left-8 lg:-left-10 w-24 sm:w-40 lg:w-48 z-20 animate-float-subtle select-none">
          <NextImage
            src="/images/auth/lime-floating-lime-pyramid.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-2xl"
            aria-hidden="true"
          />
        </div>

        {/* 3D Floating White Squiggle (Bottom-Right, floating above the Happy Students card) */}
        <div className="pointer-events-none absolute -bottom-2 sm:-bottom-6 -right-2 sm:-right-10 lg:-right-14 w-20 sm:w-36 lg:w-48 z-30 animate-float-reverse select-none">
          <NextImage
            src="/images/auth/floating-white-squiggle.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-xl"
            aria-hidden="true"
          />
        </div>

        {/* ── Background Peeking Card: Build Digital Assets (Shifted left and downwards) ── */}
        <div className="absolute top-16 sm:top-24 lg:top-28 -left-4 sm:-left-8 lg:-left-12 z-0 w-[82%] sm:w-[84%] select-none pointer-events-none">
          <CourseCard
            course={backgroundCourse}
            className="shadow-xl border-neutral-100/90 rounded-2xl sm:rounded-3xl"
          />
        </div>

        {/* ── Main Foreground Card: the Power of Big Data (Top-Right) ── */}
        <div className="relative z-10 ml-auto w-[84%] sm:w-[86%]">
          <CourseCard
            course={featuredCourse}
            priority={true}
            className="shadow-2xl border-neutral-100/90 rounded-2xl sm:rounded-3xl"
          />
        </div>

        {/* ── Lime Floating Card: Happy Students (Bottom-Right) ── */}
        <div className="absolute -bottom-6 sm:-bottom-16 lg:-bottom-20 right-0 sm:right-10 lg:right-14 z-20 animate-float-slow origin-bottom-right">
          <div className="bg-secondary text-neutral-950 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-2xl border border-secondary-400/50 min-w-[190px] sm:min-w-[240px] lg:min-w-[260px] text-left">
            <div className="space-y-0.5 sm:space-y-1">
              <h4 className="font-body font-bold text-label-xs sm:text-label-s lg:text-label-m text-neutral-950">
                Happy Students
              </h4>
              <div className="flex font-body items-center gap-1.5 text-label-xs font-semibold text-neutral-950">
                <span className="font-bold">4.5</span>
                <span className="text-neutral-950 font-normal">(240)</span>
                <span className="text-primary-800 font-bold text-xs sm:text-sm">
                  ★
                </span>
              </div>
            </div>
            <div className="mt-2 sm:mt-3">
              <AvatarGroup
                avatars={STUDENT_AVATARS}
                badgeText="2K+"
                size={28}
                badgeClassName="bg-neutral-900 text-white font-bold text-[10px] sm:text-[11px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
