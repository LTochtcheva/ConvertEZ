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
    //добавить сюда проверку на this.props.selectedAnother
    const unitStyle = !this.state.isSelected ? this.props.style :
      this.props.from ? styles.selectedFromUnit :
      styles.selectedToUnit
    return (
          <TouchableOpacity
            onPress={() =>
            { this.changeStyle()
              this.props.onPress(this.props.unit)}}>

            <Text style={unitStyle} >{this.props.unit}</Text>
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
