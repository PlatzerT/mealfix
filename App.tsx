import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import Icon from "react-native-vector-icons/Ionicons";
import FavoritesTab from "./src/tabs/favorites";
import HistoryTab from "./src/tabs/history";
import HomeScreen from "./src/tabs/home";

const Tab = createBottomTabNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon(props) {
            let iconName;
            if (route.name === "HomeTab") {
              iconName = props.focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Favoriten") {
              iconName = props.focused ? "ios-star" : "ios-star-outline";
            } else if (route.name === "Verlauf") {
              iconName = props.focused ? "ios-refresh" : "ios-refresh-outline";
            }
            return (
              <Icon
                name={iconName || ""}
                size={props.size}
                color={props.color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name='HomeTab'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name='Favoriten' component={FavoritesTab} />
        <Tab.Screen name='Verlauf' component={HistoryTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
