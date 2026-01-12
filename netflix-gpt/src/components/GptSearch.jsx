import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearch = () => {
  const searchResults = useSelector((store) => store.movies.searchResultMovies);
  return (
    <div className="relative w-full h-screen">
      <img
        src={BACKGROUND_IMG_URL}
        className="w-full h-full object-cover absolute inset-0 z-0"
        alt="Netflix background"
      />
      <div className="absolute inset-0 z-10 ">
        <GptSearchBar />
        <MovieList title={"Results"} movies={searchResults} />
      </div>
    </div>
  );
};

export default GptSearch;
