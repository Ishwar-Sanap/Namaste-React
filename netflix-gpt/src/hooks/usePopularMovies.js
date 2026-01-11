import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../api/options";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
