import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React from "react";

// const RootStackScreen = ({ navigation }) => (
//   <RootStack.Navigator headerMode="none">
//     <RootStack.Screen name="SplashScreen" component={SplashScreen} />
//     <RootStack.Screen name="SignInScreen" component={SignInScreen} />
//     <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
//   </RootStack.Navigator>
// );

// export default RootStackScreen;
