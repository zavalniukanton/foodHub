import { Text, Modal } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Icon } from "../Icon";
import { View } from "../View";
import { Button } from "../Button";
import { CartList } from "../CartList";

export const CartModal = ({ open, onClose, order }) => {
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
      </View>
    </Modal>
  );
};
