import type { Metadata } from "next";
import {
  Hero,
  Partners,
  FeaturedCourses,
  Categories,
  GrowthFeatures,
  CreatorBanner,
  Testimonials,
} from "@/features/home";

export const metadata: Metadata = {
  title: "ByteSpace — Online Learning & Course Marketplace",
  description:
    "Explore high-impact courses in UI/UX design, data science, productivity, and finance taught by industry experts.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <FeaturedCourses />
      <Categories />
      <GrowthFeatures />
      <CreatorBanner />
      <Testimonials />
    </>
  );
}
