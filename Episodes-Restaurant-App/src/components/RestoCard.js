import { REST_IMG_URL } from "../utils/constants";

//since this hepler function only formats the cuisines array and it doesn't need any state variable
//we have define outside of component
//This avoids re-creating the function on every render and keeps your component cleaner.
const getCuisineStr = (cuisines) => {
  let cuisinesStr = cuisines.join(",");

  if (cuisinesStr.length > 35) {
    return cuisinesStr.substring(0, 35) + "...";
  }

  return cuisinesStr;
};

const RestoCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    props?.restData?.info;

  return (
    <div data-testid="restoCard" className="w-80 bg-gray-200 rounded-2xl transition-transform duration-200 hover:scale-105 hover:shadow-3xl">
      <img
        src={REST_IMG_URL + cloudinaryImageId}
        alt="resto-img"
        className="w-full h-60 rounded-2xl object-cover "
      />
      <div className="p-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>Rating : ({avgRating} ⭐)</p>
        <p className="font-light italic">{getCuisineStr(cuisines)}</p>
        <p className="">Delivery Time : {sla.slaString}</p>
        <p className="text-xl font-semibold">{costForTwo}</p>
      </div>
    </div>
  );
};

//It is Higherorder function which takes compoent as input and return component with some new update
export const restoCardWithDiscount = (RestoCard) => {
  //returning new functional component with some new updates.
  // but make sure to don't modify the original RestoCard input component
  return (props) => {
    const { header, subHeader, discountTag } =
      props?.restData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <div className="bg-gray-600 text-white absolute z-10 rounded-l-3xl m-2 p-2 font-bold">
        <label>{header + (subHeader ? " " + subHeader : "")}</label>
        <label>{discountTag ? " " + discountTag : ""}</label>
        </div>
        <RestoCard {...props} />
      </div>
    );
  };
};
export default RestoCard;

// {"header": "₹100 OFF","subHeader": "ABOVE ₹299","discountTag": "FLAT DEAL"}
// data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.aggregatedDiscountInfoV3
