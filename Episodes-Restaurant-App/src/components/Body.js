import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
// import restaurantsList from "../utils/mockData.json";
import { DATA_API_URL } from "../utils/constants";
import ShimmerEffect from "./ShimmerEffect";
import { Link, useParams } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //state variable --> super powerful
  //State lives in React’s internal memory, NOT inside the function
  const [restList, setRestList] = useState([]);
  const [filterRestList, setFilterRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  //Use state hook enusre that the data layer and UI layer are in sync, when value of state variable changes
  // it automatically re-renders the whole component with updated value

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proxyURL = "https://proxy.corsfix.com/?"; // to aovid cors error
    const res = await fetch(proxyURL + DATA_API_URL);
    const resJSON = await res.json();

    // the data we are receiving from swiggy API it's live data in future below data format might be change
    // so update desturcturing accordingly..
    const restListData =
      resJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestList(restListData);
    setFilterRestList(restListData);
  };

  const online = useOnlineStatus();
  if (online === false) {
    return (
      <h2>
        Looks like you're offile !! please check your internet connection..
      </h2>
    );
  }

  //conditional rendering..
  if (restList?.length === 0) {
    return <ShimmerEffect />;
  }

  return (
    <div className="main-container">
      <div className="filter-btns">
        <input
          name="searchInput"
          type="text"
          placeholder="search restaurants"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btn search-btn"
          onClick={() => {
            //Search filter should be applied on all the data not subset of filtered data
            const filteredRest = restList.filter((rest) =>
              rest?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestList(filteredRest);
          }}
        >
          Search
        </button>
        <button
          className="btn"
          onClick={() => {
            const filterList = restList.filter(
              (rest) => rest?.info?.avgRating > 4.2
            );
            console.log("filter rest : ", filterList);
            setFilterRestList(filterList);
          }}
        >
          Top rated resturants
        </button>
      </div>

      <div className="resto-container">
        {filterRestList.map((restaurant, indx) => (
          <Link
            to={"restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestoCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
