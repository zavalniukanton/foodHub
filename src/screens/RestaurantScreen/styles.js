import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: 150,
    alignItems: "center",
  },
  logoContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleSection: {
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  restaurantName: {
    marginRight: "auto",
    fontWeight: "700",
    fontSize: 30,
    color: Colors.black,
  },
  actionButton: (type) => ({
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBottomLeftRadius: type === "info" ? 4 : 0,
    borderTopLeftRadius: type === "info" ? 4 : 0,
    borderTopRightRadius: type === "heart" ? 4 : 0,
    borderBottomRightRadius: type === "heart" ? 4 : 0,
    borderLeftWidth: type === "heart" ? 0 : 1,
    borderColor: Colors.border,
  }),
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  rating: {
    marginRight: 10,
    fontWeight: "500",
    fontSize: 15,

    color: Colors.black,
  },
  review: {
    fontWeight: "500",
    fontSize: 15,
    color: Colors.orange,
  },
  menu: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingLeft: 22,
    fontWeight: "500",
    fontSize: 20,
    backgroundColor: Colors.mistyrose,
  },
  cartBanner: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,

    backgroundColor: Colors.blue,
  },
  cartIcon: {
    position: "absolute",
    left: 22,
  },
  cartBadge: {
    position: "absolute",
    left: 45,
    bottom: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: Colors.orange,
  },
  cartBadgeText: {
    fontWeight: "500",
    color: Colors.white,
  },
  cartBannerText: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.white,
  },
  orderPrice: {
    marginLeft: 6,
    fontWeight: "500",
    fontSize: 16,
    color: Colors.white,
  },
});
