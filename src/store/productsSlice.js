import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    favProducts: [],
    cartProducts: [],
  },
  reducers: {
    addToFav: (state, action) => {
      const alreadyExist = state.favProducts.filter(
        (fp) => fp.id === action.payload.id
      );
      if (alreadyExist.length === 0) {
        state.favProducts = [...state.favProducts, action.payload];
      }
    },
    addToCart: (state, action) => {
      const alreadyExist = state.cartProducts.filter(
        (p) => p.id === action.payload.id
      );
      if (alreadyExist.length > 0) {
        state.cartProducts.map((p) => {
          if (p.id === action.payload.id) {
            p.quantity = p.quantity + action.payload.quantity;
          }
        });
      } else {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },
  },
});

export const { addToFav, addToCart } = productsSlice.actions;

export default productsSlice.reducer;
