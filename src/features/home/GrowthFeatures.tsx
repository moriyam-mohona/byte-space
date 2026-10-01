import NextImage from "next/image";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { CourseCard } from "@/shared/components/CourseCard";
import { COURSES_DATA } from "@/data/courses";

const STUDENT_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
];

export function GrowthFeatures() {
  const checklist = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* ─── Ambient Figma Exact Radial Glows (Z-0 above white background, aligned to 1440px artboard) ─── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-full overflow-visible select-none z-0"
        aria-hidden="true"
      >
        {/* Ellipse 11: Top Left Lime Glow (1137x1137, Top: -466px, Left: -152px, Blur: 40px) */}
        {/* Ellipse 11: Top Left Lime Glow */}
        {/* Ellipse 11: Top Left Lime Glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "-466px",
            left: "-152px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(203, 252, 1, .4) 0%, rgba(203, 252, 1, 0.13) 35%, rgba(203, 252, 1, 0.06) 65%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Ellipse 9: Mid Left Blue Glow (1137x1137, Top: 183px, Left: -508px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1137px",
            height: "1137px",
            top: "183px",
            left: "-508px",
            background:
              "radial-gradient(circle, rgba(0, 59, 226, 0.25) 0%, rgba(0, 59, 226, 0.15) 40%, rgba(0, 59, 226, 0.04) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Ellipse 12: Bottom Left Lime Glow (672x672, Top: 846px, Left: -287px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "672px",
            height: "672px",
            top: "846px",
            left: "-287px",
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.23) 40%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Ellipse 8: Bottom Right Blue Glow (1137x1137, Top: 788px, Left: 722px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1137px",
            height: "1137px",
            top: "788px",
            left: "722px",
            background:
              "radial-gradient(circle, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.12) 40%, rgba(0, 59, 226, 0.03) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 container space-y-24 sm:space-y-10 lg:space-y-18">
        {/* ═══════════════════════════════════════════════════════════════
            BLOCK 1: Your Path to Professional Growth Starts Here!
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Stats (5 Cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-10">
              <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="font-body text-body-m sm:text-body-l text-black-700 leading-relaxed px-2 max-w-119.25">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
            </div>
            {/* 3 Stats Counters */}
            <div className="pt-2 flex items-center gap-10 sm:gap-14">
              <div>
                <div className="text-heading-s sm:text-display-xs text-primary-800">
                  12K
                </div>
                <div className="font-body text-body-xs sm:text-body-l text-neutral-700 font-medium mt-0.5">
                  Students
                </div>
              </div>

              <div>
                <div className="text-heading-s sm:text-display-xs text-primary-800">
                  70+
                </div>
                <div className="font-body text-body-xs sm:text-body-l text-neutral-700 font-medium mt-0.5">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-heading-s sm:text-display-xs text-primary-800">
                  16
                </div>
                <div className="font-body text-body-xs sm:text-body-l text-neutral-700 font-medium mt-0.5">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Student Guy (6 Cols) */}
          <div className="lg:col-span-6 relative w-full mx-auto py-6 sm:py-10 flex justify-center items-center">
            {/* 3D Floating Lime Zigzag behind student (Top-Right) */}
            <div className="absolute -top-2 sm:top-22 -right-2 sm:right-4 lg:-right-10 w-28 sm:w-36 lg:w-48 h-auto pointer-events-none select-none z-40 animate-float-slow">
              <NextImage
                src="/images/growth/zigzag-boy.png"
                alt=""
                width={531}
                height={774}
                className="w-full h-auto"
                aria-hidden="true"
              />
            </div>

            {/* Floating Mini Course Card (Top-Left, behind student) */}
            <div className="absolute top-0 sm:top-6 left-0 sm:-left-4 lg:left-6 z-10 animate-float-subtle origin-top-left w-[82%] sm:w-[78%] lg:w-[76%] max-w-[380px] pointer-events-none select-none">
              <CourseCard
                course={COURSES_DATA[0]}
                className="shadow-2xl border-neutral-100 rounded-3xl"
              />
            </div>

            {/* Central Student Portrait (z-20, overlapping course card) */}
            <div className="relative z-20 w-[85%] sm:w-[82%] lg:w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[577px] ml-auto translate-x-4 sm:translate-x-8 lg:translate-x-12 translate-y-4 pointer-events-none select-none">
              <NextImage
                src="/images/growth/laptop-guy.png"
                alt="Student smiling with laptop"
                width={1444}
                height={1030}
                priority
                className="block w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Learning Progress Card (Mid-Right, overlapping student) */}
            <div className="absolute top-[44%] sm:top-[32%] -right-2 sm:right-2 lg:-right-6 z-30 animate-float-slow origin-right scale-[0.8] sm:scale-95 lg:scale-100">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4 shadow-2xl border border-neutral-100/90 flex flex-col gap-1.5 sm:gap-2 min-w-[200px] sm:min-w-[240px] text-left">
                <span className="text-label-s text-neutral-950 font-body font-medium">
                  Learning Progress
                </span>
                <span className="text-4xl sm:text-5xl lg:text-heading-m font-bold text-neutral-950 leading-none">
                  55%
                </span>
                {/* Progress Bar track and fill */}
                <div className="w-full bg-neutral-100 h-2 sm:h-2.5 rounded-full overflow-hidden mt-1">
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
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            BLOCK 2: Create & Manage Courses Easily.
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Stage with Female Creator (7 Cols) */}
          <div className="order-2 lg:order-1 lg:col-span-6 relative flex justify-center items-center py-6 sm:py-10">
            {/* 3D Floating Lime Zigzag behind creator */}
            <div className="absolute top-10 sm:top-16 right-4 sm:right-12 lg:right-16 w-24 sm:w-36 lg:w-52 h-auto pointer-events-none select-none z-20 animate-float-reverse">
              <NextImage
                src="/images/growth/zigzag-girl.png"
                alt=""
                width={531}
                height={774}
                className="w-full h-auto"
                aria-hidden="true"
              />
            </div>

            {/* Central Female Creator Portrait */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px]">
              <NextImage
                src="/images/growth/laptop-girl.png"
                alt="Female creator smiling with headset and tablet"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Floating Card 1: Total Revenue (Top-Left, Blue) */}
            <div className="absolute top-2 sm:top-16 left-0 sm:left-4 lg:left-8 z-0 animate-float-subtle origin-top-left sm:scale-95 lg:scale-100">
              <div className="bg-primary-800 text-white rounded-2xl p-3 border border-primary-400/30 min-w-[160px] sm:min-w-[185px] text-left space-y-1">
                <div className="flex flex-col text-body-s text-white/80 font-medium">
                  <span>Total Revenue</span>
                  <span className="text-[10px] text-white/60">July 1-28</span>
                </div>
                <div className="font-heading text-xl sm:text-2xl tracking-tight text-white">
                  $120.29
                </div>
                <div className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-secondary h-full rounded-full w-[70%]" />
                </div>
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Mid-Left, Blue) */}
            <div className="absolute top-28 sm:top-46 left-0 sm:left-26 lg:left-10 z-0 animate-float-slow origin-left scale-[0.72] xs:scale-[0.82] sm:scale-95 lg:scale-100">
              <div className="bg-primary-800 text-white rounded-2xl p-3.5 sm:p-2.5 border border-primary-400/30 text-left space-y-1">
                <div className="flex flex-col text-body-xs text-white/80 font-medium">
                  <span className="text-body-s">Year to Date</span>
                  <span className="font-body text-body-xs text-white/60">
                    2023
                  </span>
                </div>
                <div className="text-xl sm:text-heading-xs tracking-tight text-white">
                  $1,200.38
                </div>
                <div className="pt-0.5">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-neutral-950 font-bold text-[10px]">
                    +12%
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Happy Students (Bottom-Right) */}
            <div className="absolute bottom-2 sm:bottom-48 right-0 sm:right-4 lg:right-8 z-20 animate-float-reverse origin-bottom-right scale-[0.72] xs:scale-[0.82] sm:scale-95 lg:scale-100">
              <div className="bg-white rounded-2xl p-3.5 sm:p-3 shadow-2xl border border-neutral-100 flex flex-col gap-2 min-w-50 sm:min-w-60 text-left">
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

          {/* Right Column: Copy & Checklist (5 Cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950">
                Create & Manage Courses Easily.
              </h2>
              <p className="font-body text-body-m sm:text-body-l text-black-700 leading-relaxed max-w-119.25">
                <b>ByteSpace</b> supports individuals or entities in the
                creation, publication, and administration of educational
                courses.
              </p>
            </div>

            {/* Checklist items */}
            <ul className="space-y-3.5 sm:space-y-4" role="list">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {/* Blue Circular Checkmark Icon */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-800 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg
                      className="w-3 h-3 sm:w-4.5 sm:h-4.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-body text-label-m sm:text-label-l text-neutral-950">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
