import React from "react";
import { Auth } from "aws-amplify";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  const onSignOutPress = () => {
    try {
      Auth.signOut();
    } catch (error) {
      console.log("Error Signing Out: ", error);
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Sign Out" onPress={onSignOutPress} />
    </View>
  );
};

export default HomeScreen;
