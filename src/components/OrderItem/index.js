import { Text, Image } from "react-native";

import { styles } from "./styles";
import { View } from "../View";

export const OrderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.restaurantLogo }} style={styles.image} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>
        <View>
          <Text style={styles.orderText}>{item.orderAt.toUTCString()}</Text>
          <Text style={styles.orderText}>
            Status: <Text style={styles.orderStatus}>{item.orderStatus}</Text>
          </Text>
        </View>
        <Text style={styles.oredrPrice}>{item.orderPrice} zł</Text>
      </View>
    </View>
  );
};
