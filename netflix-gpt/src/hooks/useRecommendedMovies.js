import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../api/options";

const useRecommendedMovies = (movieID) => {
  const [movieInfo, setMovieInfo] = useState(null);

  const fetchMovieInfo = async () => {
    const resp = await fetch('https://api.themoviedb.org/3/movie/' + movieID + '/recommendations?language=en-US&page=1', MOVIE_OPTIONS)
    const data = await resp.json();
    setMovieInfo(data.results);
  };
  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return movieInfo;
};

export default useRecommendedMovies;
