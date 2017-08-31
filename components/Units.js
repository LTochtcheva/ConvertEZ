import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'



export default class Units extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  render () {
    return (

      <View style={styles.row}>
        {this.props.units.map((unit, i) => { return (
          <TouchableOpacity
            key={i}
            onPress={() => {
              this.props.onSelect(unit)}}>
            <Text style={this.state.isSelected ? styles.selectedUnit : this.props.style} >{unit}</Text>
          </TouchableOpacity>
          )}
        )}
      </View>)
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 5,
    margin: 5
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
