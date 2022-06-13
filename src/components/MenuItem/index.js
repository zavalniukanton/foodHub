import { Text, Image } from "react-native";
import { useState, useMemo, useCallback } from "react";

import { styles } from "./styles";
import { Colors } from "../../theme/colors";
import { Icon } from "../Icon";
import { View } from "../View";
import { Button } from "../Button";
import { AmountSelect } from "../AmountSelect";

export const MenuItem = ({
  item,
  onAddtoCart,
  toggleOnCardPress,
  isCardPresed,
}) => {
  const [foodState, setFoodState] = useState({
    amount: 1,
    selectedOptions: [],
  });

  const totalPriceForItem = useMemo(
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

  const handleCardPress = () => {
    toggleOnCardPress(item.id, true);
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

  const onPayButtonPress = useCallback(() => {
    onAddtoCart({
      id: item.id,
      name: item.name,
      price: item.price,
      ...foodState,
      totalPrice: totalPriceForItem,
    });
    handleCardPress();
  }, [foodState]);

  return (
    <View style={styles.card}>
      <Button style={styles.pressablePart} onPress={handleCardPress}>
        <Text style={styles.foodName}>{item.name}</Text>

        <Button style={styles.addButton} onPress={handleCardPress}>
          <Icon
            name={
              isCardPresed.cardId === item.id && isCardPresed.expanded === true
                ? "close"
                : "plus"
            }
            size={24}
            color={Colors.blue}
          />
        </Button>

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
      </Button>

      {isCardPresed.cardId === item.id && isCardPresed.expanded === true ? (
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Options</Text>

          {item.options.map((option, index) => (
            <Button
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
            </Button>
          ))}

          <View style={styles.actionContainer}>
            <AmountSelect amount={foodState.amount} onChange={changeAmount} />
            <Button style={styles.payButton} onPress={onPayButtonPress}>
              <Icon name="cart" size={18} color={Colors.white} />
              <Text style={styles.payButtonText}>{totalPriceForItem} zł</Text>
            </Button>
          </View>
        </View>
      ) : null}
    </View>
  );
};
