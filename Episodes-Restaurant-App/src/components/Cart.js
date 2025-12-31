import React from "react";
import MenuList from "./MenuList";
import menuItems from "../utils/mockRestaurantsMenu.json";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  //This way, your component only subscribes once to the Redux store, which is more efficient and avoids unnecessary re-renders.
  const { totalPrice, items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (!items || items.length === 0)
    return (
      <div className="w-[40%] mx-auto min-h-[calc(100vh-220px)] flex flex-col justify-center text-center ">
        <h1 className="text-2xl">Your cart is empty</h1>
        <p>You can go to home page to view more restaurants</p>
      </div>
    );

  return (
    <div className="flex-col w-[40%] mx-auto my-5">
      <div className="flex justify-between mx-10">
        <h1 className="text-2xl">Total Price : {totalPrice}</h1>
        <button
          className="text-xl font-bold bg-red-400 text-white rounded-2xl p-2 hover:cursor-pointer hover:bg-red-500"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <div className=" my-5  bg-white rounded-2xl shadow-lg p-6 flex flex-col  gap-4">
        {items.map((restoMenu) => (
          <MenuList key={restoMenu.itemID} menu={restoMenu} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
