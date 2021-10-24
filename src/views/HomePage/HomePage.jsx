import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrendingFilms } from "../../services/moviesAPI";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <MoviesList moviesArr={movies} />
    </div>
  );
}
