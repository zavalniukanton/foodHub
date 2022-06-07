import { Text, ImageBackground, Image, Pressable } from "react-native";
import { useState, useCallback, useMemo } from "react";

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
  const [isCardPresed, setIsCardPressed] = useState({
    cardId: null,
    expanded: false,
  });
  const [cartLocal, setCartLocal] = useState({
    deliveryPrice: restaurant.deliveryPrice,
    minOrder: restaurant.minOrder,
    items: [],
  });

  const toggleOnCardPress = (cardId, isPressed) => {
    setIsCardPressed((prevState) => ({
      cardId,
      expanded:
        cardId === prevState.cardId && prevState.expanded === true
          ? false
          : isPressed,
    }));
  };

  const addToCart = (dish) => {
    setCartLocal((prevState) => ({
      ...prevState,
      items: [...(prevState.items || []), dish],
    }));
  };

  const toggleCartVisibility = useCallback(() => {
    setCartModalVisible((prevState) => !prevState);
  }, []);

  const totalPriceOnCartBanner = useMemo(() => {
    if (cartLocal.items.length) {
      return (
        restaurant.deliveryPrice +
        cartLocal.items.reduce(
          (total, item) => (total += Number(item.totalPrice)),
          0
        )
      ).toFixed(2);
    }
  }, [cartLocal.items.length]);

  return (
    <View isSafe style={styles.container}>
      {!isCardPresed.expanded === true ? (
        <>
          <ImageBackground
            style={styles.header}
            source={{ uri: restaurant.image }}
          >
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
        </>
      ) : null}

      <Text style={styles.menu}>Menu</Text>

      <MenuList
        data={restaurant.menu}
        onAddtoCart={addToCart}
        toggleOnCardPress={toggleOnCardPress}
        isCardPresed={isCardPresed}
      />

      {cartLocal.items.length ? (
        <Pressable style={styles.cartBanner} onPress={toggleCartVisibility}>
          <Icon
            name="cart"
            size={32}
            color={Colors.white}
            style={styles.cartIcon}
          />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartLocal.items.length}</Text>
          </View>
          <Text style={styles.cartBannerText}>Go to cart</Text>
          <Text style={styles.orderPrice}>({totalPriceOnCartBanner} zł)</Text>
        </Pressable>
      ) : null}

      <CartModal
        open={cartModalVisible}
        onClose={toggleCartVisibility}
        order={cartLocal}
      />
    </View>
  );
};
