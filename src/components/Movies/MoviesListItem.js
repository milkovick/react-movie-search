import React from "react";
import "./style.css";

const noImageFound = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";
const MoviesListItem = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? noImageFound : movie.Poster;
  return (
    <div id="movie-item">
      <h4>{movie.Title}</h4>
      <img id="movie-img" src={poster} alt={`Movie title is: ${movie.Title}`} />
    </div>
  );
};
export default MoviesListItem;
