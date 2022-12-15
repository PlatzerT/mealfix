import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import meals from "../../../data/meals.json";
import { Meal } from "../../types/meal";

export default function MealsScreen({ route, navigation }: any) {
  const [searchText, onChangeSearchText] = useState("");
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>(meals);
  const { ingredientIds } = route.params;

  const Item = ({ title }: any) => {
    return (
      <View>
        <Text className='text-black'>{title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }: any) => {
    return <Item title={item.strMeal} />;
  };

  return (
    <View>
      <SafeAreaView>
        <View className='h-full px-4'>
          <View className='relative flex flex-row items-center justify-center'>
            <Icon
              name='search'
              color={"#6b7280"}
              style={{
                padding: 11,
                backgroundColor: "white",
              }}
              size={18}
            />
            <TextInput
              className='flex-1 py-3 pr-3 bg-white'
              onChangeText={onChangeSearchText}
              value={searchText}
            />
          </View>

          <FlatList
            data={filteredMeals}
            renderItem={renderItem}
            keyExtractor={(item) => item.idMeal}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
