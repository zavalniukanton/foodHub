import { createStackNavigator } from "@react-navigation/stack";

import { config } from "./config";
import { HomeScreen } from "../screens/HomeScreen";
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { CartScreen } from "../screens/CartScreen";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={config}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ ...config, presentation: "modal" }}>
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
