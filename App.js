import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "@react-native-firebase/firestore";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import NamesList from "./screens/NamesList";
import LoadingScreen from "./loading-screen";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoadingScreen />
      </Provider>
    );
  }
}
