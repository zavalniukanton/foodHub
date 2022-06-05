import { Text } from "react-native";

import { styles } from "./styles";
import { GoBackButton, View } from "../../components";

export const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <GoBackButton style={styles.goBackButton} />
      <Text>OrdersScreen</Text>
    </View>
  );
};
