import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  screenHeader: {
    position: "relative",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: Colors.orange,
  },
  screenTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: Colors.white,
  },
  closeButton: {
    position: "absolute",
    right: 22,
  },
});
