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
    marginTop: 100,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  restaurantName: {
    marginRight: "auto",
    fontWeight: "700",
    fontSize: 24,
    color: Colors.black,
  },
  actionButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
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
  review: { fontWeight: "500", fontSize: 15, color: Colors.orange },
});
