import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button
        title="Details screen"
        onPress={() => alert("Settings Clicked!")}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
