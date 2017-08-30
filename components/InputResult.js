import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import {  Icon } from 'native-base'

export default class InputResult extends Component {
  render () {

return (

        <View style={styles.container}>
         <TextInput
          placeholder='Input'
          style={styles.input}/>
         <TouchableOpacity
          style={styles.button}
          onPress={() => { alert('You tapped the button!')}}>
          <Icon name='arrow-forward' style={styles.icon} />
          </TouchableOpacity>
         <TextInput
          value='Result'
          style={styles.result} />
        </View>
                )


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  input: {
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
    margin: 5,
    padding: 5,
    fontSize: 26,
    alignSelf: 'center'
  },
  result: {
    color: 'green',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    flex:1,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
    fontSize: 26
  },
  icon: {
    color: 'blue',
    alignSelf: 'center',
    margin: 10
  },
  button: {
    alignSelf: 'center'
  }
})
