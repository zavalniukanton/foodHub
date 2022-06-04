import { StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  pageHeader: {
    height: 50,
    paddingHorizontal: 22,
    justifyContent: "center",
    backgroundColor: Colors.orange,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    marginBottom: 14,
    backgroundColor: Colors.white_smoke,
  },
  tab: (activeTab) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderBottomWidth: activeTab ? 2 : 1,
    borderColor: activeTab ? Colors.orange : Colors.border,
  }),
  tabName: (activeTab) => ({
    fontWeight: activeTab ? "600" : "400",
    fontSize: 18,
    color: activeTab ? Colors.orange : Colors.black,
  }),
  categoriesContainer: {
    height: 25,
    marginBottom: 20,
    paddingHorizontal: 22,
  },
});
