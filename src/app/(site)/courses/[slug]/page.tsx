import { COURSES_DATA } from "@/data/courses";

export async function generateStaticParams() {
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
  return (
    <div className="container py-12">
      <h1 className="text-heading-m">Course: {slug}</h1>
    </div>
  );
}
