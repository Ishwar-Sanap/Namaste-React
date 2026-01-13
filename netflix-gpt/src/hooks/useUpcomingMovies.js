import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../api/options";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
