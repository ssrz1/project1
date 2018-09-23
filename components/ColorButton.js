import React from 'react';
import { 
        StyleSheet,
        Text,
        View,
        TouchableHighlight } from 'react-native';

        const ColorButton = () => {
         <TouchableHighlight
         style={styles.button}
        onPress={() => this.changeColor('yellow')}
        underlayColor="orange"
        >
          <View style={styles.row}>
          <View
                style={[styles.sample,
                       { backgroundColor: 'yellow' }
          ]}
          />
          <Text style={styles.text}>Yellow!</Text>

          </View>
        </TouchableHighlight>
        }
        const styles = StyleSheet.create({
           
            button: {
              
              padding: 10,
              borderWidth: 2,
              borderRadius: 10,
              alignSelf: 'stretch',
              backgroundColor: 'rgba(255,255,255,.8)'
             
            },
            row: {
              flexDirection: 'row',
              alignItems: 'center'
          
            },
            sample: {
              height: 20,
              width: 20,
              borderRadius: 10,
              margin: 5,
              backgroundColor: 'white'
          
            },
            text: {
              fontSize: 30,
              margin: 5
            }
            
          });