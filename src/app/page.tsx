import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import AlbumSection from "@/components/AlbumSection";
import FacilitySection from "@/components/FacilitySection";
import ClinicSection from "@/components/ClinicSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <section className="mx-auto max-w-[1300px]">
        <ProgramSection />
        <AlbumSection />
      </section>
      <FacilitySection />
      <ClinicSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
