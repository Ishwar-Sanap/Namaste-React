import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  REST_MENU_API_URL,
  DATA_API_URL,
  REST_IMG_URL,
} from "../utils/constants";
import ShimmerEffect from "./ShimmerEffect";

const Restaurant = () => {
  const { restID } = useParams(); // This hook use to take value dynamically from URL

  const [restData, setRestData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const proxyURL = "https://proxy.corsfix.com/?"; // to aovid cors error
    // const resp = await fetch(proxyURL + REST_MENU_API_URL + restID);
    //above API is not working of fetching the restaurant menu.. :((

    const resp = await fetch(proxyURL + DATA_API_URL);
    const resJSON = await resp.json();

    const restListData =
      resJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const restaurant = restListData.filter((rest) => rest?.info?.id === restID);
    setRestData(restaurant[0]?.info);
  };

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
