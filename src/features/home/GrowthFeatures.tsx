import NextImage from "next/image";
import { AvatarGroup } from "@/components/ui/AvatarGroup";

const STUDENT_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
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
      {/* ─── Ambient Figma Exact Radial Glows (Z-0 above white background, behind Z-10 content) ─── */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        {/* Ellipse 11: Top Left Lime Glow (1137x1137, Top: -466px, Left: -152px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1137px",
            height: "1137px",
            top: "-466px",
            left: "-152px",
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.23) 40%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
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

      <div className="relative z-10 container space-y-24 sm:space-y-32 lg:space-y-40">
        {/* ═══════════════════════════════════════════════════════════════
            BLOCK 1: Your Path to Professional Growth Starts Here!
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Stats (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-heading-m text-neutral-950 tracking-tight leading-tight">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="font-body text-body-s sm:text-body-m text-neutral-600 leading-relaxed">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
            </div>

            {/* 3 Stats Counters */}
            <div className="pt-2 flex items-center gap-10 sm:gap-14 border-t border-neutral-100">
              <div>
                <div className="text-heading-s sm:text-heading-m font-bold text-primary tracking-tight">
                  12K
                </div>
                <div className="font-body text-body-xs sm:text-body-s text-neutral-500 font-medium mt-0.5">
                  Students
                </div>
              </div>

              <div>
                <div className="text-heading-s sm:text-heading-m font-bold text-primary tracking-tight">
                  70+
                </div>
                <div className="font-body text-body-xs sm:text-body-s text-neutral-500 font-medium mt-0.5">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-heading-s sm:text-heading-m font-bold text-primary tracking-tight">
                  16
                </div>
                <div className="font-body text-body-xs sm:text-body-s text-neutral-500 font-medium mt-0.5">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Student Guy (7 Cols) */}
          <div className="lg:col-span-7 relative flex justify-center items-center py-6 sm:py-10">
            {/* 3D Floating Lime Zigzag behind student */}
            <div className="absolute top-4 sm:top-8 right-6 sm:right-16 w-24 sm:w-36 lg:w-44 h-auto pointer-events-none select-none z-0 animate-float-slow opacity-90">
              <NextImage
                src="/images/hero/lime-zigzag.png"
                alt=""
                width={531}
                height={774}
                className="w-full h-auto drop-shadow-xl"
                aria-hidden="true"
              />
            </div>

            {/* Central Student Portrait */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[460px]">
              <NextImage
                src="/images/hero/laptop-guy               .png"
                alt="Student smiling with laptop"
                width={1444}
                height={1030}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating Mini Course Card (Top-Left) */}
            <div className="absolute top-0 sm:top-4 left-0 sm:left-4 lg:left-8 z-20 animate-float-subtle origin-top-left scale-[0.7] xs:scale-[0.82] sm:scale-95 lg:scale-100">
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-neutral-100/90 w-[200px] sm:w-[220px] text-left space-y-2">
                <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-neutral-100">
                  <NextImage
                    src="/images/courses/course-figma.jpg"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-1.5 bottom-1.5 flex items-center justify-between text-[9px] font-medium text-neutral-800">
                    <span className="px-1.5 py-0.5 rounded-full bg-white/85 backdrop-blur-xs shadow-xs">
                      17 Lessons
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-white/85 backdrop-blur-xs shadow-xs">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-label-s text-neutral-950 truncate">
                    Learn Figma from Basic
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    by{" "}
                    <span className="text-primary font-medium">
                      purepearl studio
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
                  <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-[10px] font-medium text-neutral-600">
                    Beginner
                  </span>
                  <span className="font-heading font-bold text-label-s text-primary">
                    $25
                    <span className="text-[10px] text-neutral-400 font-normal">
                      /lifetime
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Learning Progress Card (Mid-Right) */}
            <div className="absolute bottom-12 sm:bottom-20 right-0 sm:right-4 lg:right-8 z-20 animate-float-slow origin-bottom-right scale-[0.72] xs:scale-[0.85] sm:scale-95 lg:scale-100">
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-neutral-100/90 min-w-[160px] sm:min-w-[190px] text-left space-y-1.5">
                <span className="font-body text-[11px] text-neutral-500 font-medium">
                  Learning Progress
                </span>
                <div className="text-heading-s font-bold text-neutral-950 leading-none">
                  55%
                </div>
                <div className="w-full bg-neutral-200 h-2 sm:h-2.5 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-secondary h-full rounded-full w-[55%]"
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
          <div className="order-2 lg:order-1 lg:col-span-7 relative flex justify-center items-center py-6 sm:py-10">
            {/* 3D Floating Lime Zigzag behind creator */}
            <div className="absolute top-10 sm:top-16 right-4 sm:right-12 lg:right-16 w-24 sm:w-36 lg:w-44 h-auto pointer-events-none select-none z-0 animate-float-reverse opacity-90">
              <NextImage
                src="/images/hero/lime-zigzag.png"
                alt=""
                width={531}
                height={774}
                className="w-full h-auto drop-shadow-xl"
                aria-hidden="true"
              />
            </div>

            {/* Central Female Creator Portrait */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px]">
              <NextImage
                src="/images/laptop-girl.png"
                alt="Female creator smiling with headset and tablet"
                width={600}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating Card 1: Total Revenue (Top-Left, Blue) */}
            <div className="absolute top-2 sm:top-6 left-0 sm:left-4 lg:left-8 z-20 animate-float-subtle origin-top-left scale-[0.72] xs:scale-[0.82] sm:scale-95 lg:scale-100">
              <div className="bg-primary text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-primary-400/30 min-w-[160px] sm:min-w-[185px] text-left space-y-1">
                <div className="flex items-center justify-between text-[11px] text-white/80 font-medium">
                  <span>Total Revenue</span>
                  <span className="text-[10px] text-white/60">July 1-28</span>
                </div>
                <div className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white">
                  $120.29
                </div>
                <div className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-secondary h-full rounded-full w-[70%]" />
                </div>
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Mid-Left, Blue) */}
            <div className="absolute top-28 sm:top-36 left-0 sm:left-2 lg:left-6 z-20 animate-float-slow origin-left scale-[0.72] xs:scale-[0.82] sm:scale-95 lg:scale-100">
              <div className="bg-primary text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-primary-400/30 min-w-[160px] sm:min-w-[185px] text-left space-y-1">
                <div className="flex items-center justify-between text-[11px] text-white/80 font-medium">
                  <span>Year to Date</span>
                  <span className="text-[10px] text-white/60">2023</span>
                </div>
                <div className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white">
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
            <div className="absolute bottom-2 sm:bottom-8 right-0 sm:right-4 lg:right-8 z-20 animate-float-reverse origin-bottom-right scale-[0.72] xs:scale-[0.82] sm:scale-95 lg:scale-100">
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-neutral-100/90 min-w-[180px] sm:min-w-[210px] text-left space-y-1.5">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-heading font-bold text-label-s text-neutral-950">
                    Happy Students
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-800">
                    <span>4.5</span>
                    <span className="text-neutral-400 font-normal">(240)</span>
                    <span className="text-amber-400">★</span>
                  </div>
                </div>
                <AvatarGroup
                  avatars={STUDENT_AVATARS}
                  badgeText="2K+"
                  size={24}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist (5 Cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-heading-m text-neutral-950 tracking-tight leading-tight">
                Create & Manage Courses Easily.
              </h2>
              <p className="font-body text-body-s sm:text-body-m text-neutral-600 leading-relaxed">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
            </div>

            {/* Checklist items */}
            <ul className="space-y-3.5 sm:space-y-4" role="list">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {/* Blue Circular Checkmark Icon */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
                  <span className="font-heading font-semibold text-label-m sm:text-label-l text-neutral-900">
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
