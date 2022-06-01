import { Text, Pressable, Image } from "react-native";
import { useState, useMemo } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Icon } from "../Icon";
import { View } from "../View";
import { AmountSelect } from "../AmountSelect";
import { Button } from "../Button";

export const MenuItem = ({ item }) => {
  const [isCardPresed, setIsCardPressed] = useState(false);
  const [foodState, setFoodState] = useState({
    amount: 1,
    selectedOptions: [],
  });

  const toggleOnCardPress = () => {
    setIsCardPressed((prevState) => !prevState);
  };

  const isOptionSelected = (optionId) => {
    return foodState.selectedOptions.find(
      (selectedOption) => selectedOption.id === optionId
    );
  };

  const toggleOption = (index) => {
    const selectedOption = item.options[index];

    if (!selectedOption) return;

    const optionIndexInSelectedOptions = foodState.selectedOptions.findIndex(
      (option) => option.id === selectedOption.id
    );

    if (optionIndexInSelectedOptions > -1) {
      setFoodState((prevState) => ({
        ...prevState,
        selectedOptions: prevState.selectedOptions.filter(
          (option) => option.id !== selectedOption.id
        ),
      }));
    } else {
      setFoodState((prevState) => ({
        ...prevState,
        selectedOptions: [...prevState.selectedOptions, selectedOption],
      }));
    }
  };

  const changeAmount = (newAmount) => {
    setFoodState((prevState) => ({ ...prevState, amount: newAmount }));
  };

  const totalPrice = useMemo(
    () =>
      (
        foodState.amount *
        (item.price +
          foodState.selectedOptions.reduce(
            (total, { price }) => total + price,
            0
          ))
      ).toFixed(2),
    [foodState.amount, foodState.selectedOptions]
  );

  return (
    <View style={styles.card}>
      <Pressable style={styles.pressablePart} onPress={toggleOnCardPress}>
        <Text style={styles.foodName}>{item.name}</Text>

        <Pressable style={styles.addButton} onPress={toggleOnCardPress}>
          <Icon
            name={isCardPresed ? "close" : "plus"}
            size={24}
            color={Colors.blue}
          />
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

      {isCardPresed && (
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Options</Text>

          {item.options.map((option, index) => (
            <Pressable
              key={option.id}
              style={styles.option}
              onPress={() => toggleOption(index)}
            >
              <View style={styles.checkbox}>
                {isOptionSelected(option.id) ? (
                  <View style={styles.checked} />
                ) : null}
              </View>
              <Text style={styles.optionsName}>{option.name}</Text>
              <Text style={styles.optionPrice}>
                {option.price !== 0 ? `+${option.price} zł` : "free"}
              </Text>
            </Pressable>
          ))}

          <View style={styles.actionContainer}>
            <AmountSelect amount={foodState.amount} onChange={changeAmount} />
            <Button style={styles.payButton}>
              <Text style={styles.payButtonText}>{totalPrice} zł</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};
