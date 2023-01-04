import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "./baseURL";
let base=baseURL
export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (id,{dispatch,getState}) => {
      console.log('id',id)
    const res = await fetch(`${base}/products/${id}`);
    const data = await res.json();
    return data;
  }
);
