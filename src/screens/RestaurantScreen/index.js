import { Text, ImageBackground, Image, Pressable } from "react-native";
import { useState, useCallback } from "react";
import { doc, setDoc } from "firebase/firestore";

import { styles } from "./styles";
import {
  CartModal,
  GoBackButton,
  Icon,
  MenuList,
  View,
} from "../../components";
import { Colors } from "../../theme/colors";

export const RestaurantScreen = ({ route }) => {
  const {
    params: { restaurant },
  } = route;

  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [cart, setCart] = useState({
    deliveryPrice: restaurant.deliveryPrice,
    minOrder: restaurant.minOrder,
    items: [],
  });

  const addToCart = (dish) => {
    setCart((prevState) => ({
      ...prevState,
      items: [...(prevState.items || []), dish],
    }));
  };

  const toggleCartVisibility = useCallback(() => {
    setCartModalVisible((prevState) => !prevState);
  }, []);

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
        <MenuList data={restaurant.menu} onAddtoCart={addToCart} />
      </View>

      {cart.items.length ? (
        <Pressable style={styles.cartBanner} onPress={toggleCartVisibility}>
          <Icon
            name="cart"
            size={32}
            color={Colors.white}
            style={styles.cartIcon}
          />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cart.items.length}</Text>
          </View>
          <Text style={styles.cartBannerText}>Go to cart</Text>
          <Text style={styles.orderPrice}>(50.99 zł)</Text>
        </Pressable>
      ) : null}

      <CartModal
        open={cartModalVisible}
        onClose={toggleCartVisibility}
        order={cart}
      />
    </View>
  );
};

// TODO: fix order price inside cart banner
// TODO: fix addToCart function
// TODO: firestore or context ???
