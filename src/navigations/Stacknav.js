import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Drawernav from "./Drawernav";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function Stacknav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Drawer" component={Drawernav} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerShown: true,
            headerTitle: "Details Page",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
