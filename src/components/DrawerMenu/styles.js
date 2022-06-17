import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
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
  headerContent: {
    marginLeft: 20,
    justifyContent: "space-between",
  },
  slogan: {
    fontWeight: "600",
    fontSize: 18,
    color: Colors.white,
  },
  userEmail: {
    fontWeight: "400",
    fontSize: 12,
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
    color: Colors.gray,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: "auto",
    width: "50%",
    padding: 6,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  logoutButtonIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
    borderRadius: 100,
  },
  logoutButtonText: {
    marginLeft: 6,
    fontWeight: "500",
    fontSize: 16,
  },
});
