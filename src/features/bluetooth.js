/* eslint-disable no-param-reassign, no-console */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RNBluetoothClassic from "react-native-bluetooth-classic";

const scanForDevicesThunk = createAsyncThunk(
  "bluetooth/scanForDevices",
  async (_, thunkApi) => {
    const { scanState, currentRequestId } = thunkApi.getState().bluetooth;

    if (scanState !== "pending" || currentRequestId !== thunkApi.requestId) {
      return;
    }

    const unpairedDevices = await RNBluetoothClassic.startDiscovery();
    console.log(unpairedDevices);
    return unpairedDevices.map(({ name, address }) => ({ name, address }));
  }
);

const bluetoothSlice = createSlice({
  name: "bluetooth",
  initialState: {
    unpairedDevices: [],
    scanState: "idle",
    currentRequestId: null,
    error: null,
  },
  reducers: {
    stopScan: () => {
      console.log("TODO: Stopping scan...");
    },
  },
  extraReducers: {
    [scanForDevicesThunk.pending]: (state, action) => {
      if (state.scanState === "idle") {
        state.scanState = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },
    [scanForDevicesThunk.fulfilled]: (state, action) => {
      if (
        state.scanState === "pending" &&
        state.currentRequestId === action.meta.requestId
      ) {
        state.scanState = "idle";
        state.unpairedDevices = action.payload;
        state.currentRequestId = undefined;
      }
    },
    [scanForDevicesThunk.rejected]: (state, action) => {
      if (
        state.scanState === "loading" &&
        state.currentRequestId === action.meta.requestId
      ) {
        state.scanState = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const {
  // scanForDevices,
  pollForDevices,
  stopScan,
} = bluetoothSlice.actions;
export const scanForDevices = scanForDevicesThunk;
export default bluetoothSlice.reducer;
