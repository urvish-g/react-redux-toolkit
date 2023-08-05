import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("product/addProduct", async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err: ", err);
    });
    return response.data;
});


export const selectedProduct = createAsyncThunk('selected-product/selectedProduct',async (id) =>{ 
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
    return response.data;
})