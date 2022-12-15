import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/home";
import MealsScreen from "../../screens/meals";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Select ingredients' component={HomeScreen} />
      <Stack.Screen name='Meals' component={MealsScreen} />
    </Stack.Navigator>
  );
}
