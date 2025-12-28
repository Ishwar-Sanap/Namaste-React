import { REST_IMG_URL } from "../utils/constants";

const RestoCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    props?.restData?.info;

  return (
   <div className="w-80 bg-gray-200 rounded-2xl transition-transform duration-200 hover:scale-105 hover:shadow-3xl">
      <img
        src={REST_IMG_URL + cloudinaryImageId}
        alt="resto-img"
        className="w-full h-60 rounded-2xl object-cover "
      />
      <div className="p-2">
        <h2 className="text-xl font-semibold">{name} ({avgRating} ⭐)</h2>
        <p className="font-light italic">{cuisines.join(",")}</p>
        <p className="">Delivery Time : {sla.slaString}</p>
        <p className="text-xl font-semibold">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestoCard;
