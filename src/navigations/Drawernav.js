import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ListView from "../screens/ListView";
import CardView from "../screens/CardView";
import GridView from "../screens/GridView";
import Home from "../screens/Home"
const Drawer = createDrawerNavigator();

export default function Drawernav() {
  return (
    <Drawer.Navigator
      style={{
        borderradius: "10px",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Home Page" }}
      />
      <Drawer.Screen
        name="GridView"
        component={GridView}
        options={{ title: "Grid View" }}
      />
      <Drawer.Screen
        name="ListView"
        component={ListView}
        options={{ title: "List View" }}
      />
      <Drawer.Screen
        name="CardView"
        component={CardView}
        options={{ title: "Card View" }}
      />
    </Drawer.Navigator>
  );
}
