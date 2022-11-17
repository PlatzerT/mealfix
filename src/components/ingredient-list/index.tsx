import React from "react";
import { FlatList, View } from "react-native";
import { Ingredient } from "../../types/ingredient";
import IngredientItem from "../ingredient-item";
import { FlatGrid } from "react-native-super-grid";

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
      <FlatGrid
        className='mx-[-10]'
        data={ingredients}
        renderItem={renderItem}
        spacing={10}
      />
      {/*<FlatList
        key={"sd"}
        data={ingredients}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.idIngredient}
  />*/}
    </View>
  );
}
