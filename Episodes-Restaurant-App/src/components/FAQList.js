import React, { useState } from "react";

const FAQList = ({ faq , showDescription , showIndex}) => {
  return (
    <div className="w-1/2 mx-auto my-5 p-2">
      <div
        className="flex justify-between border-b border-gray-300 hover:cursor-pointer "
        onClick={() => {
            showIndex(); //calling callback function passed by parent
        }}
      >
        <h2 className="text-lg font-semibold hover:text-red-500 mb-3 ">{faq.title}</h2>
        <div className="text-xl">{showDescription ? "⬆️" : "⬇️"}</div>
      </div>

      {showDescription && <p>{faq.description}</p>}
    </div>
  );
};

export default FAQList;
