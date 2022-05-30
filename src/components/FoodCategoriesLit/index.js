import { Text, FlatList, Pressable } from "react-native";

import { styles } from "./styles";

export const FoodCategoriesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>
        );
      }}
    />
  );
};
