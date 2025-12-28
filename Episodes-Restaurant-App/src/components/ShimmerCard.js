import React from "react";

const ShimmerCard = ({ cardType }) => {
  console.log(cardType);
  if (cardType === "restaurantMenu") {
    return (
      <div className=" flex items-center justify-center m-5 ">
        <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
          <div className="w-full bg-gray-200 h-130 "></div>
          <div className="w-full p-8 flex flex-col justify-center">
           
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80  bg-gray-200  rounded-2xl">
      <div className="w-full h-60 rounded-2xl bg-gray-300"></div>

      <div className="p-2 h-30"></div>
    </div>
  );
};

export default ShimmerCard;
