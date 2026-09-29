export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  courseTitle?: string;
}
