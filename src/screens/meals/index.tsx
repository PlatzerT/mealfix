import React from "react";
import { Text, View } from "react-native";

export default function MealsScreen({ route, navigation }: any) {
  const { ingredientIds } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(ingredientIds, null, 2)}</Text>
    </View>
  );
}
