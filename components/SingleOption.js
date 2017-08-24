import React from 'react';
import {  StyleSheet,
          View,
          Text,
          TouchableHighlight,
          Image
       } from 'react-native';

 const SingleOption = ({option, onSelect=f=>f}) => (
      <TouchableHighlight style={styles.button}
        onPress={() => onSelect(option)}
        underlayColor='darksalmon'>
        <View style={styles.row}>
          <Image style={styles.icon} source={option.icon} />
          <Text style={styles.text}>
            {option.title}
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
    margin: 10,
    height: 25,
    width: 25

  }
})

export default SingleOption;
