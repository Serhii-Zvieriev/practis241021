import axios from "axios";

const API_KEY = "a2e02600e12e2473b75eeef15976f1a3";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getTrendingFilms() {
  const resp = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return resp.data.results;
}

export async function getFilmsByQuery(query) {
  const {
    data: { results },
  } = await axios.get("/search/movie?api_key=" + API_KEY + "&query=" + query);

  return results;
}

export async function getFilmById(id) {
  const { data } = await axios(`/movie/${id}?api_key=${API_KEY}`);
  return data;
}

export async function getCastInfo(id) {
  const res = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return res.data.cast;
}
