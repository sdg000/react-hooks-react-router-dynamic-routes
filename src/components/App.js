import React, { useState } from "react";
import { Route, Router, Switch, useParams, useRouteMatch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies}/>
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


//STEPS TO CREATE LIST/DETAIL INTERFACE using React Router,
//useParams and useRouteMatch

// In the top-level component (App.js in this case), create our "parent" routes and render <MoviesPage>
// In MoviesPage.js, render <MoviesList>
// In MoviesList.js, iterate through the movies object and create a dynamic Link for each movie using its id
// Back in MoviesPage.js, import useRouteMatch and create the child route by combining the current url with the :movie_id parameter; inside the child route, render <MovieShow>, passing the movies object as props
// In MovieShow.js, import useParams; use the :movie_id from the params object to access the correct movie from the movies object and display it on the page