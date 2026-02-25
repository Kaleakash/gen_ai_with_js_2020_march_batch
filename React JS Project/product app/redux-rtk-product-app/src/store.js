import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
let storeRef = configureStore(
    {
        reducer: {
            // reducers will be added here
            productReducer: productSlice
        }
    }
)

export default storeRef;