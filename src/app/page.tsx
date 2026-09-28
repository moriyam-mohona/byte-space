import { HeroBanner } from "@/features/home/components/HeroBanner";
import { CorePrograms } from "@/features/home/components/CorePrograms";
import { AboutSection } from "@/features/home/components/AboutSection";
import { ProcessSection } from "@/features/home/components/ProcessSection";
import { BloodDonationSection } from "@/features/home/components/BloodDonationSection";
import { VolunteerSection } from "@/features/home/components/VolunteerSection";
import { CampaignsSection } from "@/features/home/components/CampaignsSection";
import { RecentActivitiesSection } from "@/features/home/components/RecentActivitiesSection";
import { DonationBannerSection } from "@/features/home/components/DonationBannerSection";

export default function HomePage() {
  return (
    <main className="space-y-4 sm:space-y-6">
      {/* 1. HeroBanner & CorePrograms */}
      <HeroBanner />
      <CorePrograms />

      {/* 2. AboutSection */}
      <AboutSection />

      {/* 3. ProcessSection & BloodDonationSection */}
      <ProcessSection />
      <BloodDonationSection />

      {/* 4. VolunteerSection */}
      <VolunteerSection />

      {/* 5. CampaignsSection */}
      <CampaignsSection />

      {/* 6. RecentActivitiesSection */}
      <RecentActivitiesSection />

      {/* 7. DonationBannerSection (Full-bleed Call to Action Banner) */}
      <DonationBannerSection />
    </main>
  );
}
