import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
//import { Container, Header, Content,Item, Input } from 'native-base'

export default class InputResult extends Component {
  render () {
    return (

        <View style={styles.container}>
         <TextInput
          placeholder='Input'
          style={styles.input} />
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
  }

})
