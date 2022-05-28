import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";

import { styles } from "./styles";
import { auth } from "../../config/firebase";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};
