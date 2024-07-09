import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: false,
}

export const resizeSlice = createSlice({
  name: "resize",
  initialState,
  reducers: {
    setMobile: (state, action) => {
      state.mobile = action.payload
    },
  }
})

export const { setMobile } = resizeSlice.actions
export default resizeSlice.reducer