import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleProvider } from "native-base";

import awsconfig from "./src/aws-exports";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";
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
    <StyleProvider style={getTheme(platform)}>
      <NavigationContainer>
        <StyledTabNavigator tab={Tab}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </StyledTabNavigator>
        <StatusBar hidden />
      </NavigationContainer>
    </StyleProvider>
  );
};

export default withAuthenticator(App);
