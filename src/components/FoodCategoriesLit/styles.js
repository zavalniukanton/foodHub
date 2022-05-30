import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  button: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: Colors.orange,
    opacity: 1,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.white,
  },
});
