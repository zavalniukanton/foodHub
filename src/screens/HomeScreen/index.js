import { Text } from "react-native";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { styles } from "./styles";
import { db } from "../../config/firebase";
import { View, Button, FoodCategoriesList } from "../../components";

export const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [foodCategories, setFoodCategories] = useState([]);

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

  const handleDeliveryTabClick = () => {
    setActiveTab("delivery");
  };

  const handlePickupTabClick = () => {
    setActiveTab("pickup");
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

      <FoodCategoriesList data={categoriesToDisplay} />

      {activeTab === "delivery" ? <Text>Delivery</Text> : <Text>Pick up</Text>}
    </View>
  );
};
