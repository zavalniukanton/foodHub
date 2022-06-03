import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    paddingBottom: 16,
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    overflow: "hidden",
  },
  cardHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemName: {
    flexShrink: 1,
    fontWeight: "600",
    fontSize: 16,
    color: Colors.black,
  },
  itemPrice: {
    marginLeft: "auto",
    fontWeight: "500",
    fontSize: 16,
    color: Colors.black,
  },
  optionName: {
    marginRight: 10,
    marginBottom: 10,
    fontWeight: "600",
    fontStyle: "italic",
    color: Colors.gray,
    textDecorationLine: "underline",
  },
  noOptions: {
    color: Colors.border,
  },
});
