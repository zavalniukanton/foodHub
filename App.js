import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/context/authContext";
import { CartProvider } from "./src/context/cartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </CartProvider>
    </AuthProvider>
  );
}
