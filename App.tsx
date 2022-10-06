import Button from "./src/components/button";
import { StyledText, StyledView } from "./src/styles/globals";

export default function App() {
  return (
    <StyledView className="items-center justify-center flex-1">
      <StyledText className="text-4xl font-bold">Hello worldok!</StyledText>
      <Button />
    </StyledView>
  );
}
