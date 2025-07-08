import HeroSection from "@/components/sections/HeroSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="pt-28">
      <HeroSection />
      <ProfileSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}
