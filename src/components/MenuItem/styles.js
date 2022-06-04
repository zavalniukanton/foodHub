import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal: 22,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
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
  pressablePart: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  foodName: {
    fontWeight: "600",
    fontSize: 18,
    color: Colors.black,
  },
  addButton: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 4,
    borderColor: Colors.border,
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  mainInfo: {
    flexShrink: 1,
  },
  foodDescription: {
    color: Colors.gray,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 10,
  },
  choiseOf: {
    marginRight: 6,
    fontWeight: "500",
    fontStyle: "italic",
    color: Colors.gray,
  },
  optionName: {
    marginRight: 10,
    fontWeight: "600",
    fontStyle: "italic",
    color: Colors.gray,
    textDecorationLine: "underline",
  },
  foodPrice: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 20,
    color: Colors.orange,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  optionsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: Colors.mistyrose,
  },
  optionsTitle: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.black,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  checkbox: {
    marginRight: 10,
    height: 18,
    width: 18,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  checked: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: Colors.orange,
  },
  optionsName: {
    marginRight: "auto",
    fontWeight: "400",
    fontSize: 14,
    color: Colors.black,
  },
  optionPrice: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.black,
  },
  actionContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  payButton: {
    height: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.blue,
  },
  payButtonText: {
    marginLeft: 10,
    color: Colors.white,
  },
});
