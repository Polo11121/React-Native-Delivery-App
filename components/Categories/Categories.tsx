import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { CategoryCard } from "components/CategoryCard/CategoryCard";
import client, { urlFor } from "sanity";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        gap: 5,
      }}
    >
      {categories?.map(({ _id, name, image }) => (
        <CategoryCard key={_id} title={name} imgUrl={urlFor(image).url()} />
      ))}
    </ScrollView>
  );
};
