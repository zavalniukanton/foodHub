import { Text, FlatList, Pressable, Image } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { Icon } from "../Icon";
import { Colors } from "../../theme/colors";

export const RestaurantsListWithDelivery = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Pressable style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardContent}>
              <View style={styles.titleSection}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Icon
                  name="star"
                  color={Colors.orange}
                  size={18}
                  style={{ marginLeft: "auto", marginRight: 4 }}
                />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.review}>({item.review})</Text>
              </View>

              <View style={styles.categories}>
                {item.category.map((category) => (
                  <Text key={category} style={styles.category}>
                    {category}
                  </Text>
                ))}
              </View>

              <View style={styles.deliveryInfo}>
                <Icon
                  name="clock"
                  color={Colors.gray}
                  size={18}
                  style={styles.deliveryInfoIcon}
                />
                <Text style={styles.deliveryInfoText}>
                  {item.deliveryMinTime} - {item.deliveryMaxTime} min
                </Text>

                <Icon
                  name="bicycle"
                  color={Colors.gray}
                  size={18}
                  style={styles.deliveryInfoIcon}
                />
                <Text style={styles.deliveryInfoText}>
                  {item.deliveryPrice} zł
                </Text>

                <Icon
                  name="cart"
                  color={Colors.gray}
                  size={18}
                  style={styles.deliveryInfoIcon}
                />
                <Text style={styles.deliveryInfoText}>
                  Min. {item.minOrder} zł
                </Text>
              </View>
            </View>
          </Pressable>
        );
      }}
    />
  );
};
