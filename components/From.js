import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Units from './Units.js'

export default class From extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  selectUnit() {
    this.setState({isSelected: true})

  }

  render () {
    return (

          <View>
            <Text style={styles.header}>From</Text>
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
  },
  selectedUnit: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 2,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'blue'
  }
})
