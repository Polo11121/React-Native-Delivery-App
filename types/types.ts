export type DishType = {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
};

export type RestaurantType = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number | null;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: DishType[];
  lng: number | null;
  lat: number | null;
  price?: number;
};

export type RestaurantSanityType = {
  _id: string;
  name: string;
  rating: number;
  short_description: string;
  address: string;
  lat: number;
  long: number;
  image: string;
  type: {
    name: string;
  };
  dishes: DishType[];
};
