import { Text, FlatList, Pressable, Image } from "react-native";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Icon } from "../Icon";
import { View } from "../View";

export const MenuList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Pressable style={styles.card}>
            <Text style={styles.foodName}>{item.name}</Text>

            <Pressable style={styles.addButton}>
              <Icon name="plus" size={24} color={Colors.blue} />
            </Pressable>

            <View style={styles.infoContainer}>
              <View style={styles.mainInfo}>
                <Text style={styles.foodDescription}>{item.description}</Text>

                <View style={styles.options}>
                  <Text style={styles.choiseOf}>Choice of:</Text>
                  {item.options.map((option) => (
                    <Text key={option.id} style={styles.optionName}>
                      {option.name}
                    </Text>
                  ))}
                </View>

                <Text style={styles.foodPrice}>{item.price} zł</Text>
              </View>

              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          </Pressable>
        );
      }}
    />
  );
};
