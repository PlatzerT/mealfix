import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { memo, useCallback, useState } from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import Icon from "react-native-vector-icons/MaterialIcons";
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
  if (!ingredients || ingredients.length === 0) {
    return (
      <View className='flex items-center justify-center flex-1'>
        <View className='flex flex-col items-center justify-center space-y-2'>
          <View className='flex items-center justify-center p-4 text-gray-300 bg-gray-200 rounded-full'>
            <Icon size={24} color='#4b5563' name='info' />
          </View>
          <Text className='text-gray-600'>Keine Ergebnisse gefunden!</Text>
        </View>
      </View>
    );
  }

  const navigation = useNavigation<StackNavigationProp<MealsScreenParamList>>();

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const toggleIngredientSelection = useCallback(
    (id: string) => {
      const isInList = selectedIngredients?.find((si) => si === id);
      if (isInList) {
        setSelectedIngredients((prev) => prev?.filter((si) => si !== id));
      } else {
        setSelectedIngredients((prev) => [id, ...prev]);
      }
    },
    [selectedIngredients]
  );

  // navigation.navigate("Meals", { ingredient })
  const renderItem = ({ item }: ItemProps) => {
    return (
      <IngredientItem
        key={item.idIngredient}
        onPress={(isChecked) => toggleIngredientSelection(item.idIngredient)}
        ingredientName={item.strIngredient}
        isChecked={!!selectedIngredients.find((si) => si === item.idIngredient)}
      />
    );
  };

  const handleContinue = (event: GestureResponderEvent) => {
    navigation.navigate("Meals", { ingredientIds: selectedIngredients });
  };

  const handleClear = useCallback((event: GestureResponderEvent) => {
    setSelectedIngredients([]);
  }, []);

  return (
    <View className='flex flex-col flex-1 space-y-6'>
      <View className='flex flex-col flex-1 space-y-2'>
        <View className='flex flex-row items-center justify-between mt-3'>
          <Text className='font-medium text-gray-800'>
            {selectedIngredients.length}{" "}
            <Text className='text-gray-400'>selected</Text>
          </Text>
          <TouchableOpacity
            className='p-2 bg-blue-100 rounded-lg'
            onPress={handleClear}
          >
            <Text className='font-medium text-blue-500'>Clear</Text>
          </TouchableOpacity>
        </View>
        <FlatGrid
          className='mx-[-10] flex-1'
          data={ingredients}
          extraData={selectedIngredients}
          renderItem={renderItem}
          spacing={10}
        />
      </View>

      <TouchableOpacity
        className='flex flex-row items-center justify-center px-5 py-4 space-x-2 bg-blue-500 rounded-xl'
        onPress={handleContinue}
      >
        <Text className='text-base font-bold text-white'>Next</Text>
        <Icon name='east' color='#fff' className='w-6 h-6' size={24} />
      </TouchableOpacity>
    </View>
  );
}

export default memo(IngredientList);
