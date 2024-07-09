import { configureStore } from "@reduxjs/toolkit"
import filtersSlice from "./slices/filtersSlice"
import cartSlice from "./slices/cartSlice"
import resizeSlice from "./slices/resizeSlice"

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    cart: cartSlice,
    resize: resizeSlice,
  },
})