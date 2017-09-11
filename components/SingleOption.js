import React from 'react'
import {  StyleSheet,
          View,
          Text,
          TouchableHighlight,
          Image
       } from 'react-native'


 const SingleOption = ({option,  onSelect=f=>f}) =>
      (
      <TouchableHighlight style={styles.button}
        onPress={() => {onSelect(option)}}
        underlayColor='darkorange'>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    margin: 5,
    padding: 5,
    fontFamily: 'Heiti SC'
  },
  button: {
    backgroundColor: 'lightsteelblue',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    borderColor: 'maroon',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: 'maroon',
    shadowOffset: { height: 2, width: 0 }
  },
  icon: {
    margin: 10,
    height: 25,
    width: 25

  }
})

export default SingleOption
