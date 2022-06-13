import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  button: (selectedCategory, itemName) => ({
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor:
      selectedCategory === itemName ? Colors.orange : "transparent",
    opacity: 1,
  }),
  buttonText: (selectedCategory, itemName) => ({
    fontWeight: "500",
    fontSize: 14,
    color:
      selectedCategory === itemName
        ? Colors.white
        : itemName === "Show more"
        ? Colors.orange
        : Colors.black,
  }),
});
