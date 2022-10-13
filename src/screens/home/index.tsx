import React, { useState } from "react";
import {
  StyledSafeAreaView,
  StyledTextInput,
  StyledView,
} from "../../styles/globals";
import Icon from "react-native-vector-icons/Feather";

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
              backgroundColor: "#f3f4f6",
            }}
            size={18}
          />
          <StyledTextInput
            className='flex-1 py-3 pr-3 bg-gray-100'
            onChangeText={onChangeSearchText}
            value={searchText}
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
