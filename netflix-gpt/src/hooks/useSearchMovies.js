import React, { useEffect } from "react";
import { MOVIE_OPTIONS } from "../api/options";
import { useDispatch } from "react-redux";
import { addSearchResultMovies } from "../redux/moviesSlice";

const useSearchMovies = (searchText) => {
  const dispatch = useDispatch();

  const fetchSearchMovies = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText +
        "&include_adult=false&page=1",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    dispatch(addSearchResultMovies(data.results));
  };
  useEffect(() => {
    fetchSearchMovies();
  }, [searchText]);
};

export default useSearchMovies;
