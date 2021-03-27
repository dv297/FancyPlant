import React from "react";
import { Image, Dimensions } from "react-native";
import { Container } from "native-base";

import Logo from "../../assets/logo.png";
import DeviceListContainer from "../components/DeviceListContainer";

const dimensions = Dimensions.get("window");

const styles = {
  tinyLogo: {
    width: dimensions.width,
    height: Math.round((dimensions.width * 9) / 16),
  },
};

const HomeScreen = () => {
  return (
    <Container>
      <Image style={styles.tinyLogo} source={Logo} alt="FancyPlant logo" />
      <DeviceListContainer />
    </Container>
  );
};

export default HomeScreen;
