import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import awsconfig from "./src/aws-exports";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/views/HomeScreen";
import SettingsScreen from "./src/views/SettingsScreen";
import StyledTabNavigator from "./src/components/StyledTabNavigator";

Amplify.configure({
  ...awsconfig,
  // Disabling Analytics to prevent error message about missing credentials
  // https://github.com/aws-amplify/amplify-js/issues/5918
  Analytics: {
    disabled: true,
  },
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    setIsReady(true);
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StyledTabNavigator tab={Tab}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </StyledTabNavigator>
      <StatusBar hidden />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
