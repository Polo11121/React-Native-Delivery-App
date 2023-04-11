import { Image, Text, TouchableOpacity } from "react-native";

export const CategoryCard = ({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) => (
  <TouchableOpacity className="relative">
    <Image
      source={{
        uri: imgUrl,
      }}
      className="h-20 w-20 rounded"
    />
    <Text className="absolute bottom-1 left-1 text-white font-bold">
      {title}
    </Text>
  </TouchableOpacity>
);
