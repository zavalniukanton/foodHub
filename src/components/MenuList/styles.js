import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 14,
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
});
