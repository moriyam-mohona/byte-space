import NextImage from "next/image";
import Link from "next/link";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { CourseCard } from "@/shared/components/CourseCard";
import { COURSES_DATA } from "@/data/courses";
import { Course } from "@/types/course";

const STUDENT_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

const DEFAULT_BUILD_DIGITAL_ASSET: Course = COURSES_DATA[1] ?? {
  id: "2",
  slug: "build-digital-asset",
  title: "Build Digital Asset",
  description:
    "Learn how to conceptualize, design, and monetize digital products and design systems.",
  image: "/images/courses/course-digital-assets.jpg",
  instructor: {
    name: "purepearl studio",
    avatar: "/images/avatars/avatar-2.jpg",
    role: "Design Systems Lead",
  },
  rating: 4.5,
  reviewsCount: 59,
  commentsCount: 59,
  price: 25,
  billingPeriod: "lifetime",
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  category: "Graphic Design",
  enrolledCountBadge: "26+",
  enrolledAvatars: STUDENT_AVATARS,
};

const DEFAULT_BIG_DATA: Course = COURSES_DATA[2] ?? {
  id: "3",
  slug: "the-power-of-big-data",
  title: "the Power of Big Data",
  description:
    "Harness the power of data analytics, cloud pipelines, and visualization architectures.",
  image: "/images/courses/course-big-data.jpg",
  instructor: {
    name: "purepearl studio",
    avatar: "/images/avatars/avatar-3.jpg",
    role: "Data Architect",
  },
  rating: 4.5,
  reviewsCount: 59,
  commentsCount: 59,
  price: 25,
  billingPeriod: "lifetime",
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  category: "Data Science",
  enrolledCountBadge: "26+",
  enrolledAvatars: STUDENT_AVATARS,
};

const HAPPY_STUDENTS_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
  "/images/avatars/avatar-james.jpg",
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
];

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
    <div className="flex flex-col items-start justify-between h-full space-y-10 lg:space-y-12">
      {/* ─── Top Branding: Lime "b" Mark & Headings ─── */}
      <div className="space-y-6 sm:space-y-8">
        <Link
          href="/"
          className="inline-block transition-transform hover:scale-105"
        >
          <NextImage
            src="/icons/logo-mark.svg"
            alt="ByteSpace"
            width={38}
            height={42}
            className="w-9 h-auto"
            priority
          />
        </Link>

        <div className="space-y-3 max-w-118.75">
          <h1 className="font-heading font-bold text-heading-xs sm:text-heading-xs text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="font-body text-white/80 text-body-l sm:text-body-l leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ─── Layered Interactive Course Showcase with 3D Shapes ─── */}
      <div className="relative w-full max-w-120 lg:max-w-125 mx-auto lg:mx-0 pt-6 pb-20 sm:pb-24">
        {/* 3D Floating Lime Ring / Donut (Top-Left, overlapping top-left of foreground card) */}
        <div className="pointer-events-none absolute -top-8 sm:top-8 left-10 sm:-left-4 w-28 sm:w-40 z-20 animate-float-slow select-none">
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
        <div className="pointer-events-none absolute -bottom-10 sm:-bottom-28 -left-6 sm:-left-10 w-32 sm:w-48 z-20 animate-float-subtle select-none">
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
        <div className="pointer-events-none absolute -bottom-2 sm:-bottom-6 -right-4 sm:-right-14 w-24 sm:w-48 z-30 animate-float-reverse select-none">
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
        <div className="absolute top-24 sm:top-28 -left-8 sm:-left-12 z-0 w-[82%] sm:w-[84%] select-none pointer-events-none">
          <CourseCard
            course={backgroundCourse}
            className="shadow-xl border-neutral-100/90 rounded-3xl"
          />
        </div>

        {/* ── Main Foreground Card: the Power of Big Data (Top-Right) ── */}
        <div className="relative z-10 ml-auto w-[84%] sm:w-[86%]">
          <CourseCard
            course={featuredCourse}
            priority={true}
            className="shadow-2xl border-neutral-100/90 rounded-3xl"
          />
        </div>

        {/* ── Lime Floating Card: Happy Students (Bottom-Right) ── */}
        <div className="absolute -bottom-8 sm:-bottom-20 right-0 sm:right-14 z-20 animate-float-slow origin-bottom-right">
          <div className="bg-secondary text-neutral-950 rounded-2xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl border border-secondary-400/50 min-w-[220px] sm:min-w-[260px] text-left">
            <div className="space-y-1">
              <h4 className="font-body font-bold text-label-s sm:text-label-m text-neutral-950">
                Happy Students
              </h4>
              <div className="flex font-body items-center gap-1.5 text-label-xs font-semibold text-neutral-950">
                <span className="font-bold">4.5</span>
                <span className="text-neutral-950 font-normal">(240)</span>
                <span className="text-primary-800 font-bold text-sm">★</span>
              </div>
            </div>
            <div className="mt-3">
              <AvatarGroup
                avatars={HAPPY_STUDENTS_AVATARS}
                badgeText="2K+"
                size={32}
                badgeClassName="bg-neutral-900 text-white font-bold text-[11px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
