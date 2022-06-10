import { Text } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { AmountSelect } from "../AmountSelect";
import { Icon } from "../Icon";
import { Colors } from "../../theme/colors";
import { Button } from "../Button";
import { useCartContext } from "../../context/cartContext";

export const CartItem = ({ item, restaurantId }) => {
  const { onUpdateAmount, onRemoveFromCart } = useCartContext();

  const changeAmount = (newAmount) => {
    onUpdateAmount({ newAmount, restaurantId, itemId: item.id });
  };

  const deleteItemFromCart = () => {
    onRemoveFromCart({ restaurantId, itemId: item.id });
  };

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

      <View style={styles.actions}>
        <AmountSelect amount={item.amount} onChange={changeAmount} />
        <Button onPress={deleteItemFromCart}>
          <Icon name="trash-can-outline" size={28} color={Colors.red} />
        </Button>
      </View>
    </View>
  );
};
