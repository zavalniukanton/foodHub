import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray_light,
  },
  pageHeader: {
    height: 100,
    flexDirection: "row",
    paddingTop: 25,
    paddingHorizontal: 12,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: Colors.orange,
  },
  avatar: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  slogan: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 18,
    color: Colors.white,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    padding: 14,
    marginBottom: 2,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  menuItemName: {
    marginLeft: 20,
    fontWeight: "400",
    fontSize: 16,
    color: Colors.black,
  },
});
