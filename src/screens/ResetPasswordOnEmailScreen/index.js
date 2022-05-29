import { Text, Image } from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";
import { passwordResetOnMailSchema } from "../../validation/schemas";
import { navigation } from "../../navigation/navigationRef";
import { auth } from "../../config/firebase";
import { View, TextField, Button, GoBackButton } from "../../components";

export const ResetPasswordOnEmailScreen = () => {
  const [errorState, setErrorState] = useState("");

  const handleSendPasswordResetOnEmail = (values) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => setErrorState(error.message));
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
        <Text style={styles.screenTitle}>Reset your password</Text>

        <Text style={styles.slogan}>
          Please enter your email address to request a password reset
        </Text>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={passwordResetOnMailSchema}
          onSubmit={(values) => handleSendPasswordResetOnEmail(values)}
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

              {errorState ? (
                <FormErrorMessage error={errorState} visible={true} />
              ) : null}

              <Button style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Send Reset Email</Text>
              </Button>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};
