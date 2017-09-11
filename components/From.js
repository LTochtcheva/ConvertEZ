import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Units from './Units.js'

export default class From extends Component {

  render () {
    return (

          <View>
            <Text style={styles.header}>From</Text>
            <Units
              units={this.props.option.units}
              from={true}
              onSelect={this.props.selectUnit}/>
          </View>
    )
  }
}
const styles = StyleSheet.create({

  header: {
    color: 'blue',
    fontSize: 22,
    margin: 25,
    fontFamily: 'Heiti SC'
  }
})
