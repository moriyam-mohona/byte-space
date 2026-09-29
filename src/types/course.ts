export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
    role: string;
  };
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice?: number;
  level: CourseLevel;
  lessons: number;
  duration: string;
  category: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  coursesCount: number;
}
