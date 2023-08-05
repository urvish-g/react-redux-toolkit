import { configureStore } from "@reduxjs/toolkit";
import ProductDetailSlice from "./slice/ProductDetailSlice";
import ProductSlice from "./slice/ProductSlice";

const store = configureStore({reducer: {
    product: ProductSlice,
    selectedProduct: ProductDetailSlice
}});

export default store;