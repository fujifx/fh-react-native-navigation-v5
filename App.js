import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./app/screen/MainTabScreen";
import DrawerContent from "./app/screen/DrawerContent";
import SupportScreen from "./app/screen/SupportScreen";
import BookmarksScreen from "./app/screen/BookmarksScreen";
import SettingsScreen from "./app/screen/SettingsScreen";

import RootStackScreen from "./app/screen/RootStackScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
