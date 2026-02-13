import MovieCard from "./MovieCard";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const premiumMovies = [
  { title: "Edge of Tomorrow", image: movie1, genre: "Sci-Fi", year: "2025", rating: "★ 9.2" },
  { title: "The Abyss", image: movie2, genre: "Adventure", year: "2025", rating: "★ 8.8" },
  { title: "Star Command", image: movie3, genre: "Action", year: "2024", rating: "★ 9.0" },
];

const latestMovies = [
  { title: "Midnight Rain", image: movie4, genre: "Thriller", year: "2025", rating: "★ 8.5" },
  { title: "Dragon's Keep", image: movie5, genre: "Fantasy", year: "2025", rating: "★ 9.4" },
  { title: "The Haunting", image: movie6, genre: "Horror", year: "2024", rating: "★ 8.1" },
];

const MovieGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-2">
          Premium Collection
        </h2>
        <p className="text-muted-foreground">Handpicked blockbusters — stream free in HD</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20">
        {premiumMovies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-2">
          Latest Releases
        </h2>
        <p className="text-muted-foreground">Fresh titles added every week</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {latestMovies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
