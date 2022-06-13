import { Text, Image } from "react-native";
import { useState, useEffect } from "react";

import { styles } from "./styles";
import { View } from "../View";

export const OrderItem = ({ item }) => {
  const [orderStatus, setOrderStatus] = useState();

  useEffect(() => {
    setOrderStatus(item.orderStatus);

    setTimeout(() => {
      setOrderStatus("under way");

      setTimeout(() => {
        setOrderStatus("delivered");
      }, 9000);
    }, 5000);
  }, []);

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
            Status:{" "}
            <Text style={styles.orderStatus(orderStatus)}>{orderStatus}</Text>
          </Text>
        </View>
        <Text style={styles.oredrPrice}>{item.orderPrice} zł</Text>
      </View>
    </View>
  );
};
