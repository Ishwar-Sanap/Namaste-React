import { createSlice } from "@reduxjs/toolkit";
import {
  loadItemsFromLocalStorage,
  loadTotalItemsFromLocalStorage,
  loadTotalPriceFromLocalStorage,
} from "../utils/loadItemsFromLocalStorage";

const cartSlice = createSlice({
  name: "cart", // name for slice to use in store
  initialState: {
    items: loadItemsFromLocalStorage(), //big object that store items like {key1 : {item} , key2 : {item}, ... }
    totalPrice: loadTotalPriceFromLocalStorage(),
    totalItems: loadTotalItemsFromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload.itemID;
      const quantity = state.items[id] ? state.items[id].quantity + 1 : 1;
      state.items[id] = { ...action.payload, quantity }; //updating the quantity
      state.totalPrice += action.payload.itemPrice;
      state.totalItems++;
    },
    removeItem: (state, action) => {
      const id = action.payload.itemID;
      if (!state.items[id]) return; // Item not in cart
      const quantity = state.items[id].quantity - 1;
      if (quantity <= 0) {
        delete state.items[id];
      } else {
        state.items[id] = { ...action.payload, quantity }; //updating the quantity
      }
      state.totalPrice = Math.max(
        0,
        state.totalPrice - action.payload.itemPrice
      );
      state.totalItems = Math.max(0, state.totalItems - 1);
    },
    clearCart: (state) => {
      state.items = {};
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // exporting the actions to update state

export default cartSlice.reducer; // exporting the redcuer
