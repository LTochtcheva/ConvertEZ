import React, { Component } from 'react'
import { StyleSheet, ListView, Text } from 'react-native'

import SingleOption from './SingleOption.js'
import measurements from '../consts/measurements.js'

export default class Options extends Component {
  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: this.ds.cloneWithRows(measurements)
    }
    this.selectOption = this.selectOption.bind(this)
  }

  selectOption(option) {
    this.props.navigation.navigate('Convert', {option, fromUnit:''})
  }

  renderOption(option) {
    return (
      <SingleOption option={option}
        onSelect={this.selectOption}/>
    )
  }

  render() {

    return (

          <ListView style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(option) => this.renderOption(option)}
            renderHeader={() => (
              <Text style={styles.header}>Select Option</Text>)}>
          </ListView>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'maroon',
    fontSize: 28,
   // fontWeight: 'bold',
    paddingTop: 20,
    margin: 10,
    alignSelf: 'center',
    fontFamily: 'Heiti SC'
  },
  list: {
    flex: 1,
    backgroundColor: 'ivory'
  }
})
