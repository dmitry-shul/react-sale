import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  num: 1,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const {product, amount} = action.payload
      state.cart.forEach(item => {
        if(item.product.id === product.id) {
          item.amount++;
          state.num = 2;
        }
      })
      state.num === 1 && state.cart.push(action.payload)
      state.num = 1;
    },
    delCartItem: (state, action) => {
      state.cart = state.cart.filter(item => item.product.id !== action.payload.id)
    },
    order: (state, action) => {
      state.cart = action.payload
    },
  }
})

export const { setCart, delCartItem, order } = cartSlice.actions
export default cartSlice.reducer