import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { View } from "../View";
import { Button } from "../Button";
import { Icon } from "../Icon";

export const ChatInputBox = () => {
  const [message, setMessage] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ width: "100%" }}
    >
      <View style={styles.wrapper}>
        <View style={styles.mainContainer}>
          <Icon name="face-man-shimmer" size={24} color={Colors.gray} />
          <TextInput
            placeholder={"Type a message"}
            style={styles.textInput}
            multiline
            maxLength={5}
            value={message}
            onChangeText={setMessage}
          />
          <Icon
            name="attachment"
            size={24}
            color={Colors.gray}
            style={styles.icon}
          />
          {!message && (
            <Icon
              name="camera"
              size={24}
              color={Colors.gray}
              style={styles.icon}
            />
          )}
        </View>
        <Button>
          <View style={styles.buttonContainer}>
            {!message ? (
              <Icon name="microphone" size={28} color={Colors.white} />
            ) : (
              <Icon name="send" size={28} color={Colors.white} />
            )}
          </View>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};
