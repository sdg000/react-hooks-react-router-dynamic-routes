import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}){
   /**useParams() returns Object of key/value pairs of URL parameters
    * value of useParams() has been saved to params.
    */
    const params = useParams()
    console.log(movies[2].title)
    console.log(params)

    /**Onclick, shows the title of movie link clicked.
     * movies is an object
     * params is an object that returns the dynamic 
     */
    return (
        <h3>{movies[params.movieId].title}</h3>
    )
}
export default MovieShow