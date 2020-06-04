import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { connect } from "react-redux";
import { likeName, dislikeName, addName } from "../redux/actions/nameAction";
import { addTaskToFirebase, removeTaskFromFirebase } from "../config/firebase";
class NamesList extends React.Component {
  async componentDidMount() {
    addName("Matt");
  }

  render() {
    const { names, dislikedNames } = this.props;

    return (
      <View style={styles.container}>
        <Text>Liked Names</Text>
        <ScrollView>
          {names.map((name, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.props.dislikeName(name)}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.item}>{name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    marginTop: 50
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

const mapStateToProps = state => {
  console.log(state);
  return {
    names: state.names.data,
    dislikedNames: state.names.dislikedNames
  };
};

export default connect(mapStateToProps, { likeName, dislikeName, addName })(
  NamesList
);
