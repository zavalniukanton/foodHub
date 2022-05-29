import { createStackNavigator } from "@react-navigation/stack";

import { config } from "./config";
import { HomeScreen } from "../screens/HomeScreen";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={config}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
