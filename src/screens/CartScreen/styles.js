import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  emptyCartTitle: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 18,
    color: Colors.black,
  },
  emptyCartDescription: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 12,
    color: Colors.black,
  },
  selectMealButton: {
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
  selectMealButtonText: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.blue,
  },
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
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 38,
    height: 38,
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
    marginTop: 30,
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
