import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Header, Body, Title, View, Text } from "native-base";

const SettingsScreen = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>FancyPlant</Title>
        </Body>
      </Header>
      <View>
        <Text>Settings</Text>
      </View>
    </Container>
  );
};

export default SettingsScreen;
