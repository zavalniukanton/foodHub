import { Text, FlatList, Pressable, Image } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { Icon } from "../Icon";
import { Colors } from "../../theme/colors";
import { navigation } from "../../navigation/navigationRef";

export const RestaurantsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const handleOnCardPress = () => {
          navigation.navigate("Restaurant", {
            restaurantId: item.id,
            restaurant: item,
          });
        };

        return (
          <Pressable style={styles.card} onPress={handleOnCardPress}>
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
                {item.isDelivery ? (
                  <>
                    <Icon
                      name="clock"
                      color={Colors.blue}
                      size={18}
                      style={styles.deliveryInfoIcon}
                    />
                    <Text style={styles.deliveryInfoText}>
                      {item.deliveryMinTime} - {item.deliveryMaxTime} min
                    </Text>
                    <Icon
                      name="bike"
                      color={Colors.blue}
                      size={18}
                      style={styles.deliveryInfoIcon}
                    />
                    <Text style={styles.deliveryInfoText}>
                      {item.deliveryPrice} zł
                    </Text>
                    <Icon
                      name="cart"
                      color={Colors.blue}
                      size={18}
                      style={styles.deliveryInfoIcon}
                    />
                    <Text style={styles.deliveryInfoText}>
                      Min. {item.minOrder} zł
                    </Text>
                  </>
                ) : (
                  <>
                    <Icon name="walk" color={Colors.blue} size={18} />
                    <Text style={styles.deliveryInfoText}>
                      {item.distance} m
                    </Text>

                    <Icon name="map-marker" color={Colors.blue} size={18} />
                    <Text style={styles.deliveryInfoText}>{item.address}</Text>
                  </>
                )}
              </View>
            </View>
          </Pressable>
        );
      }}
    />
  );
};
