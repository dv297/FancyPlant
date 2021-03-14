import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, Image, Dimensions } from "react-native";
import Logo from "../../assets/logo.png";
import { Container, Button, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

let dimensions = Dimensions.get("window");

const HomeScreen = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    setIsReady(true);
  });

  const onSignOutPress = () => {
    try {
      Auth.signOut();
    } catch (error) {
      console.log("Error Signing Out: ", error);
    }
  };
  
  return (
    <Container>
      <Image style={styles.tinyLogo} source={Logo} alt="FancyPlant logo" />
      <Text>Home</Text>
      <Button primary onPress={onSignOutPress}>
        <Text>Sign Out</Text>
      </Button>
      <StatusBar style="auto" />
    </Container>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: dimensions.width,
    height: Math.round((dimensions.width * 9) / 16),
  },
});

export default withAuthenticator(HomeScreen);
