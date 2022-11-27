import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import clsx from "clsx";
import React, { memo, useState } from "react";
import {
  Pressable,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SelectableIngredient } from "../../screens/home";
import { Ingredient } from "../../types/ingredient";
import { MealsScreenParamList } from "../../types/MealsScreenParamList";

interface Props extends TouchableOpacityProps {
  ingredient: Ingredient;
  isSelected: boolean;
}

function IngredientItem({ ingredient, isSelected, ...props }: Props) {
  return (
    <TouchableOpacity
      className={clsx(
        "p-4 rounded-lg border border-gray-100 hover:bg-red-500",
        isSelected ? "bg-blue-50 border-l-4 border-l-blue-500" : " bg-white"
      )}
      {...props}
    >
      <Text className={clsx("font-semibold", isSelected && "text-blue-500")}>
        {ingredient.strIngredient}
      </Text>
    </TouchableOpacity>
  );
}

export default IngredientItem;
