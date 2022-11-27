import React, { useCallback, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import IngredientList from "../../components/ingredient-list";
import _ from "lodash";
import ingredients from "../../../data/ingredients.json";
import { Ingredient } from "../../types/ingredient";

export interface SelectableIngredient extends Ingredient {
  selected: boolean;
  show: boolean;
}

export default function HomeScreen() {
  const [filteredIngredients, setFilteredIngredients] =
    useState<Ingredient[]>(ingredients);

  function handleSearch(text: string) {
    debounce(text);
  }

  const debounce = useCallback(
    _.debounce((_searchVal: string) => {
      if (_searchVal.length === 0) {
        setFilteredIngredients(ingredients);
      } else {
        let temp: Ingredient[] = ingredients ? [...ingredients] : [];
        temp = temp.filter((i) =>
          i.strIngredient.toLowerCase().includes(_searchVal.toLowerCase())
        );
        setFilteredIngredients(temp);
      }
    }, 1000),
    []
  );

  /*if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Something went wrong...</Text>
      </View>
    );
  }*/

  if (ingredients.length === 0 && filteredIngredients.length === 0) {
    return (
      <View>
        <Text>No data available...</Text>
      </View>
    );
  }

  return (
    <View className='relative'>
      <SafeAreaView />
      <View className='h-full p-4'>
        <TextInput
          className='p-2 font-medium text-gray-800 border-b-2 rounded-t-lg border-b-blue-500'
          placeholder='Search...'
          style={{
            fontSize: 16,
          }}
          onChangeText={handleSearch}
        />
        <IngredientList ingredients={filteredIngredients} />
      </View>
    </View>
  );
}
