import React from "react";
import { Image, Dimensions } from "react-native";
import { Container, connectStyle } from "native-base";

import Logo from "../../assets/logo.png";

const dimensions = Dimensions.get("window");

const styles = {
  tinyLogo: {
    width: dimensions.width,
    height: Math.round((dimensions.width * 9) / 16),
  },
};

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Image style={styles.tinyLogo} source={Logo} alt="FancyPlant logo" />
      </Container>
    );
  }
}

export default connectStyle("platform", styles)(HomeScreen);
