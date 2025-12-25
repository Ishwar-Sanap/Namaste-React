import { REST_IMG_URL } from "../utils/constants";

const RestoCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    props?.restData?.info;

  return (
    <div className="resto-card">
      <img
        src={REST_IMG_URL + cloudinaryImageId}
        alt="resto-img"
        className="resto-img"
      />
      <div className="resto-card-details">
        <h2>{name}</h2>
        <p className="card-info">{cuisines.join(",")}</p>
        <p className="card-info">{costForTwo}</p>
        <p className="card-info">{avgRating} ⭐</p>
        <p className="card-info">Delivery Time : {sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestoCard;
