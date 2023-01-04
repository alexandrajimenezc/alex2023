import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products.api";

const initialState = {
  productsList: {},
  status: null,
};

export const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.productsList = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { updateProductsList } = productsListSlice.actions;

export const productsListReducer = productsListSlice.reducer;
