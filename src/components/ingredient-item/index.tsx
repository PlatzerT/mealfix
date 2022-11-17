import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ingredient } from "../../types/ingredient";

interface Props {
  ingredient: Ingredient;
}

export default function IngredientItem({ ingredient }: Props) {
  return (
    <TouchableOpacity
      className='p-4 bg-white border border-gray-100 rounded-lg'
      onPress={(e) => console.log("pressed")}
    >
      <Text className='font-semibold'>{ingredient.strIngredient}</Text>
    </TouchableOpacity>
  );
}
