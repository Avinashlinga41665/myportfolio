"use client";
import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
export default function HomePage() {

  return (
    <>
      <main className="scroll-smooth">
        <HomeSection/>
        <AboutSection/>
        <ServicesSection/>
        <WorkSection/>
        <ContactSection/>
      </main>
    </>
  );
}
