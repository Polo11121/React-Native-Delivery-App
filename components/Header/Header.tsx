import { Image, Text, View } from "react-native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

export const Header = () => (
  <View className="flex-row pb-3 items-center ml-4 mr-2 space-x-2">
    <Image
      source={{ uri: "https://links.papareact.com/wru" }}
      className="h-7 w-7 bg-gray-300 p-4 rounded-full"
    />
    <View className="flex-1">
      <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
      <View className="flex-row items-center">
        <Text className="font-bold text-xl">Current Location</Text>
        <ChevronDownIcon size={20} color="#00CCBB" />
      </View>
    </View>
    <UserIcon size={35} color="#00CCBB" />
  </View>
);
