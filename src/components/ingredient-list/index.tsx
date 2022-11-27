import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Ingredient } from "../../types/ingredient";
import { MealsScreenParamList } from "../../types/MealsScreenParamList";
import IngredientItem from "../ingredient-item";

interface Props {
  ingredients: Ingredient[];
}

interface ItemProps {
  item: Ingredient;
}

function IngredientList({ ingredients }: Props) {
  const navigation = useNavigation<StackNavigationProp<MealsScreenParamList>>();

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const toggleIngredientSelection = useCallback(
    (id: string) => {
      const isInList = selectedIngredients?.find((si) => si === id);
      console.log({ isInList });
      if (isInList) {
        setSelectedIngredients((prev) => prev?.filter((si) => si !== id));
      } else {
        console.log([id, ...selectedIngredients]);
        setSelectedIngredients((prev) => [id, ...prev]);
      }
    },
    [selectedIngredients]
  );

  console.log({ selectedIngredients });

  // navigation.navigate("Meals", { ingredient })
  const renderItem = ({ item }: ItemProps) => {
    return (
      <IngredientItem
        key={item.idIngredient}
        onPress={(e) => toggleIngredientSelection(item.idIngredient)}
        ingredient={item}
        isSelected={
          !!selectedIngredients.find((si) => si === item.idIngredient)
        }
      />
    );
  };
  return (
    <View>
      <FlatGrid
        className='mx-[-10]'
        data={ingredients}
        extraData={selectedIngredients}
        renderItem={renderItem}
        spacing={10}
      />
    </View>
  );
}

export default memo(IngredientList);
