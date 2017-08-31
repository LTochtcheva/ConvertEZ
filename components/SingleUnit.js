import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class SingleUnit extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  render () {
    return (

          <TouchableOpacity
            onPress={() => { alert('You tapped the button!')}}>
            <Text style={this.state.isSelected ? styles.selectedUnit : this.props.style} >{this.props.unit}</Text>
          </TouchableOpacity>
    )
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
