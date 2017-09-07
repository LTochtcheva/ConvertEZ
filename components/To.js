import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Units from './Units.js'

export default class To extends Component {
  render () {
    return (
          <View>
            <Text style={styles.header}>To</Text>
            <Units
              units={this.props.option.units}
              from={false}
              onSelect={this.props.selectUnit}/>
          </View>
    )
  }
}
const styles = StyleSheet.create({

  header: {
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10
  }
})
