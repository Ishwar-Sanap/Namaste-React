import { useDispatch, useSelector } from "react-redux";
import menuItems from "../utils/mockRestaurantsMenu.json";
import { addItem, removeItem } from "../store/cartSlice";
import { useState } from "react";

const MenuList = (props) => {
  const { itemName, itemDescription, itemPrice, imageUrl } = props.menu;
  const dispatch = useDispatch();
  const [quatity, setQuantity] = useState(0);

  const addItemHandler = () => {
    setQuantity(quatity + 1);
    dispatch(addItem(props.menu));
  };

  const removeItemHandler = () => {
    setQuantity(quatity - 1);
    dispatch(removeItem(props.menu));
  };
  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={imageUrl}
        className="w-20 h-20 object-cover rounded-lg border"
        alt="img"
      />
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800 mb-1 flex items-center justify-between">
          <span>{itemName}</span>
          <span className="text-green-700 text-base font-bold ml-2">
            ₹{itemPrice}
          </span>
        </h1>
        <p className="text-gray-600 text-sm italic">{itemDescription}</p>

        {quatity === 0 ? (
          <button
            className="bg-gray-600 text-white px-5 my-3 rounded-xl hover:bg-gray-500 hover:cursor-pointer"
            onClick={addItemHandler}
          >
            Add
          </button>
        ) : (
          <div className="flex bg-white border border-gray-400 w-3/20 justify-around items-center my-3">
            <button className="font-bold text-2xl text-gray-500 hover:cursor-pointer" onClick={removeItemHandler}>
              -
            </button>
            <p className="font-bold text-green-500 ">{quatity}</p>
            <button
              className="font-bold text-xl text-green-500 hover:cursor-pointer"
              onClick={addItemHandler}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
