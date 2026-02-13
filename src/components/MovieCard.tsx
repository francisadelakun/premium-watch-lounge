import { Play } from "lucide-react";

interface MovieCardProps {
  title: string;
  image: string;
  genre: string;
  year: string;
  rating: string;
}

const MovieCard = ({ title, image, genre, year, rating }: MovieCardProps) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-cinematic transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary text-xs font-bold">{rating}</span>
          <span className="text-muted-foreground text-xs">•</span>
          <span className="text-muted-foreground text-xs">{year}</span>
          <span className="text-muted-foreground text-xs">•</span>
          <span className="text-muted-foreground text-xs">{genre}</span>
        </div>
        <h3 className="font-display text-xl text-foreground mb-3">{title}</h3>
        <a href="https://lockedpage1.website/cl/i/krrem9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-all hover:scale-105 glow-gold">
          <Play className="w-4 h-4" fill="currentColor" />
          Watch Free
        </a>
      </div>
      
      {/* Always visible title */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-card group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
        <span className="text-muted-foreground text-xs">{genre}</span>
      </div>
    </div>
  );
};

export default MovieCard;
