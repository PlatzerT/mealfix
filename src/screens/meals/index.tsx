import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledSafeAreaView,
  StyledText,
  StyledTextInput,
  StyledView,
} from "../../styles/globals";
import Icon from "react-native-vector-icons/Feather";
import { getAllIngredients, getAllMeals } from "../../services/recipe-service";
import { FlatList, Text, View } from "react-native";
import { WINDOWS } from "nativewind/dist/utils/selector";

export default function MealsScreen() {
  const [searchText, onChangeSearchText] = useState("");
  const [mealslist, setmealslist] = useState<any>([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  async function fetchMeals() {
    getAllMeals().then((meals) => {
      setmealslist(meals);
    });
  }

  const Item = ({ title }: any) => {
    return (
      <View>
        <StyledText className='text-black'>{title}</StyledText>
      </View>
    );
  };

  const renderItem = ({ item }: any) => {
    return <Item title={item.strMeal} />;
  };

  return (
    <StyledView>
      <StyledSafeAreaView>
        <StyledView className='h-full px-4'>
          <StyledView className='relative flex flex-row items-center justify-center'>
            <Icon
              name='search'
              color={"#6b7280"}
              style={{
                padding: 11,
                backgroundColor: "white",
              }}
              size={18}
            />
            <StyledTextInput
              className='flex-1 py-3 pr-3 bg-white'
              onChangeText={onChangeSearchText}
              value={searchText}
            />
          </StyledView>

          <FlatList
            data={mealslist}
            renderItem={renderItem}
            keyExtractor={(item) => item.idMeal}
          />
        </StyledView>
      </StyledSafeAreaView>
    </StyledView>
  );
}
