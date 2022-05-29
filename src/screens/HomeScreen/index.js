import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

import { styles } from "./styles";
import { auth, db } from "../../config/firebase";

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  useEffect(() => {
    const restaurantsRef = collection(db, "restaurants");
    const q = query(restaurantsRef, orderBy("id"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setRestaurants(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};
