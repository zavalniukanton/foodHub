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
    height: 55,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginBottom: 32,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  },
  tab: (activeTab) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: activeTab ? Colors.orange : Colors.white,
    backgroundColor: activeTab ? Colors.orange : Colors.white,
  }),
  tabName: (activeTab) => ({
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14,
    color: activeTab ? Colors.white : Colors.orange,
  }),
  categoriesContainer: {
    height: 25,
    marginBottom: 30,
  },
});
