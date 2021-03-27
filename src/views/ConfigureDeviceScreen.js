import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Text, Button } from "native-base";
import { scanForDevices, stopScan } from "../features/bluetooth";

const ConfigureDeviceScreen = () => {
  const dispatch = useDispatch();
  const bluetooth = useSelector((state) => state.bluetooth);

  useEffect(() => {
    const bluetoothScanTimer = setInterval(
      () => dispatch(scanForDevices()),
      5000
    );

    return () => {
      clearInterval(bluetoothScanTimer);
    };
  });

  useEffect(() => {
    dispatch(scanForDevices());
  }, []);

  const isCurrentlyScanning = bluetooth.scanState === "pending";

  const toggleScanning = () => {
    if (isCurrentlyScanning) {
      dispatch(stopScan());
    } else {
      dispatch(scanForDevices());
    }
  };

  return (
    <Container>
      <Text>Configure Device</Text>
      <Button primary rounded onPress={toggleScanning}>
        <Text>
          {isCurrentlyScanning ? "Stop " : "Start "}
          scanning
        </Text>
      </Button>
      {bluetooth.unpairedDevices.map((device) => (
        <Text key={device.address}>{device.name}</Text>
      ))}
    </Container>
  );
};

export default ConfigureDeviceScreen;
