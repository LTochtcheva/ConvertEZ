import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
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
    let unitStyle = this.state.unit === unit ? unitStyle = styles.selectedFromUnit : styles.fromUnit
    return unitStyle
  }
  getToStyle(unit) {
    let unitStyle = this.state.unit === unit ? unitStyle = styles.selectedToUnit : styles.toUnit
    return unitStyle
  }
  render () {
    let unitStyle

    return (

      <View  horizontal={true} >
        <View style={styles.row} flexWrap={'wrap'}>
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
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    margin: 5,
    flex:1
  },
  fromUnit: {
    fontSize: 16,
    color: 'blue',
    margin: 3,
    padding: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    width: 50,
    textAlign: 'center'
  },
  selectedFromUnit: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    margin: 3,
    padding: 5,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue',
    borderRadius: 5,
    borderColor: 'blue',
    width: 55,
    textAlign: 'center',
    overflow: 'hidden'
  },
  toUnit: {
    fontSize: 16,
    color: 'green',
    margin: 3,
    padding: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'green',
    width: 50,
    textAlign: 'center'
  },
  selectedToUnit: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    margin: 3,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'green',
    width: 55,
    textAlign: 'center',
    overflow: 'hidden'
  }
})
