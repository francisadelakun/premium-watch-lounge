import { Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Cinematic theater"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-20">
        <div className="animate-fade-in-up max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-primary/30">
              ★ Premium
            </span>
            <span className="text-muted-foreground text-sm">Free to Watch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-none mb-4 text-gradient-gold">
            Watch Free Premium & Latest Movies
          </h1>
          
          <p className="text-secondary-foreground text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Stream the biggest blockbusters, exclusive premieres and timeless classics — all completely free, no subscription needed.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://lockedpage1.website/cl/i/krrem9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 glow-gold">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" />
              Watch Now
            </a>
            <a href="https://lockedpage1.website/cl/i/krrem9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary/80 border border-border">
              Browse Library
            </a>
          </div>
          
          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-primary" fill="currentColor" /> 4.9 Rating
            </span>
            <span>|</span>
            <span>10K+ Movies</span>
            <span>|</span>
            <span>HD & 4K Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
