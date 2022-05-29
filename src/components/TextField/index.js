import { TextInput } from "react-native";

import { styles } from "./styles";
import { View } from "../View";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { Colors } from "../../theme/colors";
import { FormErrorMessage } from "../FormErrorMessage";

export const TextField = ({
  width = "100%",
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  error,
  visible,
  ...otherProps
}) => {
  return (
    <View style={styles.inputWrapper(width)}>
      {leftIconName ? (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.mediumGray}
          style={{ marginRight: 10 }}
        />
      ) : null}

      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.mediumGray}
        {...otherProps}
      />

      {rightIcon ? (
        <Button onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.mediumGray}
            style={{ marginRight: 10 }}
          />
        </Button>
      ) : null}

      <FormErrorMessage error={error} visible={visible} />
    </View>
  );
};
