import { FlatList } from "react-native";
import { FoodCategoryItem } from "../FoodCategoryItem";

export const FoodCategoryList = ({
  data,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <FoodCategoryItem
            item={item}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        );
      }}
    />
  );
};
