import React from "react";
import { FlatList, View } from "react-native";
import { Ingredient } from "../../types/ingredient";
import IngredientItem from "../ingredient-item";

interface Props {
  ingredients: Ingredient[];
}

interface ItemProps {
  item: Ingredient;
}

export default function IngredientList({ ingredients }: Props) {
  const renderItem = ({ item }: ItemProps) => (
    <IngredientItem ingredient={item} />
  );
  return (
    <View>
      <FlatList
        data={ingredients}
        renderItem={renderItem}
        keyExtractor={(item) => item.idIngredient}
      />
    </View>
  );
}
