import React from "react";
import { StyledButton } from "../../styles/globals";

export default function Button() {
  return <StyledButton onPress={() => console.log("ok")} title='Submit' />;
}
