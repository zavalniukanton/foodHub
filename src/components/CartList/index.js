import { FlatList } from "react-native";

import { CartItem } from "../CartItem";

export const CartList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return <CartItem item={item} />;
      }}
    />
  );
};
