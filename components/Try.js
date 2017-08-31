import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import measurements from '../consts/measurements.js'
export default class Try extends Component {
  render () {
    return (

      <View style={styles.row}>

        {measurements[3].unitsMetric.map((unit, i) => { return (
          <Button primary small info
            key={i}
            onPress={() => {alert(unit)}}
            style={styles.unit}
            text={unit}>
          </Button>
          )}
        )}
      </View>

            )
  }
}

const styles = StyleSheet.create({
  row: {

    marginTop: 30,
    margin: 5
  },
  unit: {
    margin:10
  }
})
