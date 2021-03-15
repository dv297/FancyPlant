import React from "react";
import { Auth } from "aws-amplify";
import { Image, Dimensions } from "react-native";
import { Container, connectStyle } from "native-base";

import Logo from "../../assets/logo.png";

let dimensions = Dimensions.get("window");

class HomeScreen extends React.Component {
  render() {
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
      </Container>
    );
  }
}

const styles = {
  tinyLogo: {
    width: dimensions.width,
    height: Math.round((dimensions.width * 9) / 16),
  },
};

export default connectStyle("platform", styles)(HomeScreen);
