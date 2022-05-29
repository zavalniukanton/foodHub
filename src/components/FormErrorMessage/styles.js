import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  errorText: {
    position: "absolute",
    bottom: -20,
    left: 10,
    fontWeight: "600",
    fontSize: 16,
    color: Colors.red,
  },
});
