import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 22,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: Colors.red,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartTitle: {
    fontWeight: "700",
    fontSize: 26,
    color: Colors.black,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  priceText: {
    fontWeight: "400",
    fontSize: 14,
    color: Colors.black,
  },
});
