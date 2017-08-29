import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'



export default class Units extends Component {
  render () {
    return (

      <View style={styles.row}>
        {this.props.units.map((unit, i) => { return (
          <TouchableOpacity
            key={i}
            onPress={() => {this.props.onSelect(unit)}}>
            <Text style={this.props.style} >{unit}</Text>
          </TouchableOpacity>
          )}
        )}
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
