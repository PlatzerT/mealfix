import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDebounce } from "use-debounce";
import IngredientList from "../../components/ingredient-list";
import useFetch from "../../hooks/useFetch";
import { Ingredient } from "../../types/ingredient";
import api from "../../utils/api";
import debounce from "lodash/debounce";
import ingredientsList from "../../../data/ingredients.json";
import _ from "lodash";

export interface SelectableIngredient extends Ingredient {
  selected: boolean;
  show: boolean;
}

async function fetchIngredients() {
  return api.get("/list.php", {
    params: {
      i: "list",
    },
  });
}

export default function HomeScreen() {
  const [searchText, onChangeSearchText] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    ingredientsList.meals
  );
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>(
    ingredientsList.meals
  );
  //const [debouncedSearchText] = useDebounce(searchText, 300);

  /*useEffect(() => {
    console.log("first");
    fetchIngredients()
      .then((res) => {
        setIngredients(res.data.meals);
        setFilteredIngredients(res.data.meals);
      })
      .catch((e) => console.error(e));
  }, []);*/

  /*useMemo(() => {
    console.log("search");
    if (debouncedSearchText) {
      const filter = () => {
        let temp: Ingredient[] = ingredients ? [...ingredients] : [];
        temp = temp.filter((i) =>
          i.strIngredient.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredIngredients(temp);
      };
      filter();
    }
  }, [debouncedSearchText]);*/

  function handleSearch(text: string) {
    debounce(text);
  }

  const debounce = useCallback(
    _.debounce((_searchVal: string) => {
      let temp: Ingredient[] = ingredients ? [...ingredients] : [];
      temp = temp.filter((i) =>
        i.strIngredient.toLowerCase().includes(_searchVal.toLowerCase())
      );
      setFilteredIngredients(temp);
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

  if (ingredients.length === 0 || filteredIngredients.length === 0) {
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
          <TextInput className='flex-1 py-3 pr-3' onChangeText={handleSearch} />
        </View>

        <IngredientList ingredients={filteredIngredients} />
      </View>
    </View>
  );
}
