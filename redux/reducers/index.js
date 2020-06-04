import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import { reducer as network } from "react-native-offline";

// Redux: Root Reducer
const rootReducer = combineReducers({
  nameReducer: nameReducer,
  network
});

// Exports
export default rootReducer;
