import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      {/* <h1>Hello, {displayName}</h1> */}
    </div>
  );
};

export default Browse;
