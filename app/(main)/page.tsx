"use client";

import HeroSection2 from "@/components/HeroSection2";
import GlobalEnterprisesSection from "@/components/GlobalEnterprisesSection";
import AnimatedIconsSection from "@/components/AnimatedIconsSection";
import IntegrationSection from "@/components/IntegrationSection";
import FeaturesSection from "@/components/FeaturesSection";
import AnimatedPoints from "@/components/AnimatedPoints";
import ExtendedReviews from "@/components/ExtendedReviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100">
      <main className="flex flex-col items-center w-full">
        <HeroSection2 />
        <GlobalEnterprisesSection />
        <AnimatedIconsSection />
        <IntegrationSection />
        <FeaturesSection />
        <AnimatedPoints />
        <ExtendedReviews />
      </main>
    </div>
  );
}

