import { Text, FlatList, Pressable, Image } from "react-native";

import { styles } from "./styles";

export const RestaurantsListWithDelivery = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        console.log("item.image", item.image);
        return (
          <Pressable style={styles.card}>
            <Image source={{ uri: item.logo }} style={styles.image} />

            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>
        );
      }}
    />
  );
};
