import { createSlice } from "@reduxjs/toolkit";

const bluetoothSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },
});

export const { increment, decrement } = bluetoothSlice.actions;
export default bluetoothSlice.reducer;
