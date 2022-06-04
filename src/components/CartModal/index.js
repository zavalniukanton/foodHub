import { Text, Modal } from "react-native";
import { useMemo } from "react";

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
    []
  );

  const totalPrice = useMemo(
    () => Number(subtotalPrice) + order.deliveryPrice,
    [subtotalPrice]
  );

  return (
    <Modal animationType="slide" visible={open} onRequestClose={onClose}>
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
      </View>
    </Modal>
  );
};
