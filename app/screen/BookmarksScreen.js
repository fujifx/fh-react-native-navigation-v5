import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BookmarksScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bookmarks Screen</Text>
      <Button
        title="Details screen"
        onPress={() => alert("Bookmarks Clicked!")}
      />
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
