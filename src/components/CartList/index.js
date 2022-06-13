import { FlatList } from "react-native";

import { CartItem } from "../CartItem";

export const CartList = ({ data }) => {
  return (
    <FlatList
      data={data?.items}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <CartItem item={item} restaurantId={data?.restaurantId} />
      )}
    />
  );
};
