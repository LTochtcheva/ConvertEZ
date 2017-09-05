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
  getStyle(unit) {
    if (this.props.from) return this.getFromStyle(unit)
    else return this.getToStyle(unit)
  }
  getFromStyle(unit) {
    let unitStyle
    if (this.state.unit === unit) {
            unitStyle = styles.selectedFromUnit
          }
          else {
            unitStyle = styles.fromUnit
          }
    return unitStyle
  }
  getToStyle(unit) {
    let unitStyle
    if (this.state.unit === unit) {
            unitStyle = styles.selectedToUnit
          }
          else {
            unitStyle = styles.toUnit
          }
    return unitStyle
  }
  render () {
    let unitStyle

    return (

      <View style={styles.row}>
        {this.props.units.map((unit, i) => {
          unitStyle = this.getStyle(unit)
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
    margin: 5,
    alignItems: 'center'
  },
  fromUnit: {
    fontSize: 16,
    color: 'blue',
    margin: 0,
    padding: 5,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue'
  },
  selectedFromUnit: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    margin: 3,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'blue'
  },
  toUnit: {
    fontSize: 16,
    color: 'green',
    margin: 0,
    padding: 5,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue'
  },
  selectedToUnit: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    margin: 3,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'green'
  }
})
