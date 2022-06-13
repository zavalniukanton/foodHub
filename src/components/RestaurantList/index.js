import { FlatList } from "react-native";

import { RestaurantItem } from "../RestaurantItem";

export const RestaurantList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <RestaurantItem item={item} />}
    />
  );
};
