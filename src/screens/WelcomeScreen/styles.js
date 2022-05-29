import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 120,
    paddingBottom: 50,
  },
  title: (position) => ({
    fontWeight: "600",
    fontSize: 53,
    lineHeight: 68,
    color: position === "top" ? Colors.black : Colors.orange,
  }),
  slogan: {
    marginTop: 20,
    paddingRight: 100,
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 27,
    color: Colors.gray,
  },
  button: {
    alignSelf: "center",
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: "auto",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white_20,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "500",
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
