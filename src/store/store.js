import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import category from "./categorySlice";

const store = configureStore({
  reducer: {
    products,
    category,
  },
});

export default store;
