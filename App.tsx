import { Text, View } from "react-native";
import HomeScreen from "./src/screens/home";
import { StyledText } from "./src/styles/globals";

export default function App() {
  return (
    <View>
      {/* Navigation goes here */}
      <HomeScreen />
    </View>
  );
}
