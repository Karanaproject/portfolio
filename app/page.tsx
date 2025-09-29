import HeroSection from "@/app/components/sections/HeroSection";
import ProjectSection from "@/app/components/sections/ProjectSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ContactSection from "@/app/components/sections/ContactSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection"; // ✅ Sudah ditambahkan

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 1. Hero/Banner utama */}
      <HeroSection />
      
      {/* 2. Tentang saya */}
      <AboutSection />
      
      {/* 3. Ringkasan pengalaman kerja */}
      <ExperienceSection /> // ✅ Section experience sudah ditambahkan
      
      {/* 4. Proyek-proyek */}
      <ProjectSection />
      
      {/* 5. Kontak */}
      <ContactSection />
    </main>
  );
}
