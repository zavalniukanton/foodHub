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
      selectedCategory === itemName ? Colors.orange : Colors.blue,
    opacity: 1,
  }),
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.white,
  },
});
