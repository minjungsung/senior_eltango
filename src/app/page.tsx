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
      <div id="main-scroll" className="h-[100svh] overflow-y-auto overflow-x-hidden">
        <HeroSection />
        <section className="mx-auto max-w-[1300px]">
          <div className="flex flex-col gap-0">
            <ProgramSection />
            <AlbumSection />
          </div>
        </section>
        <FacilitySection />
        <ClinicSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
