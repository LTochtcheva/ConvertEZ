import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class SingleUnit extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render () {


    return (
          <TouchableOpacity
            onPress={() =>
            {
              this.props.onPress(this.props.unit)}}>

            <Text style={this.props.style} >{this.props.unit}</Text>
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
  selectedFromUnit: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 2,
    padding: 10,
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: 'blue',
    backgroundColor: 'lightsteelblue'
  },
  selectedToUnit: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 2,
    padding: 10,
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: 'green',
    backgroundColor: 'lightsteelblue'
  }
})
