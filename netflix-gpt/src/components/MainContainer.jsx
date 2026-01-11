import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;

  //Taking random moive to display on background..
  const randomIndx = Math.floor((Math.random() * movies.length));
  const mainMovie = movies[randomIndx];

  const {original_title , overview, id} = mainMovie;

  return (
    <div className="w-full relative">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
