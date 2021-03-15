import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { DarkGreen, LightGreen } from "../colors.js";

const PrimaryButton = (props) => {
  return (
    <Button style={styles.primaryButton} primary onPress={props.onPressAction}>
      <Text style={styles.primaryButtonText}>{props.displayText}</Text>
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
