"use client";
import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
export default function HomePage() {

  return (
    <>
        <Navbar/>
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
