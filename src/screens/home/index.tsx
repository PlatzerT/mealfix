import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDebounce } from "use-debounce";
import IngredientList from "../../components/ingredient-list";
import useFetch from "../../hooks/useFetch";
import { Ingredient } from "../../types/ingredient";

export default function HomeScreen() {
  const [searchText, onChangeSearchText] = useState("");
  const { data, loading, error } = useFetch("/list.php", {
    params: {
      i: "list",
    },
  });
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [displayedIngredients, setDisplayedIngredients] = useState<
    Ingredient[]
  >([]);
  const [debouncedSearchText] = useDebounce(searchText, 500);

  useMemo(() => {
    setIngredients(data?.meals || []);
    setDisplayedIngredients(data?.meals || []);
  }, [data]);

  useEffect(() => {
    let temp = ingredients ? [...ingredients] : [];
    temp = temp.filter((i) => {
      return i.strIngredient.toLowerCase().includes(searchText.toLowerCase());
    });
    setDisplayedIngredients(temp);
  }, [debouncedSearchText]);

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
      <View className='h-full p-4'>
        <View className='relative flex flex-row items-center justify-center bg-white rounded-lg'>
          <Icon
            name='search'
            color={"#6b7280"}
            style={{
              padding: 11,
              backgroundColor: "transparent",
            }}
            size={18}
          />
          <TextInput
            className='flex-1 py-3 pr-3'
            onChangeText={onChangeSearchText}
            value={searchText}
          />
        </View>

        <IngredientList ingredients={displayedIngredients} />
      </View>
    </View>
  );
}
