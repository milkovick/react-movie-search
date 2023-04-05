import React from "react";
import MoviesListItem from "./MoviesListItem";
import "./style.css";
const MoviesList = ({ movies }) => {
  return (
    <div id="movies-div">
      {movies.map((movie) => {
        return <MoviesListItem key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
