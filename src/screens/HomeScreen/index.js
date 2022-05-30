import { Text } from "react-native";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { styles } from "./styles";
import { db } from "../../config/firebase";
import {
  View,
  Button,
  FoodCategoriesList,
  RestaurantsListWithDelivery,
  RestaurantsListWithPickup,
} from "../../components";

export const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [foodCategories, setFoodCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [restaurantsWithDelivery, setRestaurantsWithDelivery] = useState([]);
  const [restaurantsWithPickup, setRestaurantsWithPickup] = useState([]);

  const categoriesToDisplay = foodCategories.filter(
    (category, index, array) => category.id < 7 || index === array.length - 1
  );

  useEffect(() => {
    const foodategoriesRef = collection(db, "foodCategories");
    const q = query(foodategoriesRef, orderBy("id"));

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

  const handleDeliveryTabClick = () => {
    setActiveTab("delivery");
  };

  const handlePickupTabClick = () => {
    setActiveTab("pickup");
  };

  const handleFoodCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const showRestaurantsList = (category) => {
    if (category === "All") {
      return activeTab === "delivery" ? (
        <RestaurantsListWithDelivery data={restaurantsWithDelivery} />
      ) : (
        <RestaurantsListWithPickup data={restaurantsWithPickup} />
      );
    }

    if (category === "Show more") {
      return <Text>Modal with all categories is opened</Text>;
    }

    return activeTab === "delivery" ? (
      <RestaurantsListWithDelivery
        data={restaurantsWithDelivery.filter((restaurant) =>
          restaurant.category.includes(category)
        )}
      />
    ) : (
      <RestaurantsListWithPickup
        data={restaurantsWithPickup.filter((restaurant) =>
          restaurant.category.includes(category)
        )}
      />
    );
  };

  return (
    <View isSafe style={styles.container}>
      <View style={styles.tabsContainer}>
        <Button
          style={styles.tab(activeTab === "delivery")}
          onPress={handleDeliveryTabClick}
        >
          <Text style={styles.tabName(activeTab === "delivery")}>Delivery</Text>
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
  );
};
