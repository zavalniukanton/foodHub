import { Text, ImageBackground, Image, Pressable } from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { GoBackButton, Icon, MenuList, View } from "../../components";
import { Colors } from "../../theme/colors";
import { navigation } from "../../navigation/navigationRef";
import { useCartContext } from "../../context/cartContext";

export const RestaurantScreen = ({ route }) => {
  const {
    params: { restaurant },
  } = route;

  const { cart, onAddToCart } = useCartContext();

  const [isCardPresed, setIsCardPressed] = useState({
    cardId: null,
    expanded: false,
  });

  const restaurantCartLength = cart?.[restaurant.id]?.items?.length;

  const toggleOnCardPress = (cardId, isPressed) => {
    setIsCardPressed((prevState) => ({
      cardId,
      expanded:
        cardId === prevState.cardId && prevState.expanded === true
          ? false
          : isPressed,
    }));
  };

  const handleCartBannerPress = () => {
    navigation.navigate("Cart", { restaurantId: restaurant.id });
  };

  const handleAddToCart = (dish) => {
    onAddToCart({
      data: {
        restaurantName: restaurant.name,
        restaurantLogo: restaurant.logo,
        deliveryPrice: restaurant.deliveryPrice,
        minOrder: restaurant.minOrder,
        menuItem: dish,
      },
      restaurantId: restaurant.id,
    });
  };

  const totalPriceForCartBanner = (
    cart?.[restaurant.id]?.items?.reduce(
      (total, item) =>
        (total +=
          item.amount *
          (item.price +
            item.selectedOptions.reduce(
              (totalOptionsPrice, option) => totalOptionsPrice + option.price,
              0
            ))),
      0
    ) + restaurant.deliveryPrice
  ).toFixed(2);

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
        onAddtoCart={handleAddToCart}
        toggleOnCardPress={toggleOnCardPress}
        isCardPresed={isCardPresed}
      />

      {restaurantCartLength > 0 ? (
        <Pressable style={styles.cartBanner} onPress={handleCartBannerPress}>
          <Icon
            name="cart"
            size={32}
            color={Colors.white}
            style={styles.cartIcon}
          />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{restaurantCartLength}</Text>
          </View>
          <Text style={styles.cartBannerText}>Go to cart</Text>
          <Text style={styles.orderPrice}>({totalPriceForCartBanner} zł )</Text>
        </Pressable>
      ) : null}
    </View>
  );
};
