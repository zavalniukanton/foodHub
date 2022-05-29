import { Pressable } from "react-native";
import { memo } from "react";

import { styles } from "./styles";
import { navigation } from "../../navigation/navigationRef";
import { Icon } from "../Icon";
import { Colors } from "../../theme/colors";

export const GoBackButton = memo(({ top = 50, left = 25 }) => {
  const handleGoBack = () => navigation.goBack();

  return (
    <Pressable
      style={({ pressed }) => styles.button(pressed, top, left)}
      onPress={handleGoBack}
    >
      <Icon name="chevron-left" size={22} color={Colors.black} />
    </Pressable>
  );
});
