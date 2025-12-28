import { useEffect, useState } from "react";
import { DATA_API_URL } from "./constants";

const userRestaurants = (restID) => {
  const [restData, setRestData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

  return restData;
};

export default userRestaurants;
