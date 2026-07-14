import { configureStore } from "@reduxjs/toolkit";
import  Counterslice  from "./app/Counterslice";

export const store =configureStore({
    reducer: {
        count : Counterslice   
    }
})
