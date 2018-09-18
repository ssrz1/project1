import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.defaultText}>Hey,</Text>
        <Text style={styles.defaultText}>you</Text>
        <Text style={styles.defaultText}>MR</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Sajjad</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#DDD',
    justifyContent: 'center'
  },
  //s
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
   }
})
//why we havent use app registory?
