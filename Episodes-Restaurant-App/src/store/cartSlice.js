import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // name for slice to use in store
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.totalPrice += action.payload.itemPrice;
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.totalPrice -= action.payload.itemPrice;
      state.items.pop(); // TO-DO --> remove item from action.payload based on ID
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // exporting the actions to update state

export default cartSlice.reducer; // exporting the redcuer
