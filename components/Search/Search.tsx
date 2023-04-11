import { TextInput, View } from "react-native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";

export const Search = () => (
  <View className="flex-row items-center p-3 pt-0 gap-2">
    <View className="flex-1 flex-row bg-gray-200 items-center p-3">
      <MagnifyingGlassIcon color="gray" size={20} />
      <TextInput
        className="space-x-2 flex-1 ml-2"
        placeholder="Restaurants and cuisines"
        keyboardType="default"
      />
    </View>
    <AdjustmentsVerticalIcon color="#00CCBB" />
  </View>
);
