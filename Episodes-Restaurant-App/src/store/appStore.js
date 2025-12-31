import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import saveItemsToLocalStorage from "../utils/saveItemsToLocalStorage";

const appStore = configureStore({
  reducer: {
    //registering slices into store, we can register as many slices we want..
    cart: cartReducer,
  },
});



//Subscribing when any state changes, upate the localstorage
/*
Redux does NOT provide a built-in way to subscribe to a specific reducer.
store.subscribe() always fires after every dispatch.
But you can selectively react to only one slice yourself.
*/
let prevCartState;
appStore.subscribe(() => {
  // console.log("subscribed to stored ", appStore.getState().cart);
  const currCartState = appStore.getState().cart;
  if (prevCartState !== currCartState) {
    saveItemsToLocalStorage(appStore.getState());
    prevCartState = currCartState;
  }
});
export default appStore;
