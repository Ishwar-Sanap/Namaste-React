import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="mx-8 py-3">
      <h1 className="text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-x">
        <div className="flex my-5 gap-2  ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
