import { Pressable } from "react-native";
import { memo, useCallback } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { navigation } from "../../navigation/navigationRef";
import { Icon } from "../Icon";

export const GoBackButton = memo(({ style }) => {
  const handleGoBack = () => navigation.goBack();

  const _style = useCallback(({ pressed }) => [style, styles.button(pressed)]);

  return (
    <Pressable style={_style} onPress={handleGoBack}>
      <Icon name="chevron-left" size={22} color={Colors.black} />
    </Pressable>
  );
});
