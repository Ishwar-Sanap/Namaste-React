import React from "react";
import { MOVIE_POSTER_CND } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;
  if(!poster_path) return null;
  return (
    <div className="w-60 cursor-pointer">
      <img src={MOVIE_POSTER_CND + poster_path} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
