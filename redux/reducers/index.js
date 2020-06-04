import { combineReducers } from "@reduxjs/toolkit";
import nameReducer from "./nameReducer";
import { reducer as network } from "react-native-offline";
import userReducer from "./userReducer";
// Redux: Root Reducer
const rootReducer = combineReducers({
  names: nameReducer,
  user: userReducer,
  network
});

// Exports
export default rootReducer;
