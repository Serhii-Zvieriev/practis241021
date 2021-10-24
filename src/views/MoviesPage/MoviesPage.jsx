import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { getFilmsByQuery } from "../../services/moviesAPI";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MoviesPage() {
  const [query, setQuery] = useState(``);
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const searchQueary = new URLSearchParams(location.search).get("query");
  console.log(searchQueary);

  useEffect(() => {
    if (searchQueary) {
      getFilmsByQuery(searchQueary).then(setMovies);
      setQuery(searchQueary);
    }
  }, [searchQueary]);

  function onChange(e) {
    setQuery(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    getFilmsByQuery(query).then(setMovies);
    history.push({ ...history.location, search: `?query=${query}` });
  }

  return (
    <div>
      <h2>Movies Page</h2>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={query} />
        <button type="submit">Search movies</button>
      </form>
      <MoviesList moviesArr={movies} />
    </div>
  );
}
