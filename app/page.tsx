

"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import SubHeroSection from "@/components/SubHeroSection";
import SecuritySection from "@/components/SecuritySection";
import GlobalEnterprisesSection from "@/components/GlobalEnterprisesSection";
import EnterpriseAdvantage from "@/components/EnterpriseAdvantage";
import Cards from "@/components/Cards";
import IntegrationSection from "@/components/IntegrationSection";
import FeaturesSection from "@/components/FeaturesSection";
import SignupSection from "@/components/SignupSection";
import ExtendedReviews from "@/components/ExtendedReviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        {/* <HeroSection /> */}
        <HeroSection2 />
        <SubHeroSection />
        <SecuritySection />
        <GlobalEnterprisesSection />
        <EnterpriseAdvantage />
        <Cards />
        <IntegrationSection />
        <FeaturesSection />
        {/* <SignupSection /> */}
        <ExtendedReviews />
        <Footer />
      </main>
    </div>
  );
}


  