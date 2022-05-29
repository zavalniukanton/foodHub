import { Text, Image } from "react-native";
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";
import { passwordResetOnMailSchema } from "../../validation/schemas";
import { auth } from "../../config/firebase";
import { View, TextField, Button } from "../../components";

export const ResetPasswordOnEmailScreen = ({ navigation }) => {
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
      <Image
        source={require("../../../assets/images/auth_bg.png")}
        style={styles.decoration}
      />
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
      </KeyboardAwareScrollView>
    </View>
  );
};
