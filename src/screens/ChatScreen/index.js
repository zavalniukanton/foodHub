import { FlatList, Text, ImageBackground } from "react-native";
import { useEffect, useState } from "react";

import background from "../../../assets/images/chat_bg.png";
import { styles } from "./styles";
import { Colors } from "../../theme/colors";

import { navigation } from "../../navigation/navigationRef";
import { Button, ChatInputBox, ChatMessage, View } from "../../components";
import { replyMessage } from "../../utils/replyMessage";

export const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const handleClose = () => {
    navigation.navigate("Home");
  };

  const handleSendMessage = (message) => {
    setMessages((prevState) => [...prevState, message]);
  };

  useEffect(() => {
    replyMessage({ messages, setMessages });
  }, [messages.length]);

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
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />

      <ChatInputBox onSendMessage={handleSendMessage} />
    </ImageBackground>
  );
};
