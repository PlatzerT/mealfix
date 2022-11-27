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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SelectableIngredient } from "../../screens/home";
import { Ingredient } from "../../types/ingredient";
import { MealsScreenParamList } from "../../types/MealsScreenParamList";

interface Props {
  ingredientName: string;
  isChecked: boolean;
  onPress?: ((checked: boolean) => void) | undefined;
}

function IngredientItem({ ingredientName, isChecked, onPress }: Props) {
  return (
    <BouncyCheckbox
      className={clsx("p-4 rounded-lg border border-gray-200 flex bg-white")}
      textComponent={
        <Text className='ml-3 text-base text-gray-500 no-underline truncate shrink text-ellipsis'>
          {ingredientName}
        </Text>
      }
      fillColor='#3b82f6'
      isChecked={isChecked}
      disableBuiltInState
      onPress={onPress}
    />
  );
}

export default memo(IngredientItem);
