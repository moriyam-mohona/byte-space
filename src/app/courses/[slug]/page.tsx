import Link from "next/link";
import { COURSES_DATA } from "@/data/courses";

export function generateStaticParams() {
  return COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16 space-y-6">
        <Link
          href="/courses"
          className="inline-flex items-center text-label-s text-primary hover:underline"
        >
          ← Back to all courses
        </Link>
        <h1 className="text-heading-m text-neutral-950">
          {course ? course.title : slug.replace(/-/g, " ")}
        </h1>
        <p className="text-body-l text-neutral-600">
          {course
            ? course.description
            : "Detailed curriculum, instructor bio, and enrollment options."}
        </p>
      </div>
    </main>
  );
}
