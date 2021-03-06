import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  emptyOrdersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  emptyOrdersTitle: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 18,
    color: Colors.black,
  },
  emptyOrdersDescription: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 12,
    color: Colors.black,
  },
  browseRestaurantButton: {
    alignSelf: "center",
    width: "50%",
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 4,
  },
  browseRestaurantButtonText: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.blue,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
  },
  screenHeader: {
    position: "relative",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: -12,
    marginBottom: 20,
    backgroundColor: Colors.orange,
  },
  screenTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: Colors.white,
  },
  closeButton: {
    position: "absolute",
    right: 22,
  },
});
