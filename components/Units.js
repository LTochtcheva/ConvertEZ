import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SingleUnit from './SingleUnit'


export default class Units extends Component {
  constructor() {
    super()
    this.state = {
      unit: ''
    }
  }
  selectUnit (unit) {
    this.setState({unit})
  }
  render () {
    let unitStyle

    return (

      <View style={styles.row}>
        {this.props.units.map((unit, i) => {
          if (this.state.unit === unit) {
            unitStyle = styles.selectedUnit
          }
          else {
            unitStyle = styles.unit
          }
          return (
          <SingleUnit
            key={i}
            onPress={() => {
              this.selectUnit(unit)
              this.props.onSelect(unit)}}
            unit={unit}
            from={this.props.from}
            style={unitStyle}/>
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
  unit: {
    fontSize: 18,
    color: 'blue',
    margin: 2,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue'
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
