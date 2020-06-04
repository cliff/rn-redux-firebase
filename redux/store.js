import { createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';  
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createdStore = createStore(persistedReducer);  
const createdPersistor = persistStore(createdStore);

export const store = createdStore;  
export const persistor = createdPersistor; 
