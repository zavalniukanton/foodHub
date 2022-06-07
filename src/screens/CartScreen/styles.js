import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
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
  alert: {
    marginTop: 20,
  },
  alertTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 14,
    borderRadius: 4,
    backgroundColor: Colors.warning,
  },
  alertTet: {
    fontWeight: "400",
    fontSize: 14,
    color: Colors.black,
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: "auto",
    marginHorizontal: -12,
    borderTopWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  actionButtonText: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.blue,
  },
});
