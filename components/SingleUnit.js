import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class SingleUnit extends Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  changeStyle() {
    this.setState({isSelected: !this.state.isSelected})
  }
  render () {
    return (

          <TouchableOpacity
            onPress={() =>
            { this.changeStyle()
              this.props.onPress(this.props.unit)}}>

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
    padding: 15,
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: 'blue',
    backgroundColor: 'lightsteelblue'
  }
})
