import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
  priority?: boolean;
}

const DEFAULT_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

export function CourseCard({
  course,
  className,
  priority = false,
}: CourseCardProps) {
  const avatars = course.enrolledAvatars?.length
    ? course.enrolledAvatars
    : DEFAULT_AVATARS;
  const enrolledBadge = course.enrolledCountBadge || "26+";
  const billing = course.billingPeriod || "lifetime";

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-3xl bg-white text-neutral-950 border border-neutral-200 p-3 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {/* ─── Top Thumbnail with Frosted Pills ─── */}
      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-neutral-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Frosted Bottom Metadata Pills */}
        <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1.5 sm:gap-2 select-none">
          <span className="font-body px-2.5 sm:px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-lg text-neutral-700 text-label-xs font-medium shadow-xs text-center truncate">
            {course.lessons} Lessons
          </span>
          <span className="font-body px-2.5 sm:px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-lg text-neutral-700 text-label-xs font-medium shadow-xs text-center truncate">
            {course.duration}
          </span>
          <span className="font-body px-2.5 sm:px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-lg text-neutral-700 text-label-xs font-medium shadow-xs text-center truncate">
            {course.commentsCount ?? course.reviewsCount} Comments
          </span>
        </div>
      </div>

      {/* ─── Title, Instructor & Rating ─── */}
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-level-m lg:text-heading-xs font-semibold tracking-tight truncate">
            <Link
              href={`/courses/${course.slug}`}
              className="text-neutral-950 hover:text-primary transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              {course.title}
            </Link>
          </h3>
          <p className="font-body text-body-xs text-neutral-500 mt-1">
            by{" "}
            <Link
              href="/"
              className="text-primary font-medium hover:underline focus:outline-hidden"
            >
              {course.instructor.name.toLowerCase()}
            </Link>
          </p>
        </div>

        {/* Rating Score & Star */}
        <div
          className="flex items-center gap-1 shrink-0 pt-0.5"
          aria-label={`Rating: ${course.rating} out of 5 stars`}
        >
          <span className="font-body text-body-m lg:text-body-l font-medium text-neutral-600">
            {course.rating.toFixed(1)}
          </span>
          <svg
            className="w-4 h-4 text-secondary-500 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* ─── Level Badge & Student Avatar Stack ─── */}
      <div className="mt-5 flex items-center justify-baseline gap-3">
        {/* Level Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-50 text-neutral-800 text-label-s font-medium select-none">
          <svg
            className="w-3.5 h-3.5 text-neutral-700 fill-current"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <rect x="2" y="10" width="2.5" height="4" rx="0.75" />
            <rect x="6.75" y="6" width="2.5" height="8" rx="0.75" />
            <rect x="11.5" y="2" width="2.5" height="12" rx="0.75" />
          </svg>
          <span>{course.level}</span>
        </div>

        {/* Enrolled Students Avatar Group */}
        <AvatarGroup avatars={avatars} badgeText={enrolledBadge} />
      </div>

      {/* ─── Price / Lifetime ─── */}
      <div className="mt-3 flex items-baseline gap-1 pt-1">
        <span className="text-heading-xs text-primary-600">
          ${course.price}
        </span>
        <span className="text-body-xs text-neutral-500 font-normal">
          /{billing}
        </span>
      </div>
    </article>
  );
}
