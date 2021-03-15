import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { DarkGreen, LightGreen } from "../colors";

const StyledTabNavigator = (props) => {
  const { tab: Tab, children } = props;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: DarkGreen,
        inactiveTintColor: "#333",
        inactiveBackgroundColor: LightGreen,
        activeBackgroundColor: LightGreen,
      }}
    >
      {children}
    </Tab.Navigator>
  );
};

export default StyledTabNavigator;

StyledTabNavigator.propTypes = {
  /**
   * The Tab component returned by React Navigation's createBottomTabNavigator function.
   */
  tab: PropTypes.object,

  /**
   * The content to put under the TabNavigator.
   */
  children: PropTypes.any,
};
