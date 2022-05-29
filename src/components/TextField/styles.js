import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  inputWrapper: (width) => ({
    position: "relative",
    height: 65,
    width,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  }),
  input: { flex: 1, width: "100%", fontSize: 18, color: Colors.black },
});
