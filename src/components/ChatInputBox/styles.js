import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 10,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: Colors.blue,
  },
});
