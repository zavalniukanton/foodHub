import { Text } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { useCartContext } from "../../context/cartContext";
import { View } from "../View";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { AmountSelect } from "../AmountSelect";

export const CartItem = ({ item, restaurantId }) => {
  const { onUpdateAmount, onRemoveFromCart } = useCartContext();

  const changeAmount = (newAmount) => {
    onUpdateAmount({ newAmount, restaurantId, itemId: item.id });
  };

  const deleteItemFromCart = () => {
    onRemoveFromCart({ restaurantId, itemId: item.id });
  };

  const totalItemPrice = (
    item.amount *
    (item.price +
      item.selectedOptions.reduce((total, option) => total + option.price, 0))
  ).toFixed(2);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{totalItemPrice} zł</Text>
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
