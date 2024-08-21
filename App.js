import MainScreen from "./src/screens/MainScreen/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HistoryProvider } from "./src/context/History";
import History from "./src/screens/History";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <HistoryProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          barStyle={{ backgroundColor: "#000", height: 100 }}
        >
          <Tab.Screen
            name="Home"
            component={MainScreen}
            options={{
              tabBarLabel: "Dices",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="dice-d20"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Histórico"
            component={History}
            options={{
              tabBarLabel: "History",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="history"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </HistoryProvider>
  );
}
