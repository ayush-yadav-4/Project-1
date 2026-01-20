"use client";

import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SocialPresence from "@/components/SocialPresence";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100 overflow-x-hidden">
      
      <main className="pt-24">
        <ContactHero />
        {/* <ContactForm /> */}
        <ContactInfo />
        <SocialPresence />
        <FAQSection />
      </main>

    </div>
  );
}
