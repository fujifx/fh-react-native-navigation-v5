import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native-animatable";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";

import RootStackScreen from "./app/screen/RootStackScreen";
import MainTabScreen from "./app/screen/MainTabScreen";
import DrawerContent from "./app/screen/DrawerContent";
import SupportScreen from "./app/screen/SupportScreen";
import BookmarksScreen from "./app/screen/BookmarksScreen";
import SettingsScreen from "./app/screen/SettingsScreen";
import { AuthContext } from "./app/components/context";

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
        break;
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
        break;
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
        break;
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
        break;
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => ({
    // signIn: async (userName, password) => {
    signIn: async (foundUser) => {
      // setUserToken("auth");
      // setIsLoading(false);

      // Below username and password should be check against API service
      // if (userName == "user" && password == "pass") {

      let userToken = String(foundUser[0].userToken);
      try {
        await AsyncStorage.setItem("userToken", userToken);
      } catch (error) {
        console.log("SignIn(): ", error);
      }

      console.log("SignIn() - user token: ", userToken);
      dispatch({ type: "LOGIN", id: foundUser[0].userName, token: userToken });
    },
    signUp: async (userName, password) => {
      let userToken = null;
      if (userName == "user" && password == "pass") {
        try {
          userToken = "auth"; // Should be generated via API
          await AsyncStorage.setItem("userToken", userToken);
        } catch (error) {
          console.log("SignUp(): ", error);
        }
      }
      console.log("SignUp() - user token: ", userToken);
      dispatch({ type: "REGISTER", id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);

      try {
        await AsyncStorage.removeItem("userToken");
      } catch (error) {
        console.log("SignOut(): ", error);
      }
      dispatch({ type: "LOGOUT" });
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);

      // let userToken = "eff";
      // console.log("user token: ", userToken);
      // dispatch({ type: "RETRIEVE_TOKEN", token: userToken }); // token should be retrieved from async storage (below)

      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log("useEffect(): ", error);
      }
      console.log("useEffect() - user token: ", userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken }); // token should be retrieved from async storage (below)
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
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
