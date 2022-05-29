import { Text, Image } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { useCallback } from "react";

import { styles } from "./styles";
import { auth } from "../../config/firebase";
import { navigation } from "../../navigation/navigationRef";
import { loginValidationSchema } from "../../validation/schemas";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePassordVisibility";
import { View, TextField, Button, GoBackButton } from "../../components";

export const LoginScreen = () => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleResetPasswordOnEmailPress = useCallback(() => {
    navigation.navigate("ResetPasswordOnEmail");
  }, []);

  const handleSignUpPress = useCallback(() => {
    navigation.navigate("Register");
  }, []);

  const handleLogin = (values) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  return (
    <View isSafe style={styles.container}>
      <Image
        source={require("../../../assets/images/auth_bg.png")}
        style={styles.decoration}
      />

      <GoBackButton />

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.screenTitle}>Login</Text>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <>
              <TextField
                name="email"
                leftIconName="email"
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                visible={touched.email}
              />

              <TextField
                name="password"
                leftIconName="key-variant"
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType="password"
                rightIcon={rightIcon}
                handlePasswordVisibility={handlePasswordVisibility}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                visible={touched.password}
              />

              <Button style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </Button>
            </>
          )}
        </Formik>

        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title="Create a new account?"
          onPress={handleSignUpPress}
        />
        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title="Forgot the password"
          onPress={handleResetPasswordOnEmailPress}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
