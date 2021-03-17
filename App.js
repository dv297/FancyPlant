import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import tailwind from "tailwind-rn";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleProvider } from "native-base";

import awsconfig from "./src/aws-exports";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";
import HomeScreen from "./src/views/HomeScreen";
import AddANewDeviceScreen from "./src/views/AddANewDeviceScreen";
import ConfigureDeviceScreen from "./src/views/ConfigureDeviceScreen";
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

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Add a New Device"
        component={AddANewDeviceScreen}
      />
      <HomeStack.Screen
        name="Configure Device"
        component={ConfigureDeviceScreen}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <View style={tailwind("h-full w-full")}>
      <StyleProvider style={getTheme(platform)}>
        <NavigationContainer>
          <StyledTabNavigator tab={Tab}>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </StyledTabNavigator>
          <StatusBar hidden />
        </NavigationContainer>
      </StyleProvider>
    </View>
  );
};

export default withAuthenticator(App);
