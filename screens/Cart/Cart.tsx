import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import React, { useMemo, useState } from "react";
import Currency from "react-currency-formatter";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { removeItem, selectCartItems, selectCartTotal } from "store/cartSlice";
import { useAppDispatch } from "store/hooks";
import { selectRestaurant } from "store/restaurantSlice";
import { RestaurantType } from "types/types";

type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

export const Cart = ({ navigation }: Props) => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<{
    [key: number]: RestaurantType[];
  }>([]);
  const restaurant = selectRestaurant();
  const items = selectCartItems();
  const itemsTotal = selectCartTotal();
  const dispatch = useAppDispatch();

  useMemo(() => {
    if (items) {
      const groupItems = items.reduce((results: RestaurantType[], item) => {
        const index = +item.id;
        (
          (results[index] = results[index] || []) as unknown as RestaurantType[]
        ).push(item);
        return results;
      }, []);

      setGroupedItemsInBasket(
        groupItems as unknown as { [key: number]: RestaurantType[] }
      );
    }
  }, [items]);

  return (
    <SafeAreaView className=" bg-white pt-10 flex-1">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <Text className="text-lg font-bold text-center">Basket</Text>

          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" rounded-full bg-gray-100 absolute top-3 right-3"
        >
          <XCircleIcon height={50} width={50} color="#00CCBB" />
        </TouchableOpacity>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, value]) => (
            <View
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
              key={key}
            >
              <Text className="text-[#00CCBB]">{items?.length} x</Text>
              <Image
                source={{
                  uri: value[0]?.imgUrl,
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="">{items[0]?.title}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price as number} currency="GBP" />
              </Text>
              <TouchableOpacity>
                <Text
                  className="
                text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeItem({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={itemsTotal} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="text-black font-extrabold">
              <Currency quantity={itemsTotal + 5.99} currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PlaceOrder")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
