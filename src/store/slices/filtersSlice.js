import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  sort: "popular",
  ignorEffect: true,
  products: [],
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    setIgnorEffect: (state, action) => {
      state.ignorEffect = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  }
})

export const { setSearchValue, setSort, setIgnorEffect, setProducts } = filtersSlice.actions
export default filtersSlice.reducer