import React from 'react';
import { StyleSheet, Image, View, StatusBar, Dimensions } from 'react-native';
import splashpic from './assets/index.png'; 


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image style={styles.pic} source={splashpic} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pic: {
    flex: 1,
    //taking dimensions of full window(any Screen) and taking width out of it as wide as screen.
    width: Dimensions.get('window').width

  }
});
//why we havent use app registory?
