const loadItemsFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

const loadTotalPriceFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("totalPrice");
    return Number(data);
  } catch {
    return 0;
  }
};
const loadTotalItemsFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("totalItems");
     return Number(data);
  } catch {
    return 0;
  }
};


export {loadItemsFromLocalStorage, loadTotalItemsFromLocalStorage, loadTotalPriceFromLocalStorage}
