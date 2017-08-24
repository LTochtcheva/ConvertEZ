import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,
         Content, Text,
         Header
        } from 'native-base';
import SingleOption from './SingleOption.js'

const measurements = [
  {title: 'Temperature'},
  {title: 'Length'},
  {title: 'Weight'},
  {title: 'Area'},
  {title: 'Speed'}
]

export default class Options extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.contentHeader}>
          <Text style={styles.textHeader}>Select Option</Text>
        </Header>
        <Content>
          <SingleOption />
        </Content>
      </Container>
            )
  }
}

const styles = StyleSheet.create({
  textHeader: {
    color: 'blue',
    fontSize: 26
  },
  contentHeader: {
    backgroundColor: '#DDD',
    justifyContent: 'flex-start'
  },
  list: {

  },
  item: {
    borderColor: 'blue',
    margin: 15
  },
  itemText: {
    color: 'blue',
    fontSize: 22
  }
})
