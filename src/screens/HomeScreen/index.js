import { Text, DrawerLayoutAndroid, Dimensions } from "react-native";
import { useState, useEffect, useRef } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { styles } from "./styles";
import { db } from "../../config/firebase";
import {
  View,
  Button,
  FoodCategoriesList,
  RestaurantsList,
  Icon,
  DrawerMenu,
} from "../../components";
import { Colors } from "../../theme/colors";
import { getDrawerMenuWidth } from "../../utils/getDrawerMenuWidth";

const screen = Dimensions.get("screen");

export const HomeScreen = () => {
  const drawer = useRef(null);
  const [activeTab, setActiveTab] = useState("delivery");
  const [foodCategories, setFoodCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [restaurantsWithDelivery, setRestaurantsWithDelivery] = useState([]);
  const [restaurantsWithPickup, setRestaurantsWithPickup] = useState([]);

  const categoriesToDisplay = foodCategories.filter(
    (category, index, array) => category.id < 7 || index === array.length - 1
  );

  useEffect(() => {
    const foodCategoriesRef = collection(db, "foodCategories");
    const q = query(foodCategoriesRef, orderBy("id"));

    onSnapshot(q, (querySnapshot) => {
      setFoodCategories(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    const restaurantsWithDeliveryRef = collection(db, "restaurants");
    const q = query(restaurantsWithDeliveryRef, orderBy("id"));

    onSnapshot(q, (querySnapshot) => {
      setRestaurantsWithDelivery(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    const restaurantsWithPickupRef = collection(db, "restaurantsWithPickup");
    const q = query(restaurantsWithPickupRef, orderBy("id"));

    onSnapshot(q, (querySnapshot) => {
      setRestaurantsWithPickup(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleMenuOpen = () => {
    drawer.current.openDrawer();
  };

  const handleDeliveryTabClick = () => {
    setActiveTab("delivery");
    setSelectedCategory("All");
  };

  const handlePickupTabClick = () => {
    setActiveTab("pickup");
    setSelectedCategory("All");
  };

  const handleFoodCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const showRestaurantsList = (category) => {
    if (category === "All") {
      return activeTab === "delivery" ? (
        <RestaurantsList data={restaurantsWithDelivery} />
      ) : (
        <RestaurantsList data={restaurantsWithPickup} />
      );
    }

    if (category === "Show more") {
      return <Text>Modal with all categories is opened</Text>;
    }

    return activeTab === "delivery" ? (
      <RestaurantsList
        data={restaurantsWithDelivery.filter((restaurant) =>
          restaurant.category.includes(category)
        )}
      />
    ) : (
      <RestaurantsList
        data={restaurantsWithPickup.filter((restaurant) =>
          restaurant.category.includes(category)
        )}
      />
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={getDrawerMenuWidth(screen)}
      renderNavigationView={DrawerMenu}
    >
      <View isSafe style={styles.container}>
        <View style={styles.pageHeader}>
          <Button onPress={handleMenuOpen}>
            <Icon name="menu" color={Colors.white} size={24} />
          </Button>
        </View>

        <View style={styles.tabsContainer}>
          <Button
            style={styles.tab(activeTab === "delivery")}
            onPress={handleDeliveryTabClick}
          >
            <Text style={styles.tabName(activeTab === "delivery")}>
              Delivery
            </Text>
          </Button>

          <Button
            style={styles.tab(activeTab === "pickup")}
            onPress={handlePickupTabClick}
          >
            <Text style={styles.tabName(activeTab === "pickup")}>Pick up</Text>
          </Button>
        </View>

        <View style={styles.categoriesContainer}>
          <FoodCategoriesList
            data={categoriesToDisplay}
            selectedCategory={selectedCategory}
            onSelectCategory={handleFoodCategoryClick}
          />
        </View>

        {showRestaurantsList(selectedCategory)}
      </View>
    </DrawerLayoutAndroid>
  );
};
