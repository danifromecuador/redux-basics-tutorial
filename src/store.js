import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/ModalSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});