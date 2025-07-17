import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart_1";

export const dukan = configureStore({
    reducer: {
        CartsSlice: CartReducer,
    }
})