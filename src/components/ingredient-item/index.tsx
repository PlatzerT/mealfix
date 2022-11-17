import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ingredient } from "../../types/ingredient";

interface Props {
  ingredient: Ingredient;
}

export default function IngredientItem({ ingredient }: Props) {
  return (
    <TouchableOpacity
      className='p-4 bg-red-500 border border-gray-200'
      onPress={(e) => console.log("pressed")}
    >
      <Text>{ingredient.strIngredient}</Text>
    </TouchableOpacity>
  );
}
