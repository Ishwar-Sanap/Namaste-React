import { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../api/options";

const useMovieVideos = (movieId) => {
  const [movieVideos, setMovieVideos] = useState(null);

  const MOVIE_API_URL =
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US";

  const getVideos = async () => {
    const resp = await fetch(MOVIE_API_URL, MOVIE_OPTIONS);
    const data = await resp.json();
    setMovieVideos(data.results);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return movieVideos;
};

export default useMovieVideos;
