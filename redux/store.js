import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {persistStore, persistReducer} from 'redux-persist';
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";

import rootReducer from "./reducers";



const createdStore = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
const createdPersistor = persistStore(createdStore);

export const store = createdStore;
export const persistor = createdPersistor;
