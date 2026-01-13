import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0)
    return (
      <div className=" py-3 bg-gray-900/70  mt-20 w-3/10 flex justify-center items-center mx-auto">
        <h1 className="text-2xl text-white">{title} found... ❌</h1>
      </div>
    );


  return (
    <div className="mx-8 py-3">
      <h1 className="text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-x">
        <div className="flex my-5 gap-2  ">
          {movies.map((movie) => (
            <NavLink key={movie.id} to={"/browse/" + movie.id}>
              <MovieCard movie={movie} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
