import { Text } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { navigation } from "../../navigation/navigationRef";
import { Button, View } from "../../components";

export const ChartScreen = () => {
  const handleClose = () => {
    navigation.navigate("Home");
  };

  return (
    <View isSafe style={styles.container}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Chart</Text>
        <Button
          borderless
          title="Close"
          onPress={handleClose}
          color={Colors.white}
          style={styles.closeButton}
        />
      </View>

      <Text>This is a chart screen</Text>
    </View>
  );
};
