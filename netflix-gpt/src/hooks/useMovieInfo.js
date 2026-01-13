import { useEffect, useRef, useState } from "react";
import { MOVIE_OPTIONS } from "../api/options";

const useMovieInfo = (movieID) => {
  const [movieInfo, setMovieInfo] = useState(null);

  const fetchMovieInfo = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "language=en-US",
      MOVIE_OPTIONS
    );
    const data = await resp.json();
    setMovieInfo(data);
  };
  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return movieInfo;
};

export default useMovieInfo;
