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
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 20,
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
    backgroundColor: 'white',
    overflow: 'hidden',
    width: 50,
    textAlign: 'center',
    fontFamily: 'Heiti SC'
  },
  selectedFromUnit: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: 3,
    padding: 5,
    borderWidth: 2,
    backgroundColor: 'lightsteelblue',
    borderRadius: 5,
    borderColor: 'blue',
    width: 60,
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'Heiti SC'
  },
  toUnit: {
    fontSize: 16,
    color: 'darkgreen',
    margin: 3,
    padding: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'darkgreen',
    width: 50,
    textAlign: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    fontFamily: 'Heiti SC'
  },
  selectedToUnit: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: 3,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'darkgreen',
    backgroundColor: 'darkseagreen',
    width: 60,
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'Heiti SC'
  }
})
