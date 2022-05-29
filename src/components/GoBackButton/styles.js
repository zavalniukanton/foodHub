import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  button: (pressed, top, left) => ({
    width: 38,
    height: 38,
    position: "absolute",
    top,
    left,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    opacity: pressed ? 0.3 : 1,
    zIndex: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }),
});
