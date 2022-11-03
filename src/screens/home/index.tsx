import React, { useState } from "react";
import {
  StyledButton,
  StyledSafeAreaView,
  StyledText,
  StyledTextInput,
  StyledView,
} from "../../styles/globals";
import Icon from "react-native-vector-icons/Feather";
import { getAllIngredients } from "../../services/recipe-service";

export default function HomeScreen() {
  const [searchText, onChangeSearchText] = useState("");
  return (
    <StyledView>
      <StyledSafeAreaView />
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
        <StyledText>ok</StyledText>
        <StyledButton
          className='bg-black'
          title='Fetch'
          onPress={() => getAllIngredients()}
        />
      </StyledView>
    </StyledView>
  );
}
