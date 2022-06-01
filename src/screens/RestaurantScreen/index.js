import { Text, ImageBackground, Image, Pressable } from "react-native";

import { styles } from "./styles";
import { GoBackButton, Icon, MenuList, View } from "../../components";
import { Colors } from "../../theme/colors";

export const RestaurantScreen = ({ route }) => {
  const {
    params: { restaurant },
  } = route;

  return (
    <View isSafe style={styles.container}>
      <ImageBackground style={styles.header} source={{ uri: restaurant.image }}>
        <GoBackButton style={{ left: 20, top: 20 }} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{ uri: restaurant.logo }} />
        </View>
      </ImageBackground>

      <View style={styles.titleSection}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Pressable style={styles.actionButton("info")}>
          <Icon name="information-variant" size={24} color={Colors.blue} />
        </Pressable>
        <Pressable style={styles.actionButton("heart")}>
          <Icon name="cards-heart-outline" size={24} color={Colors.blue} />
        </Pressable>
      </View>

      <View style={styles.ratingSection}>
        <Icon
          name="star"
          color={Colors.orange}
          size={20}
          style={{ marginRight: 4 }}
        />
        <Text style={styles.rating}>{restaurant.rating}</Text>
        <Text style={styles.review}>{restaurant.review} reviews</Text>
      </View>

      <Text style={styles.menu}>Menu</Text>

      <View style={styles.menuSection}>
        <MenuList data={restaurant.menu} />
      </View>
    </View>
  );
};
