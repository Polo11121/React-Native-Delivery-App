import { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useAppDispatch } from "store/hooks";
import { addItem, removeItem, selectCartItemsWithId } from "store/cartSlice";
import { DishType } from "types/types";
import Currency from "react-currency-formatter";

export const DishRow = ({
  _id,
  image,
  price,
  name,
  short_description,
}: DishType) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = selectCartItemsWithId(_id);
  const dispatch = useAppDispatch();

  const onPressHandler = () => setIsPressed(!isPressed);

  return (
    <>
      <TouchableOpacity
        className={`bg-white p-4${isPressed ? "" : " border border-gray-200"}`}
        onPress={onPressHandler}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400 mt-2">{short_description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
              }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{
                uri: image,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={() => dispatch(removeItem({ id: _id }))}
            >
              <MinusCircleIcon
                color={items.length ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  addItem({
                    id: _id,
                    imgUrl: image,
                    price,
                    name,
                    description: short_description,
                  })
                )
              }
            >
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
