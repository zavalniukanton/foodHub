import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/context/authContext";
import { CartProvider } from "./src/context/cartContext";
import { OrderProvider } from "./src/context/orderContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}
