import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import CalendarSection from "@/components/sections/CalendarSection";
import FixtureSection from "@/components/fixture/FixtureSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import PredictionsSection from "@/components/predictions/PredictionsSection";
import StadiumsSection from "@/components/stadiums/StadiumsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <CalendarSection />
        <FixtureSection />
        <FeaturedSection />
        <PredictionsSection />
        <StadiumsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
