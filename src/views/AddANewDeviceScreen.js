import React, { useState } from "react";
import tailwind from "tailwind-rn";
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, Container, Icon, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import classnames from "../utils/classnames";

const mockDevices = [
  {
    name: "Temperature",
    iconName: "temperature-high",
    iconFamily: "FontAwesome5",
    iconColor: "#f56c6c",
  },
  {
    name: "Humidity",
    iconName: "ios-water-outline",
    iconFamily: "Ionicons",
    iconColor: "#6cc9e0",
  },
  {
    name: "Light",
    iconName: "light-up",
    iconFamily: "Entypo",
    iconColor: "#fcda4e",
  },
  {
    name: "Soil Moisture",
    iconName: "water",
    iconFamily: "FontAwesome5",
    iconColor: "#5e461e",
  },
  {
    name: "PH Levels",
    iconName: "water",
    iconFamily: "MaterialCommunityIcons",
    iconColor: "#a9cf53",
  },
];

const AddANewDeviceScreen = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const navigation = useNavigation();

  const onSubmitPress = () => {
    navigation.navigate("Configure Device");
  };

  return (
    <Container style={tailwind("p-6")}>
      <View>
        <Text style={tailwind("mb-6 text-xl")}>
          Which device would you like to add?
        </Text>
        <ScrollView style={tailwind("flex flex-row pb-6 mb-6")} horizontal>
          {mockDevices.map((device) => {
            const isDeviceSelected = device.name === selectedDevice;

            return (
              <TouchableOpacity
                key={device.name}
                onPress={() => setSelectedDevice(device.name)}
              >
                <View style={tailwind("mr-6")}>
                  <View
                    style={classnames(
                      tailwind(
                        "rounded-lg h-32 w-32 flex justify-center items-center bg-gray-100"
                      ),
                      {
                        styles: tailwind("border-4 border-blue-300"),
                        condition: isDeviceSelected,
                      }
                    )}
                  >
                    <Icon
                      name={device.iconName}
                      type={device.iconFamily}
                      style={{ fontSize: 64, color: device.iconColor }}
                    />
                  </View>
                  <Text
                    style={classnames(tailwind("text-lg w-full text-center"), {
                      styles: tailwind("font-semibold"),
                      condition: isDeviceSelected,
                    })}
                  >
                    {device.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {selectedDevice && (
          <Button primary full onPress={onSubmitPress}>
            <Text>Submit</Text>
          </Button>
        )}
      </View>
    </Container>
  );
};

export default AddANewDeviceScreen;
