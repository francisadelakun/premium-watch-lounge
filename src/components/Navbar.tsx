import { Film } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="w-6 h-6 text-primary" />
          <span className="font-display text-2xl text-gradient-gold tracking-wider">
            CINEMAX
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <a href="#" className="hover:text-foreground transition-colors">Movies</a>
          <a href="#" className="hover:text-foreground transition-colors">Trending</a>
          <a href="#" className="hover:text-foreground transition-colors">My List</a>
        </div>
        
        <button className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold transition-all hover:scale-105">
          Watch Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
