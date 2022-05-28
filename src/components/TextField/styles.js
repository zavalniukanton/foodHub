import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  inputWrapper: (width) => ({
    backgroundColor: Colors.white,
    borderRadius: 8,
    flexDirection: "row",
    padding: 12,
    marginVertical: 12,
    width,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
  }),
  input: { flex: 1, width: "100%", fontSize: 18, color: Colors.black },
});
