import { Text } from "react-native";
import { useContext } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { styles } from "./styles";
import { View } from "../View";
import { Colors } from "../../theme/colors";
import { AuthContext } from "../../context/authContext";

dayjs.extend(relativeTime);

export const ChatMessage = ({ message }) => {
  const { user } = useContext(AuthContext);

  const isMyMessage = message.user.id === user.email;

  return (
    <View style={styles.messageWrapper}>
      <View
        style={[
          styles.message,
          {
            backgroundColor: isMyMessage ? Colors.warning : Colors.white,
            marginLeft: isMyMessage ? 50 : 0,
            marginRight: isMyMessage ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.messageText}>{message.content}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};
