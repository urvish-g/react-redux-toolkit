import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../action/productActions";

const initialState = {
    data: [],
    isLoading: false
    
};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:{
        [addProduct.pending]: (state, action)=>{
            state.isLoading = true;
        },
        [addProduct.fulfilled]: (state, {payload})=>{
            state.isLoading = false;
            state.data = payload
        },
        [addProduct.rejected]: (state, action)=>{
            state.isLoading = false;
        }
    }
})


// selectedProduct:(state, action)=>{
//     state.selectedProduct = action.payload
// },
// removeSelectedProduct: (state) => {
//     state.selectedProduct = {}
// }


// export const {addProduct, selectedProduct, removeSelectedProduct} = createSlice.actions;

export default productSlice.reducer;