import { FlatList } from "react-native";

import { MenuItem } from "../MenuItem";

export const MenuList = ({
  data,
  onAddtoCart,
  toggleOnCardPress,
  isCardPresed,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MenuItem
          item={item}
          onAddtoCart={onAddtoCart}
          toggleOnCardPress={toggleOnCardPress}
          isCardPresed={isCardPresed}
        />
      )}
    />
  );
};
