import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'



export default class Units extends Component {
  render () {

    return (
      <View style={styles.row}>
        <Text style={styles.unit}>mg</Text>
        <Text style={styles.unit}>gram</Text>
        <Text style={styles.unit}>kg</Text>
        <Text style={styles.unit}>ton</Text>
      </View>

            )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'lightsteelblue',
    marginTop: 30,
  },
  unit: {
    fontSize: 20,
    color: 'blue',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'white',

  }
})
