

"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SecuritySection from "@/components/SecuritySection";
import EnterpriseAdvantage from "@/components/EnterpriseAdvantage";
import ExpertsSection from "@/components/ExpertsSection";
import IntegrationSection from "@/components/IntegrationSection";
import FeaturesSection from "@/components/FeaturesSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <SecuritySection />
        <EnterpriseAdvantage />
        <ExpertsSection />
        <IntegrationSection />
        <FeaturesSection />
        <SignupSection />
        <Footer />
      </main>
    </div>
  );
}


  