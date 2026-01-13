import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../api/options";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
 const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
