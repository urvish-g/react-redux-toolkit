import { createSlice } from "@reduxjs/toolkit";
import { selectedProduct } from "../action/productActions";

const initialState = {
    data: [],
    isLoading: false
};

const productDetailSlice = createSlice({
    name:"selected-product",
    initialState,
    reducers:{},
    extraReducers:{
        [selectedProduct.pending]: (state, action)=>{
            state.isLoading = true;
        },
        [selectedProduct.fulfilled]: (state, {payload})=>{
            state.isLoading = false;
            state.data = payload
        },
        [selectedProduct.rejected]: (state, action)=>{
            state.isLoading = false;
        }
    }
})

export default productDetailSlice.reducer;