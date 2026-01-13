import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";

const MovieDetails = () => {
  const {movieID} = useParams();

  return (
    <div className="relative w-full min-h-screen bg-gray-800">
      <Header movieID={movieID} />
      <div className="absolute min-h-full top-0 left-0 right-0 z-10 ">
        <MovieInfo key={movieID}/>
      </div>
    </div>
  );
};

export default MovieDetails;
