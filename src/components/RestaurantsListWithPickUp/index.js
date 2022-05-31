import { Text, FlatList, Pressable, Image } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { Icon } from "../Icon";
import { Colors } from "../../theme/colors";

export const RestaurantsListWithPickup = ({ data }) => {
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
                <Icon name="walk" color={Colors.gray} size={18} />
                <Text style={styles.deliveryInfoText}>{item.distance} m</Text>

                <Icon name="map-marker" color={Colors.gray} size={18} />
                <Text style={styles.deliveryInfoText}>{item.address}</Text>

                <Icon name="clock" color={Colors.gray} size={18} />
                <Text style={styles.deliveryInfoText}>
                  {item.startAt} - {item.stopAt}
                </Text>
              </View>
            </View>
          </Pressable>
        );
      }}
    />
  );
};
