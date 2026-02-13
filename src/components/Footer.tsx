import { Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="w-5 h-5 text-primary" />
              <span className="font-display text-xl text-gradient-gold">CINEMAX</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your destination for free premium and latest movies. Stream anywhere, anytime.
            </p>
          </div>
          
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-foreground font-semibold mb-1">Browse</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Premium</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Latest</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trending</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-foreground font-semibold mb-1">Company</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border text-center text-muted-foreground text-xs">
          © 2025 Cinemax. All rights reserved. Watch free premium movies.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
