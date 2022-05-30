import { Text, FlatList, Pressable, Image } from "react-native";

import { styles } from "./styles";

export const RestaurantsListWithPickup = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Pressable style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>
        );
      }}
    />
  );
};
