import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { DishRow } from "components/DishRow/DishRow";
import { urlFor } from "sanity";
import { FloatingCart } from "components/FloatingCart/FloatingCart";
import { useAppDispatch } from "store/hooks";
import { setRestaurant } from "store/restaurantSlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";

type Props = NativeStackScreenProps<RootStackParamList, "Restaurant">;

export const Restaurant = ({ route, navigation }: Props) => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      lng,
      lat,
    },
  } = route;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        lat,
        lng,
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <FloatingCart />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: imgUrl,
            }}
            className="w-full h-56 bg-gray-300- p-4"
          />
          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-5">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>
              <View className="flex-row item-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-xs text-gray-500 items-center">
                    Nearby • {address}
                  </Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4"> {shortDescription}</Text>
          </View>
          <TouchableOpacity className="flex-row bg-white items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              _id={dish._id}
              name={dish.name}
              short_description={dish.short_description}
              price={dish.price}
              image={urlFor(dish.image).url()}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
