import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getCastInfo } from "../../services/moviesAPI";
export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    getCastInfo(movieId).then(setCast);
  }, [movieId]);
  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}
