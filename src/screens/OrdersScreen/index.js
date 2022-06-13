import { Text } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { useOrderContext } from "../../context/orderContext";
import { navigation } from "../../navigation/navigationRef";
import { Button, Icon, OrderList, View } from "../../components";

export const OrdersScreen = () => {
  const { orders } = useOrderContext();

  const handleClose = () => {
    navigation.navigate("Home");
  };

  if (!orders.length)
    return (
      <View style={styles.noOrdersContainer}>
        <Icon name="cart" size={44} color={Colors.blue} />
        <Text style={styles.noOrdersTitle}>No orders yet</Text>
        <Text style={styles.noOrdersDescription}>
          You have not placed any orders yet
        </Text>
        <Button style={styles.chooseRestaurantButton} onPress={handleClose}>
          <Text style={styles.chooseRestaurantButtonText}>
            Browse restaurants
          </Text>
        </Button>
      </View>
    );

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
