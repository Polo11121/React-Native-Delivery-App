import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { useAppSelector } from "store/hooks";
import { RestaurantType } from "types/types";

export type RestaurantState = {
  restaurant: RestaurantType;
};

const initialState: RestaurantState = {
  restaurant: {
    id: "",
    imgUrl: "",
    title: "",
    rating: null,
    genre: "",
    address: "",
    shortDescription: "",
    dishes: [],
    lat: null,
    lng: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = () =>
  useAppSelector((state: RootState) => state.restaurant.restaurant);

export default restaurantSlice.reducer;
