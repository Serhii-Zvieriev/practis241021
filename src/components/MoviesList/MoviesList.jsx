import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ moviesArr }) {
  const location = useLocation();
  return (
    <ul>
      {moviesArr.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from:
                  location.pathname === "/" ? "/" : "/movies" + location.search,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
