import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'blue'
    };
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(backgroundColor)
  {
    this.setState({ backgroundColor  })
  }
  render() { 
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        
        <View style={styles.row}>
        <View style={styles.sample} />
        <Text styel={styles.text}>Yellow!</Text>

        </View>
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
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'


  }
  
});