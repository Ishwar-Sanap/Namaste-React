const saveItemsToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
    localStorage.setItem("totalItems", state.cart.totalItems)
    localStorage.setItem("totalPrice", state.cart.totalPrice)
    
  } catch (e) {
    console.log("Could not save state ", e);
  }
};

export default saveItemsToLocalStorage;
