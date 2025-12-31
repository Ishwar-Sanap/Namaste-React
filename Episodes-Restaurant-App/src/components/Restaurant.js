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
import MenuList from "./MenuList";
import menuItems from "../utils/mockRestaurantsMenu.json";

const Restaurant = () => {
  const { restID } = useParams(); // This hook use to take value dynamically from URL
  const [showMenu, setShowMenu] = useState(true);
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
     <div className="flex-col w-[40%] mx-auto my-5">
      <div className="flex   px-10 rounded-3xl gap-10 ">
        <div className="">
          <img
            src={REST_IMG_URL + restData.cloudinaryImageId}
            alt="resto-img"
            className="h-40 rounded-xl"
          />
        </div>

        <div>
          <h2 className=" font-bold mb-4 text-gray-800">{restData.name}</h2>
          <p className=" mb-2">
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
        </div>
      </div>

      {showMenu && (
        <div className="w-full my-5   bg-white rounded-2xl shadow-lg p-6 flex flex-col  gap-4">
          {menuItems.map((restoMenu) => (
            <MenuList key={restoMenu.itemID} menu={restoMenu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
