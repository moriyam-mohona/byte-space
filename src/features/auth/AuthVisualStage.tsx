import NextImage from "next/image";
import Link from "next/link";
import { AvatarGroup } from "@/components/ui/AvatarGroup";

const STUDENT_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

interface AuthVisualStageProps {
  title: string;
  subtitle: string;
}

export function AuthVisualStage({ title, subtitle }: AuthVisualStageProps) {
  return (
    <div className="flex flex-col justify-between h-full space-y-10 lg:space-y-14">
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

        <div className="space-y-3 max-w-md">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="font-body text-white/80 text-body-s sm:text-body-m leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ─── Layered Interactive Course Showcase with 3D Shapes ─── */}
      <div className="relative w-full max-w-110 mx-auto lg:mx-0 py-6">
        {/* 3D Floating Lime Ring (Top-Left) */}
        <div className="pointer-events-none absolute -top-8 -left-6 w-20 sm:w-24 z-20 animate-float-slow select-none">
          <NextImage
            src="/images/auth/lime-floating-lime-ring.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-xl"
            aria-hidden="true"
          />
        </div>

        {/* 3D Floating Lime Pyramid (Bottom-Left) */}
        <div className="pointer-events-none absolute -bottom-6 -left-8 w-20 sm:w-24 z-20 animate-float-subtle select-none">
          <NextImage
            src="/images/auth/lime-floating-lime-pyramid.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-xl"
            aria-hidden="true"
          />
        </div>

        {/* 3D Floating White Squiggle (Bottom-Right) */}
        <div className="pointer-events-none absolute bottom-4 -right-6 w-16 sm:w-20 z-20 animate-float-reverse select-none">
          <NextImage
            src="/images/auth/floating-white-squiggle.png"
            alt=""
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-xl"
            aria-hidden="true"
          />
        </div>

        {/* ── Background Peeking Card: Build Digital Assets ── */}
        <div className="absolute top-4 -left-6 z-0 w-[85%] scale-95 opacity-80 select-none">
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-neutral-100/90 text-left space-y-3">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-100">
              <NextImage
                src="/images/courses/course-digital-assets.jpg"
                alt="Build Digital Assets"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-2 bottom-2 flex items-center gap-2 text-[10px] font-medium text-neutral-800">
                <span className="px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-xs shadow-xs">
                  17 Lessons
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-label-s text-neutral-950 truncate">
                Build Digital Assets
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

        {/* ── Main Foreground Card: the Power of Big Data ── */}
        <div className="relative z-10 ml-auto w-[90%] sm:w-[88%] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100/90 text-left space-y-3.5">
          <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-neutral-900">
            <NextImage
              src="/images/courses/course-big-data.jpg"
              alt="the Power of Big Data"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between text-[9.5px] font-medium text-neutral-800">
              <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs shadow-xs">
                17 Lessons
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs shadow-xs">
                2 hours 16 mins
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs shadow-xs">
                59 Comments
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-heading font-bold text-label-m text-neutral-950">
                the Power of Big Data
              </h3>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                by{" "}
                <span className="text-primary font-medium">
                  purepearl studio
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-[11.5px] font-semibold text-neutral-900 shrink-0">
              <span>4.5</span>
              <span className="text-secondary">★</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-[10px] font-medium text-neutral-700">
                Beginner
              </span>
              <AvatarGroup
                avatars={STUDENT_AVATARS}
                badgeText="26+"
                size={20}
              />
            </div>
            <span className="font-heading font-bold text-label-s text-primary">
              $25
              <span className="text-[10px] text-neutral-400 font-normal">
                /lifetime
              </span>
            </span>
          </div>
        </div>

        {/* ── Lime Floating Card: Happy Students ── */}
        <div className="absolute -bottom-6 left-6 z-20 animate-float-slow origin-bottom-left scale-90 sm:scale-95">
          <div className="bg-secondary text-neutral-950 rounded-2xl p-3 sm:p-3.5 shadow-xl border border-secondary-400/50 min-w-47.5 text-left space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="font-heading font-bold text-[12px]">
                Happy Students
              </span>
              <span className="text-[10px] font-bold text-neutral-800">
                4.5 (240) ★
              </span>
            </div>
            <AvatarGroup avatars={STUDENT_AVATARS} badgeText="2K+" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}
