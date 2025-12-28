import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  REST_MENU_API_URL,
  DATA_API_URL,
  REST_IMG_URL,
} from "../utils/constants";
import ShimmerEffect from "./ShimmerEffect";
import userRestaurants from "../utils/useRestaurants";
import ShimmerCard from "./ShimmerCard";

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
    return <ShimmerCard cardType={"restaurantMenu"} />;
  }

return (
  <div className=" flex items-center justify-center m-5 ">
    <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
      <div className="w-full">
        <img
          src={REST_IMG_URL + restData.cloudinaryImageId}
          alt="resto-img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{restData.name}</h2>
        <p className="text-lg text-yellow-600 mb-2">
          {restData.avgRatingString + "⭐"}{" "}
          {`( Total ratings : ${restData.totalRatingsString} )`}
        </p>
        <p
          className={`restaurant-status mb-2 font-semibold ${
            restData.availability.opened ? "text-green-600" : "text-red-600"
          }`}
        >
          {restData.availability.opened
            ? "Closing time : " + restData.availability.nextCloseTime
            : "Closed Now"}
        </p>
        <p className="text-gray-500 mb-2">{"📍" + restData.locality}</p>
        <p className="text-gray-700 italic">{restData.cuisines.join(", ")}</p>
      </div>
    </div>
  </div>
);
};

export default Restaurant;
