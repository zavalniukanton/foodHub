import { Text, Modal } from "react-native";
import { useMemo, useCallback } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Icon } from "../Icon";
import { View } from "../View";
import { Button } from "../Button";
import { CartList } from "../CartList";

export const CartModal = ({ open, onClose, order }) => {
  const subtotalPrice = useMemo(
    () =>
      order.items
        .reduce((total, item) => (total += Number(item.totalPrice)), 0)
        .toFixed(2),
    [order.items]
  );

  const totalPrice = useMemo(
    () => (Number(subtotalPrice) + order.deliveryPrice).toFixed(2),
    [subtotalPrice]
  );

  const isEnoughForDelivering = Number(subtotalPrice) >= order.minOrder;

  const remainingPrice = useMemo(
    () => (order.minOrder - Number(subtotalPrice)).toFixed(2),
    [subtotalPrice]
  );

  const handleAddMoreButtonClick = useCallback(() => {
    onClose();
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={open}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Button style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} color={Colors.white} />
          </Button>

          <Text style={styles.cartTitle}>Cart</Text>
        </View>

        <CartList data={order.items} />

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Subtotal</Text>
          <Text style={styles.priceText}>{subtotalPrice} zł</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Delivery cost</Text>
          <Text style={styles.priceText}>{order.deliveryPrice} zł</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={{ ...styles.priceText, fontWeight: "600" }}>Total</Text>
          <Text style={{ ...styles.priceText, fontWeight: "600" }}>
            {totalPrice} zł
          </Text>
        </View>

        {!isEnoughForDelivering ? (
          <View style={styles.alert}>
            <View style={styles.alertTop}>
              <Text style={{ ...styles.alertTet, flexShrink: 1 }}>
                Remaining amount to reach minimum order value
              </Text>
              <Text style={{ ...styles.alertTet, marginLeft: 6 }}>
                {remainingPrice} zł
              </Text>
            </View>

            <Text style={styles.alertTet}>
              Unfortunately, you can not order yet. Delivery starting from a
              minimum order value {order.minOrder} zł (excl. delivery cost)
            </Text>
          </View>
        ) : null}

        {!isEnoughForDelivering ? (
          <Button
            style={styles.actionButton}
            onPress={handleAddMoreButtonClick}
          >
            <Text style={styles.actionButtonText}>Add more items</Text>
          </Button>
        ) : (
          <Button style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Checkout</Text>
          </Button>
        )}
      </View>
    </Modal>
  );
};
