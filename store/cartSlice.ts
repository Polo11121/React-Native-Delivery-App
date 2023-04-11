import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { useAppSelector } from "store/hooks";
import { RestaurantType } from "types/types";

export type CartState = {
  items: RestaurantType[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      state.items = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export const selectCartItemsWithId = (id: string) =>
  useAppSelector((state: RootState) =>
    state.cart.items.filter((item) => item.id === id)
  );
export const selectCartItems = () =>
  useAppSelector((state: RootState) => state.cart.items);

export const selectCartTotal = () =>
  useAppSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + (item.price as number), 0)
  );

export default cartSlice.reducer;
