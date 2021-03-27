import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bluetoothSlice from "./features/bluetooth";

const store = configureStore({
  reducer: combineReducers({ bluetooth: bluetoothSlice }),
});

export default store;
