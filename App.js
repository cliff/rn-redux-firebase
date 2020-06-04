import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import {PersistGate} from 'redux-persist/integration/react'; 

import NamesList from "./screens/NamesList";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NamesList/>
        </PersistGate>
      </Provider>
    );
  }
}
