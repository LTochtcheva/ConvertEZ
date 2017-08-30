import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class Try extends Component {
  render () {
    return (

      <View style={styles.row}>
        <Text>My playground</Text>
      </View>

            )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 5,
    margin: 5
  }
})
