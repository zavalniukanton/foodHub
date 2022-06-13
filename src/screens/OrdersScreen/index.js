import { Text } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { useOrderContext } from "../../context/orderContext";
import { navigation } from "../../navigation/navigationRef";
import { Button, OrderList, View } from "../../components";

export const OrdersScreen = () => {
  const { orders } = useOrderContext();

  const handleClose = () => {
    navigation.navigate("Home");
  };

  return (
    <View isSafe style={styles.container}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Orders</Text>
        <Button
          borderless
          title="Close"
          onPress={handleClose}
          color={Colors.white}
          style={styles.closeButton}
        />
      </View>

      <OrderList data={orders} />
    </View>
  );
};
