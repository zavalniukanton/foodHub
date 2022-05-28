import { SafeAreaProvider } from "react-native-safe-area-context";

import { ResetPasswordOnEmailScreen } from "./src/screens/ResetPasswordOnEmailScreen";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <ResetPasswordOnEmailScreen />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
