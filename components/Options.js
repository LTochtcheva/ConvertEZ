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
      // option: measurements[0],
      // measurements,
      dataSource: this.ds.cloneWithRows(measurements)
    }
    this.selectOption = this.selectOption.bind(this)
  }

  selectOption(option) {
    //this.setState({option})
    this.props.navigation.navigate('Convert', {option})
  }
  render() {

    return (

          <ListView style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(option) => (
              <SingleOption option={option}
               onSelect={this.selectOption}
              />)}
            renderHeader={() => (
              <Text style={styles.header}>Select Option</Text>)}>
          </ListView>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'maroon',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 20,
    margin: 10,
    alignSelf: 'center'
  },
  list: {
    flex: 1,
    backgroundColor: 'ivory'
  }
})
