import React from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import NamesList from "./screens/NamesList";
import firestore from "@react-native-firebase/firestore";

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const names = useSelector(state => state.names);
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      dispatch({ type: "SET_USER", ...user });
    });
    return () => {
      // unsubscribe on unmount
      subscriber();
    };
  }, []);
  React.useEffect(() => {
    if (user.status === "DONE_LOADING" && !user.uid) {
      // signInAnonymously
      auth()
        .signInAnonymously()
        .catch(() => {
          // firebase analytics... why did this happen?
          Alert.alert(
            "sorry..",
            "something went terribly wrong and we're not sure why?"
          );
        });
    }
  }, [user]);
  React.useEffect(() => {
    if (user.status === "DONE_LOADING" && user.uid) {
      // user has data
      firestore
        .collection("names")
        .get()
        .then(function(querySnapshot) {
          let data = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            data.push(doc.data());
          });
          dispatch({ type: "SET_NAMES", data });
        });
    }
  }, [user]);
  if (
    user.status === "LOADING" ||
    names.status === "LOADING" ||
    (user.status === "DONE_LOADING" && !user.uid)
  ) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <NamesList />;
};

export default LoadingScreen;
