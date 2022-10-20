import React from "react";
import { Text } from "react-native";
import { StyledSafeAreaView, StyledView } from "../../styles/globals";

export default function HistoryScreen() {
  return (
    <StyledView>
      <StyledSafeAreaView />
      <StyledView className='h-full px-4'>
        <Text>Verlauf</Text>
      </StyledView>
    </StyledView>
  );
}
