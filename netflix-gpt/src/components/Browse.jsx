import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header />
      {/* <h1>Hello, {displayName}</h1> */}
    </div>
  );
};

export default Browse;
