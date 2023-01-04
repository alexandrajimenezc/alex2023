import { createSlice } from "@reduxjs/toolkit";
import { getOneProduct } from "./oneProduct.api";

const initialState = {
  product: {},
  status: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getOneProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [getOneProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload;
    },
    [getOneProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { updateProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
