import React, { Component } from 'react';
import { StyleSheet, ListView, Text } from 'react-native';
import { Container,
         Content,
         Header
        } from 'native-base';
import SingleOption from './SingleOption.js'
import measurements from '../consts/measurements.js'


export default class Options extends Component {
  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      option: measurements[0],
      measurements,
      dataSource: this.ds.cloneWithRows(measurements)
    }
    this.selectOption = this.selectOption.bind(this)
  }

  selectOption(option) {
    this.setState({option})
    console.log('Option selected: ', option.title)
  }
  render() {
    return (
      <Container>
        <Content>
          <ListView style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(option) => (
              <SingleOption option={option}
               onSelect={this.selectOption} />)}
            renderHeader={() => (
              <Text style={styles.header}>Select Option</Text>)}>
          </ListView>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'maroon',
    fontSize: 26,
    paddingTop: 20,
    margin: 10
  },
  list: {
    paddingTop: 20,
    backgroundColor: 'ivory'
  }
})
