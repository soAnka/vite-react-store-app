import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "all",
  },
  reducers: {
    all: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { all } = categorySlice.actions;
export default categorySlice.reducer;
