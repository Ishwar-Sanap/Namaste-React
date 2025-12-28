import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  REST_MENU_API_URL,
  DATA_API_URL,
  REST_IMG_URL,
} from "../utils/constants";
import ShimmerEffect from "./ShimmerEffect";
import userRestaurants from "../utils/useRestaurants";

const Restaurant = () => {
  const { restID } = useParams(); // This hook use to take value dynamically from URL

  //creating custom hook for managing API call to get data of restaurants to ensure single responsibility principle of component..
  const restData = userRestaurants(restID);
  /*
  React’s state hooks are tied to the component that calls the custom hook. 
  When the state in the hook changes, React re-renders the parent component, 
  updating the UI with the new data. This is why your Restaurant component updates automatically 
  when the data is fetched in your custom hook.
  */

  if (!restData) {
    return <ShimmerEffect />;
  }

  return (
    <div className="restaurant-card">
      <img
        src={REST_IMG_URL + restData.cloudinaryImageId}
        alt="resto-img"
        className="restaurant-img"
      />
      <h2 className="restaurant-name">{restData.name}</h2>
      <p className="restaurant-rating">
        {restData.avgRatingString + "⭐"}{" "}
        {`( Total ratings : ${restData.totalRatingsString} )`}
      </p>
      <p
        className={`restaurant-status ${
          restData.availability.opened ? "open" : "closed"
        }`}
      >
        {restData.availability.opened
          ? "Closing time : " + restData.availability.nextCloseTime
          : "Closed Now"}
      </p>
      <p className="restaurant-locality">{"📍" + restData.locality}</p>
      <p className="restaurant-cuisines">{restData.cuisines.join(", ")}</p>
    </div>
  );
};

export default Restaurant;
