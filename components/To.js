import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Units from './Units.js'

export default class To extends Component {
  render () {
    return (

          <View>
            <Text style={styles.header}>To</Text>
            <Units
              units={this.props.option.unitsMetric}
              style={styles.unit}
              onSelect={this.props.selectUnit}/>
            <Units
              units={this.props.option.unitsImperial}
              style={styles.unit}
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
  },
  unit: {
    fontSize: 18,
    color: 'green',
    margin: 2,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue'
  }
})
