import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesListl";
import MovieShow from "./MovieShow";

function MoviesPage({movies}) {

  //useRouteMatch() returns object that contains current url
  const match = useRouteMatch()
  console.log(match)
 
  //match.url returns value of url key in object
  //setting Route path to "match.url" and "movieID"
  return (
    <div>
      <MoviesList movies={movies}/>

      {/* nested version of default route */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      {/* dynamic route path */}
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;

/**EXPLAINING ROUTE COMPONENTS
 * First <Route/> : when url path matches exactly "/movies", render <h3/>
 * Second <Route/> : when url path matches "/movies/(movieId)", render <MovieShow movie={movie}/>
 * 
 * <MovieShow/> : use [params.id] as index to extract movieObject title. AND Display "movie title"
 * in <h3/>
 * 
 */