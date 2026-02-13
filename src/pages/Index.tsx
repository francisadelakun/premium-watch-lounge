import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieGrid from "@/components/MovieGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MovieGrid />
      <Footer />
    </div>
  );
};

export default Index;
