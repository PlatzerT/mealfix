import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import FavoritesScreen from "./src/screens/favorites";
import HistoryScreen from "./src/screens/history";
import HomeScreen from "./src/screens/home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon(props) {
            let iconName;
            if (route.name === "Home") {
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
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Favoriten' component={FavoritesScreen} />
        <Tab.Screen name='Verlauf' component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
