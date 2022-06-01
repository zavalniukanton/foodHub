import { FlatList } from "react-native";

import { MenuItem } from "../MenuItem";

export const MenuList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return <MenuItem item={item} />;
      }}
    />
  );
};
