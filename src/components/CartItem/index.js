import { Text } from "react-native";

import { styles } from "./styles";
import { View } from "../View";

export const CartItem = ({ item }) => {
  console.log("item", item);
  return (
    <View style={styles.card}>
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );
};
