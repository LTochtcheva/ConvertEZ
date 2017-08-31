import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SingleUnit from './SingleUnit'


export default class Units extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return (

      <View style={styles.row}>
        {this.props.units.map((unit, i) => { return (
          <SingleUnit
            key={i}
            onPress={() => {
              this.props.onSelect(unit)}}
            unit={unit}
            from={this.props.from}
            style={this.props.style}/>
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
  }
})
