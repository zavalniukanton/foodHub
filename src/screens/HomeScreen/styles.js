import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 22,
    backgroundColor: Colors.white,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
    marginBottom: 32,
  },
  tab: (activeTab) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderBottomWidth: 2,
    borderColor: activeTab ? Colors.blue : Colors.white,
  }),
  tabName: {
    fontWeight: "700",
    fontSize: 18,
    color: Colors.black,
  },
  categoriesContainer: {
    height: 25,
    marginBottom: 30,
  },
});
