import React, { useState } from "react";
import { View, Text, Button, Icon } from "native-base";
import {} from "@expo/vector-icons";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

const DeviceListContainer = () => {
  const [deviceList] = useState([]);
  const navigation = useNavigation();

  const onAddNewDevicePress = () => {
    navigation.navigate("Add a New Device");
  };

  if (deviceList.length === 0) {
    return (
      <View style={tailwind("flex items-center justify-center")}>
        <Text style={tailwind("mb-4")}>
          You do not have any devices registered.
        </Text>
        <Button
          rounded
          iconLeft
          primary
          style={tailwind("px-6 py-2 self-center")}
          onPress={onAddNewDevicePress}
        >
          <Icon name="ios-add" size={32} />
          <Text>Add a New Device</Text>
        </Button>
      </View>
    );
  }

  return null;
};

export default DeviceListContainer;
