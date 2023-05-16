import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  ammount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState
})

// console.log(cartSlice);

export default cartSlice.reducer;