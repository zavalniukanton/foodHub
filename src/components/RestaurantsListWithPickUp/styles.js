import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
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
  image: {
    width: "100%",
    height: 75,
  },
});
