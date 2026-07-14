import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../slice/ProductSlice";

 
const store = configureStore({
    reducer:{
        ProductStore: ProductSlice
    }
})

export default store