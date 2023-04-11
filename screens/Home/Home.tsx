import { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "components/Header/Header";
import { Search } from "components/Search/Search";
import { Categories } from "components/Categories/Categories";
import { RootStackParamList } from "App";
import { FeaturedRow } from "components/FeaturedRow/FeaturedRow";
import "react-native-url-polyfill/auto";
import client from "sanity";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: Props) => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->
        }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <Header />
      <Search />
      <ScrollView
        className="flex-1 bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {featuredCategories?.map(({ _id, name, short_description }) => (
          <FeaturedRow
            key={_id}
            id={_id}
            title={name}
            description={short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
