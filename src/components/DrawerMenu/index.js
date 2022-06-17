import { Text } from "react-native";
import { useContext } from "react";
import { signOut } from "firebase/auth";

import { styles } from "./styles";
import { auth } from "../../config/firebase";
import { Colors } from "../../theme/colors";
import { AuthContext } from "../../context/authContext";
import { navigation } from "../../navigation/navigationRef";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { View } from "../View";

export const DrawerMenu = () => {
  const { user } = useContext(AuthContext);

  const handleOrdersClick = () => {
    navigation.navigate("Orders");
  };

  const handleChartClick = () => {
    navigation.navigate("Chat");
  };

  const handleLogoutPress = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <View style={styles.avatar}>
          <Icon name="face-man" color={Colors.orange} size={24} />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.slogan}>Hi there!</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      <Button style={styles.menuItem} onPress={handleOrdersClick}>
        <Icon name="cart" color={Colors.blue} size={18} />
        <Text style={styles.menuItemName}>Orders</Text>
      </Button>

      <Button style={styles.menuItem} onPress={handleChartClick}>
        <Icon name="message-text" color={Colors.blue} size={18} />
        <Text style={styles.menuItemName}>Chat room</Text>
      </Button>

      <Button style={styles.logoutButton} onPress={handleLogoutPress}>
        <View style={styles.logoutButtonIcon}>
          <Icon name="logout" color={Colors.white} size={20} />
        </View>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Button>
    </View>
  );
};
