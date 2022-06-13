import { Text } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";

export const FoodCategoryItem = ({
  item,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <Button
      style={styles.button(selectedCategory, item.name)}
      onPress={() => onSelectCategory(item.name)}
    >
      <Text style={styles.buttonText(selectedCategory, item.name)}>
        {item.name}
      </Text>
    </Button>
  );
};
