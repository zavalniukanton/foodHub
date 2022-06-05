import { Text } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { View } from "../View";
import { Colors } from "../../theme/colors";
import { navigation } from "../../navigation/navigationRef";

export const DrawerMenu = () => {
  const handleOrdersClick = () => {
    navigation.navigate("Orders");
  };

  const handleChartClick = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <View style={styles.avatar}>
          <Icon name="face-man" color={Colors.orange} size={24} />
        </View>

        <Text style={styles.slogan}>Hi there!</Text>
      </View>

      <Button style={styles.menuItem} onPress={handleOrdersClick}>
        <Icon name="cart" color={Colors.black} size={18} />
        <Text style={styles.menuItemName}>Orders</Text>
      </Button>

      <Button style={styles.menuItem} onPress={handleChartClick}>
        <Icon name="message-text" color={Colors.black} size={18} />
        <Text style={styles.menuItemName}>Chart</Text>
      </Button>
    </View>
  );
};
