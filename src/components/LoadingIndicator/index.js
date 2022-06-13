import { ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { View } from "../View";

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.orange} />
    </View>
  );
};
