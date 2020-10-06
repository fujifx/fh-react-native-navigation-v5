import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SupportScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button
        title="Details screen"
        onPress={() => alert("Support Clicked!")}
      />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
