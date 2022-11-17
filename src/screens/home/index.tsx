import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import IngredientList from "../../components/ingredient-list";
import useFetch from "../../hooks/useFetch";

export default function HomeScreen() {
  const [searchText, onChangeSearchText] = useState("");
  const { data, loading, error } = useFetch("/list.php", {
    params: {
      i: "list",
    },
  });

  //console.log(data.meals[0]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>Something went wrong...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>No data available...</Text>
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView />
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

        <IngredientList ingredients={data.meals || []} />
      </View>
    </View>
  );
}
