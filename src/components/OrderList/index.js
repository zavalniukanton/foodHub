import { FlatList } from "react-native";

import { OrderItem } from "../OrderItem";

export const OrderList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.orderAt}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return <OrderItem item={item} />;
      }}
    />
  );
};
