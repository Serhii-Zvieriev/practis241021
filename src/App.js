import { Route, Switch } from "react-router";

import HomePage from "./views/HomePage/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/movies/">
          <MoviesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
