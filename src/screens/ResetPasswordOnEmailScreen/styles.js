import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  decoration: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 80,
  },
  goBackButton: { top: 50, left: 25 },
  content: { paddingHorizontal: 22, paddingTop: 100 },
  screenTitle: {
    fontSize: 36,
    fontWeight: "700",
    color: Colors.black,
    marginBottom: 12,
  },
  slogan: {
    marginBottom: 20,
    paddingRight: 100,
    fontWeight: "400",
    fontSize: 14,
    color: Colors.gray,
  },
  button: {
    alignSelf: "center",
    width: 248,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 10,
    borderRadius: 28,
    backgroundColor: Colors.orange,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
