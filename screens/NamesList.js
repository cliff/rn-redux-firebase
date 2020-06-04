import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { likeName, dislikeName } from '../redux/actions/nameAction';
import {addTaskToFirebase, removeTaskFromFirebase}  from '../config/firebase'

class NamesList extends React.Component {

  componentDidMount() {
    addTaskToFirebase("get things done!")
  }

  render() {
    const { likedNames, dislikedNames } = this.props;

    return (
      <View style={styles.container}>
        <Text>Liked Names</Text>
        <ScrollView>
          {likedNames.map((name, index) => (
            <TouchableOpacity key={index} onPress={() => this.props.dislikeName(name)}>
              <View style={{flex: 1}}>
                <Text style={styles.item}>{name}</Text>
              </View>
            </TouchableOpacity>  
          ))}
        </ScrollView>
        <Text>Disliked Names</Text>
        <ScrollView>
          {dislikedNames.map((name, index) => (
            <TouchableOpacity key={index} onPress={() => this.props.likeName(name)}>
              <View style={{flex: 1}}>
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
    marginTop: 50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = state => {
  console.log(state);
  return { 
    likedNames: state.nameReducer.likedNames,
    dislikedNames: state.nameReducer.dislikedNames,
  };
};

export default connect(
  mapStateToProps,
  { likeName, dislikeName }
)(NamesList);

