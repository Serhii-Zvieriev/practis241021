import {
  useParams,
  useHistory,
  useLocation,
  Route,
  Switch,
  useRouteMatch,
} from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { getFilmById } from "../../services/moviesAPI";

import Cast from "../../components/Cast/Cast";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  console.log(history);

  useEffect(() => getFilmById(movieId).then(setMovieDetails), [movieId]);

  function handleGoBack() {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  }

  if (!movieDetails) {
    return <></>;
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>

      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />

      <NavLink
        to={{
          pathname: url + "/cast",
          state: { ...location.state, id: movieId },
        }}
      >
        Cast
      </NavLink>

      <Switch>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${url}/reviews`}></Route>
      </Switch>
    </div>
  );
}
