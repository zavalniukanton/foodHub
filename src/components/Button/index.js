import { useCallback } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";

export const Button = ({
  children,
  onPress,
  activeOpacity = 0.3,
  borderless = false,
  title,
  style,
}) => {
  const _style = useCallback(({ pressed }) => [
    style,
    { opacity: pressed ? activeOpacity : 1 },
  ]);

  if (borderless) {
    return (
      <Pressable onPress={onPress} style={_style}>
        <Text style={styles.borderlessButtonText}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={_style}>
      {children}
    </Pressable>
  );
};
