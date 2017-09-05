import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Units from './Units.js'

export default class From extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render () {
    return (

          <View>
            <Text style={styles.header}>From</Text>
            <Units
              units={this.props.option.unitsMetric}
              from={true}
              //style={styles.unit}
              onSelect={this.props.selectUnit}/>
            <Units
              units={this.props.option.unitsImperial}
              from={true}
              style={styles.unit}
              onSelect={this.props.selectUnit}/>
          </View>
                )
  }
}
const styles = StyleSheet.create({

  header: {
    color: 'blue',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10
  },
  unit: {
    fontSize: 18,
    color: 'blue',
    margin: 2,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue'
  }
})
