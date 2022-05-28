import { useState } from "react";
import { Text } from "react-native";
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";

import { styles } from "./styles";
import { passwordResetOnMailSchema } from "../../validation/schemas";
import { auth } from "../../config/firebase";
import { View, TextField, Button, FormErrorMessage } from "../../components";

export const ResetPasswordOnEmailScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");

  const handleSendPasswordResetOnEmail = (values) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Success: Password Reset Email sent.");
        navigation.navigate("Login");
      })
      .catch((error) => setErrorState(error.message));
  };

  return (
    <View isSafe style={styles.container}>
      <Text style={styles.screenTitle}>Reset your password</Text>

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
            />
            <FormErrorMessage error={errors.email} visible={touched.email} />

            {errorState !== "" ? (
              <FormErrorMessage error={errorState} visible={true} />
            ) : null}

            <Button style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Send Reset Email</Text>
            </Button>
          </>
        )}
      </Formik>

      <Button
        style={styles.borderlessButtonContainer}
        borderless
        title={"Go back to Login"}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
