import { COURSES_DATA } from "@/data/courses";

export function generateStaticParams() {
  return COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage() {
  return null;
}
