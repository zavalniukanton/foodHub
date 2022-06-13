import { createDrawerNavigator } from "@react-navigation/drawer";

import { config } from "./config";
import { DrawerMenu } from "../components";
import { HomeScreen } from "../screens/HomeScreen";
import { OrdersScreen } from "../screens/OrdersScreen";
import { ChartScreen } from "../screens/ChartScreen";

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ ...config, drawerPosition: "left" }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Orders" component={OrdersScreen} />
      <Drawer.Screen name="Chart" component={ChartScreen} />
    </Drawer.Navigator>
  );
};
