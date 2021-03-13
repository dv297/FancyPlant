import { StatusBar } from "expo-status-bar";
import React from "react";
//import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Logo from "./assets/logo.png";

let dimensions = Dimensions.get("window");

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={Logo} alt="FancyPlant logo" />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

// export default withAuthenticator(App);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: dimensions.width,
    height: Math.round((dimensions.width * 9) / 16),
  },
});
