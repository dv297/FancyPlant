import React from "react";
import { StyleSheet } from "react-native";
import { Button, View } from "native-base";
import { DarkGreen, LightGreen } from "../colors.js";

const PrimaryButton = (props) => {
  const { children, ...restOfProps } = props;
  return (
    <Button style={styles.primaryButton} primary {...restOfProps}>
      <View style={styles.primaryButtonText}>{children}</View>
    </Button>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: LightGreen,
  },
  primaryButtonText: {
    color: DarkGreen,
  },
});

export default PrimaryButton;
