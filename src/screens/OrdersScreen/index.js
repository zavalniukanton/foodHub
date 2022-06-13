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
      <View style={styles.emptyOrdersContainer}>
        <Icon name="cart" size={44} color={Colors.blue} />
        <Text style={styles.emptyOrdersTitle}>No orders yet</Text>
        <Text style={styles.emptyOrdersDescription}>
          You have not placed any orders yet
        </Text>
        <Button style={styles.browseRestaurantButton} onPress={handleClose}>
          <Text style={styles.browseRestaurantButtonText}>
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
