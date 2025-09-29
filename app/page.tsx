import HeroSection from "@/app/components/sections/HeroSection";
import ProjectSection from "@/app/components/sections/ProjectSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ContactSection from "@/app/components/sections/ContactSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero/Banner utama */}
      <HeroSection />
      
      {/* Tentang saya */}
      <AboutSection />
      
      {/* Ringkasan pengalaman kerja */}
      <ExperienceSection />
      
      {/* Proyek-proyek */}
      <ProjectSection />
      
      {/* Kontak */}
      <ContactSection />
    </main>
  );
}
