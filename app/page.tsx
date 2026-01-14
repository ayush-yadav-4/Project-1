"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import SubHeroSection from "@/components/SubHeroSection";
import SecuritySection from "@/components/SecuritySection";
import GlobalEnterprisesSection from "@/components/GlobalEnterprisesSection";
import EnterpriseAdvantage from "@/components/EnterpriseAdvantage";
import Cards from "@/components/Cards";
import Cards2 from "@/components/Cards2";
import IntegrationSection from "@/components/IntegrationSection";
import FeaturesSection from "@/components/FeaturesSection";
import EnterpriseScaleSection from "@/components/EnterpriseScaleSection";
import SignupSection from "@/components/SignupSection";
import ExtendedReviews from "@/components/ExtendedReviews";
import AnimatedPoints from "@/components/AnimatedPoints";
import Footer from "@/components/Footer";
import AnimatedIconsSection from "@/components/AnimatedIconsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        {/* <HeroSection /> */}
        <HeroSection2 />
        {/* <SubHeroSection /> */}
        {/* <SecuritySection /> */}
        <GlobalEnterprisesSection />
         <AnimatedIconsSection />
        {/* <EnterpriseAdvantage /> */}
        {/* <Cards /> */}
        {/* <Cards2 /> */}
        <IntegrationSection />
        <FeaturesSection />
       
       
        {/* <SignupSection /> */}
        <AnimatedPoints />
        <ExtendedReviews />
        <Footer />
      </main>
    </div>
  );
}


