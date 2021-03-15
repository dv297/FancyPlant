import { StatusBar } from "expo-status-bar";
import React from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, Image, Dimensions } from "react-native";
import Logo from "../../assets/logo.png";
import { Container } from "native-base";
import PrimaryButton from "../components/PrimaryButton.js";

let dimensions = Dimensions.get("window");

const HomeScreen = () => {
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
      <PrimaryButton onPressAction={onSignOutPress} displayText="Sign Out">
        <Text>Sign Out</Text>
      </PrimaryButton>
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
