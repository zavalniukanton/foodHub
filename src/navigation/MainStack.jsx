import { createStackNavigator } from "@react-navigation/stack";

import { config } from "./config";

import { DrawerStack } from "./DrawerStack";
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { CartScreen } from "../screens/CartScreen";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={config}>
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ ...config, presentation: "modal" }}>
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
