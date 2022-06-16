import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  messageWrapper: {
    padding: 10,
  },
  message: {
    borderRadius: 4,
    padding: 10,
  },
  name: {
    marginBottom: 4,
    fontWeight: "700",
    color: Colors.green,
  },
  messageText: {
    marginBottom: 4,
    fontWeight: "400",
  },
  time: {
    alignSelf: "flex-end",
    color: Colors.gray,
  },
});
