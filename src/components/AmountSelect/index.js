import { Text } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { View } from "../View";

export const AmountSelect = ({ amount, onChange }) => {
  const decrementAmount = () => {
    if (amount === 1) return amount;

    onChange(amount - 1);
  };

  const incrementAmount = () => {
    onChange(amount + 1);
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={decrementAmount}>
        <Icon name="minus" size={24} color={Colors.gray} />
      </Button>

      <Text style={styles.amount}>{amount}</Text>

      <Button style={styles.button} onPress={incrementAmount}>
        <Icon name="plus" size={24} color={Colors.gray} />
      </Button>
    </View>
  );
};
