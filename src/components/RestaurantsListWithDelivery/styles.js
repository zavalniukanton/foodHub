import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    height: 100, // TODO: delete
    marginBottom: 40,
    padding: 6,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: Colors.border,
    backgroundColor: Colors.white,
    overflow: "hidden",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 25,
  },
});
