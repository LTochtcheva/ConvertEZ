import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'



export default class Units extends Component {
  render () {
    return (
      <View style={styles.row}>
        {this.props.units.map((unit, i) => { return (
          <Text style={this.props.style} key={i}>{unit}</Text>)})}
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
