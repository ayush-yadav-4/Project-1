"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import AboutTeam from "@/components/AboutTeam";
import AboutEnterpriseUnderstanding from "@/components/AboutEnterpriseUnderstanding";
import EnterpriseScaleSection from "@/components/EnterpriseScaleSection";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100 overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24">
        <AboutHero />
        <AboutContent />
        <EnterpriseScaleSection />
        <AboutTeam />
        <AboutEnterpriseUnderstanding />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}
