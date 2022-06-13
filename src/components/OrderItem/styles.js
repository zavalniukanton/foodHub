import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.gray_light,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  imageContainer: {
    width: 100,
    height: "100%",
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: Colors.gray_light,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 6,
  },
  restaurantName: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.black,
  },
  orderText: {
    fontWeight: "400",
    fontSize: 12,
    color: Colors.border,
  },
  orderStatus: {
    fontWeight: "400",
    fontSize: 12,
    color: Colors.blue,
  },
  oredrPrice: {
    fontWeight: "600",
    fontSize: 14,
    color: Colors.orange,
  },
});
