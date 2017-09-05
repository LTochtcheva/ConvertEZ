import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class SingleUnit extends Component {

  render () {

    return (
          <TouchableOpacity
            onPress={() =>
            {this.props.onPress(this.props.unit)}}>
            <Text style={this.props.style} >
              {this.props.unit}
            </Text>
          </TouchableOpacity>
    )
  }
}
