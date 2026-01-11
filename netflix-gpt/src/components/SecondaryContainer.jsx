import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const {nowPlayingMovies , popularMovies, topRatedMovies, upcomingMovies} = useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-70 relative z-20">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
