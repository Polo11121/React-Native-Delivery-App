import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "store/restaurantSlice";
import cartSlice from "store/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
