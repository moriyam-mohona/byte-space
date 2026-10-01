import { COURSES_DATA } from "@/data/courses";
import { FeaturedCoursesInteractive } from "./FeaturedCoursesInteractive";

export function FeaturedCourses() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container">
        {/* ─── Section Header (Headline & Subtitle) ─── */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950 tracking-tight leading-tight">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="font-body text-body-m sm:text-body-l text-neutral-700 leading-relaxed px-2">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* ─── Interactive Client Component (Filtering & Carousel) ─── */}
        <FeaturedCoursesInteractive courses={COURSES_DATA} />
      </div>
    </section>
  );
}
