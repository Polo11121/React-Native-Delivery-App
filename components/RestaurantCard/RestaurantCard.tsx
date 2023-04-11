import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { RestaurantType } from "types/types";
import { RootStackParamList } from "App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RestaurantCardProps = RestaurantType;

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export const RestaurantCard = ({
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
}: RestaurantCardProps) => {
  const navigation = useNavigation<Navigation>();

  const goToRestaurantDetailsHandler = () =>
    navigation.navigate("Restaurant", {
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
    });

  return (
    <TouchableOpacity
      className="bg-white  elevation rounded-sm"
      onPress={goToRestaurantDetailsHandler}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 outline-none	rounded-t-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500 items-center flex-row">
            Nearby • {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
