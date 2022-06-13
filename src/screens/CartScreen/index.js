import { Text } from "react-native";
import { useCallback } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { CartList, Icon, View, Button } from "../../components";
import { navigation } from "../../navigation/navigationRef";
import { useCartContext } from "../../context/cartContext";
import { useOrderContext } from "../../context/orderContext";

export const CartScreen = ({ route }) => {
  const {
    params: { restaurantId },
  } = route;

  const {
    cart,
    subtotalPrice,
    totalPrice,
    isEnoughForDelivering,
    remainingPrice,
  } = useCartContext();

  const { onAddToOrders } = useOrderContext();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleCheckout = () => {
    onAddToOrders({
      ...cart[restaurantId],
      orderAt: new Date(),
      orderStatus: "in progress",
      orderPrice: totalPrice(restaurantId),
    });
    navigation.navigate("Orders");
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalHeader}>
        <Button style={styles.closeButton} onPress={handleGoBack}>
          <Icon name="close" size={24} color={Colors.black} />
        </Button>

        <Text style={styles.cartTitle}>Cart</Text>
      </View>

      <CartList data={cart[restaurantId]} />

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Subtotal</Text>
        <Text style={styles.priceText}>{subtotalPrice(restaurantId)} zł</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Delivery cost</Text>
        <Text style={styles.priceText}>
          {cart[restaurantId].deliveryPrice} zł
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={{ ...styles.priceText, fontWeight: "600" }}>Total</Text>
        <Text style={{ ...styles.priceText, fontWeight: "600" }}>
          {totalPrice(restaurantId)} zł
        </Text>
      </View>

      {!isEnoughForDelivering(restaurantId) ? (
        <View style={styles.alert}>
          <View style={styles.alertTop}>
            <Text style={{ ...styles.alertTet, flexShrink: 1 }}>
              Remaining amount to reach minimum order value
            </Text>
            <Text style={{ ...styles.alertTet, marginLeft: 6 }}>
              {remainingPrice(restaurantId)} zł
            </Text>
          </View>

          <Text style={styles.alertTet}>
            Unfortunately, you can not order yet. Delivery starting from a
            minimum order value {cart[restaurantId].minOrder} zł (excl. delivery
            cost)
          </Text>
        </View>
      ) : null}

      {!isEnoughForDelivering(restaurantId) ? (
        <Button style={styles.actionButton} onPress={handleGoBack}>
          <Text style={styles.actionButtonText}>Add more items</Text>
        </Button>
      ) : (
        <Button style={styles.actionButton} onPress={handleCheckout}>
          <Text style={styles.actionButtonText}>Checkout</Text>
        </Button>
      )}
    </View>
  );
};
