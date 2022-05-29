import { Text, Image } from "react-native";
import { Formik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useCallback } from "react";

import { styles } from "./styles";
import { View, TextField, Button, GoBackButton } from "../../components";
import { auth } from "../../config/firebase";
import { navigation } from "../../navigation/navigationRef";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePassordVisibility";
import { registerValidationSchema } from "../../validation/schemas";

export const RegisterScreen = () => {
  const {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
    handleConfirmPasswordVisibility,
    confirmPasswordIcon,
    confirmPasswordVisibility,
  } = useTogglePasswordVisibility();

  const handleLoginPress = useCallback(() => {
    navigation.navigate("Login");
  }, []);

  const handleRegiter = (values) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
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
        <Text style={styles.screenTitle}>Sign Up</Text>

        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => handleRegiter(values)}
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
                textContentType="newPassword"
                rightIcon={rightIcon}
                handlePasswordVisibility={handlePasswordVisibility}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                visible={touched.password}
              />

              <TextField
                name="confirmPassword"
                leftIconName="key-variant"
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={confirmPasswordVisibility}
                textContentType="password"
                rightIcon={confirmPasswordIcon}
                handlePasswordVisibility={handleConfirmPasswordVisibility}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={errors.confirmPassword}
                visible={touched.confirmPassword}
              />

              <Button style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign up</Text>
              </Button>
            </>
          )}
        </Formik>

        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title="Already have an account?"
          onPress={handleLoginPress}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
