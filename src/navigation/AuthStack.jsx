import { createStackNavigator } from "@react-navigation/stack";

import { config } from "./config";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ResetPasswordOnEmailScreen } from "../screens/ResetPasswordOnEmailScreen";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={config}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="ResetPasswordOnEmail"
        component={ResetPasswordOnEmailScreen}
      />
    </Stack.Navigator>
  );
};
