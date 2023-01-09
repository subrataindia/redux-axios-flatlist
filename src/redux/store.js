import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    productsReducer: productsReducer
  }
});
