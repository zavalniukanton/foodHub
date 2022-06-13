import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
  },
  screenHeader: {
    position: "relative",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: -12,
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
