import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
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
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  restaurantName: {
    fontWeight: "700",
    fontSize: 18,
    color: Colors.black,
  },
  rating: {
    marginRight: 10,
    fontWeight: "700",
    fontSize: 14,
    color: Colors.orange,
  },
  review: {
    fontWeight: "400",
    fontSize: 14,
    color: Colors.black,
  },
  categories: {
    marginTop: 6,
    flexDirection: "row",
  },
  category: {
    marginRight: 10,
    fontWeight: "400",
    fontSize: 14,
    color: Colors.gray,
    textDecorationLine: "underline",
  },
  deliveryInfo: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryInfoIcon: { marginRight: 4 },
  deliveryInfoText: {
    marginRight: 15,
    fontWeight: "400",
    fontSize: 14,
    color: Colors.gray,
  },
});
