import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    //registering slices into store, we can register as many slices we want..
    cart: cartReducer,
  },
});

export default appStore;
