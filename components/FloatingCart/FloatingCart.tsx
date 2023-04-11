import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { selectCartItems, selectCartTotal } from "store/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import Currency from "react-currency-formatter";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const FloatingCart = () => {
  const navigation = useNavigation<Navigation>();
  const items = selectCartItems();
  const itemsTotal = selectCartTotal();

  const onPressHandler = () => navigation.navigate("Cart");

  return items.length ? (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={onPressHandler}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={itemsTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  ) : null;
};
