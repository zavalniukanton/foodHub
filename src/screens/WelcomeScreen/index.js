import { ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Button, View } from "../../components";

export const WelcomeScreen = ({ navigation }) => {
  const onLoginPress = useCallback(() => {
    navigation.navigate("Login");
  }, []);

  const onRegisterPress = useCallback(() => {
    navigation.navigate("Register");
  }, []);

  return (
    <View isSafe style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require("../../../assets/images/welcome_bg.png")}
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={Colors.bg_gradient}
          style={styles.backgroundGradient}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title("top")}>Welcome to</Text>
        <Text style={styles.title("botton")}>FoodHub</Text>
        <Text style={styles.slogan}>
          Your favourite foods delivered fast at your door.
        </Text>

        <Button style={styles.button} onPress={onRegisterPress}>
          <Text style={styles.buttonText}>Start with email</Text>
        </Button>

        <Button
          color={Colors.white}
          style={styles.borderlessButtonContainer}
          borderless
          title="Already have an account?"
          onPress={onLoginPress}
        />
      </View>
    </View>
  );
};
