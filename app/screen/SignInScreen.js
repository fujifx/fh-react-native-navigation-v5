import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Platform,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange_Email = (val) => {
    if (val.length > 0 && val.indexOf("@") > -1 && val.indexOf(".") > -1) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const textInputChange_Password = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecurityTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange_Email(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.title_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange_Password(val)}
          />
          <TouchableOpacity onPress={updateSecurityTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <LinearGradient colors={["#08d4c4", "#3b5998"]} style={styles.signIn}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </LinearGradient>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title_header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  title_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  signUp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#009387",
    borderWidth: 1,
    marginTop: 15,
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#009387",
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
