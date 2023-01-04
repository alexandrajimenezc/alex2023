import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "./baseURL";
let base=baseURL
export const getProducts = createAsyncThunk(
  "productsList/getProducts",
  async ({page,limit,keyword },{dispatch,getState}) => {
       let dataPage= page ||'1'
       let dataLimit= limit ||10
       let dataKeyword =keyword || ''
// const {lo que esta en store}=getState
    //   return fetch(`http://localhost:3000/products`).then(res=> res.json())
    const res = await fetch(`${base}/products?page=${dataPage}&limit=${dataLimit}&keyword=${dataKeyword}`);
    const data = await res.json();
    return data;
  }
);
