import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class FlexBox extends Component {

  render() {
    return (
      <View style = {styles.v}>
        <View style = {styles.v1}>
          <Text>1</Text>
        </View>
        <View style = {styles.v2}>
          <Text style = {styles.lable}>lablelablelablelablelable</Text>
          <View style = {styles.btn}>
            <TouchableHighlight style = {styles.button1}><Text>b1</Text></TouchableHighlight>
            <TouchableHighlight style = {styles.button2}><Text>b2</Text></TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  v: {
    height: 200,
    flexDirection: 'row',
    backgroundColor: '#222222',
  },
  v1: {
    width: 70,
    height: 70,
    margin: 30,
    backgroundColor: 'red',
  },
  v2: {
    backgroundColor: '#444444',
    flex: 1,
  },
  lable: {
    backgroundColor: 'yellow',
    height: 20,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  btn: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    flex: 1,
    margin: 10,
    marginLeft: 0,
    backgroundColor: 'green',
  },
  button2: {
    flex: 1,
    margin: 10,
    marginRight: 0,
    backgroundColor: 'blue',
  },
});
