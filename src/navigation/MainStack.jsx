import { createStackNavigator } from "@react-navigation/stack";

import { config } from "./config";
import { HomeScreen } from "../screens/HomeScreen";
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { OrdersScreen } from "../screens/OrdersScreen";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={config}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};
