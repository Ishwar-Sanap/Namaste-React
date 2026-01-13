import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../api/options";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPLayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPLayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
