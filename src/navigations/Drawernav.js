import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Bottomtabnav from "./Bottomtabnav";

import About from "../screens/About";
import Contact from "../screens/Contact";
import Details from "../screens/Details";

const Drawer = createDrawerNavigator();

export default function Drawernav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Bottomtabnav}
        options={{ title: "Home Page" }}
      />
      <Drawer.Screen
        name="GridView"
        component={Details}
        options={{ title: "Grid View" }}
      />
      <Drawer.Screen
        name="ListView"
        component={About}
        options={{ title: "List View" }}
      />
      <Drawer.Screen
        name="Card View"
        component={Contact}
        options={{ title: "Card View" }}
      />
    </Drawer.Navigator>
  );
}
