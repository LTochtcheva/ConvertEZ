import React, { Component } from 'react';
import {  StyleSheet,
          View,
          Text,
          TouchableHighlight,
          Image
       } from 'react-native';
import tempIcon from '../images/temperature.png'

 const SingleOption = () => (
      <TouchableHighlight style={styles.button}
        onPress={() => {console.log('clicked')}}
        underlayColor='darksalmon'>
        <View style={styles.row}>
          <Image style={styles.icon} source={tempIcon} />
          <Text style={styles.text}>
            Temperature
          </Text>
        </View>
      </TouchableHighlight>
      )


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 22,
    margin: 5,
    padding: 10
  },
  button: {
    backgroundColor: 'lightsteelblue',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch'
  },
  icon: {
    margin: 10
  }
})
export default SingleOption;
