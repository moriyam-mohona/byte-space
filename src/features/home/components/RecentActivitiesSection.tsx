import { PillBadge, SectionHeading } from "@/shared/components/ui";
import { ImageGallerySection } from "@/shared/components/ui/ImageGellery";
import { OurPartners } from "@/shared/components/ui/OurPartners";

export function RecentActivitiesSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-transparent relative overflow-hidden">
      <div className="container relative z-10">
        {/* ── 1. Recent Activities Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <PillBadge size="md">Our Activities</PillBadge>

          {/* Heading with highlighted word */}
          <SectionHeading
            className="leading-snug tracking-tight"
            titlePrefix="Our Recent "
            highlight="Activities"
            description="Your monthly donation will be spent to meet the essential needs of your sponsored child and their entire community."
          />
        </div>

        {/* ── 2. Photo Gallery Grid ── */}
        <ImageGallerySection />

        {/* ── 3. Partners / Sponsors Section ── */}
        <OurPartners />
      </div>
    </section>
  );
}
