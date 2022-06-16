import { FlatList, Text, ImageBackground } from "react-native";
import React from "react";

import background from "../../../assets/images/chat_bg.png";
import { styles } from "./styles";
import { Colors } from "../../theme/colors";

import { MESSAGES } from "../../data/messages";
import { navigation } from "../../navigation/navigationRef";
import { Button, ChatInputBox, ChatMessage, View } from "../../components";

export const ChatScreen = () => {
  const handleClose = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={background}
    >
      <View isSafe>
        <View style={styles.screenHeader}>
          <Text style={styles.screenTitle}>Chart</Text>
          <Button
            borderless
            title="Close"
            onPress={handleClose}
            color={Colors.white}
            style={styles.closeButton}
          />
        </View>
      </View>

      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />

      <ChatInputBox />
    </ImageBackground>
  );
};
