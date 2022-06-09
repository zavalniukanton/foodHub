import { Text, ImageBackground, Image, Pressable } from "react-native";
import { useState, useCallback, useMemo } from "react";

import { styles } from "./styles";
import { GoBackButton, Icon, MenuList, View } from "../../components";
import { Colors } from "../../theme/colors";
import { navigation } from "../../navigation/navigationRef";
import { useCartContext } from "../../context/cartContext";

export const RestaurantScreen = ({ route }) => {
  const {
    params: { restaurant },
  } = route;

  const { cart, onAddToCartContext } = useCartContext();

  const [isCardPresed, setIsCardPressed] = useState({
    cardId: null,
    expanded: false,
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

  const handleCartBannerPress = useCallback(() => {
    navigation.navigate("Cart", { order: cart?.[restaurant.id] });
  }, [cart?.[restaurant.id]]);

  const addToCart = (dish) => {
    onAddToCartContext({
      data: {
        deliveryPrice: restaurant.deliveryPrice,
        minOrder: restaurant.minOrder,
        menuItem: dish,
      },
      restaurantId: restaurant.id,
    });
  };

  const totalPriceOnCartBanner = useMemo(() => {
    if (cart?.[restaurant.id]?.items?.length) {
      return (
        restaurant.deliveryPrice +
        cart?.[restaurant.id]?.items?.reduce(
          (total, item) => (total += Number(item.totalPrice)),
          0
        )
      ).toFixed(2);
    }
  }, [cart?.[restaurant.id]?.items?.length]);

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

      {cart?.[restaurant.id]?.items?.length ? (
        <Pressable style={styles.cartBanner} onPress={handleCartBannerPress}>
          <Icon
            name="cart"
            size={32}
            color={Colors.white}
            style={styles.cartIcon}
          />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>
              {cart?.[restaurant.id]?.items?.length}
            </Text>
          </View>
          <Text style={styles.cartBannerText}>Go to cart</Text>
          <Text style={styles.orderPrice}>({totalPriceOnCartBanner} zł)</Text>
        </Pressable>
      ) : null}
    </View>
  );
};
