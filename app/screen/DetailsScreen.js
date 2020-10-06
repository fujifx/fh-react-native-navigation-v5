import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// const DetailsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Details screen, again"
//         onPress={() => navigation.push("Details")}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go to the first/ root screen"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// };

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Details screen, again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the first/ root screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
