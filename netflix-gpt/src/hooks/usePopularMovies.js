import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../api/options";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
