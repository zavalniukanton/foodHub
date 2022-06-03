import { Text } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { AmountSelect } from "../AmountSelect";

export const CartItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.totalPrice} zł</Text>
      </View>

      {item.selectedOptions.length ? (
        item.selectedOptions.map((option) => (
          <Text key={option.id} style={styles.optionName}>
            {option.name}
          </Text>
        ))
      ) : (
        <Text style={styles.noOptions}>no selected options</Text>
      )}

      <View style={{ marginLeft: "auto" }}>
        <AmountSelect amount={item.amount} />
      </View>
    </View>
  );
};
