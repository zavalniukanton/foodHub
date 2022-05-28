import { ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { Colors } from "../../theme/colors";

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.orange} />
    </View>
  );
};
