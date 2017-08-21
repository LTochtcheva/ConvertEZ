import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,
         Content, Text,
         List, ListItem,
         Header
        } from 'native-base';

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
          <List style={styles.list}>
            {measurements.map((option) => {
              return (
              <ListItem style={styles.item}>
                <Text style={styles.itemText}>{option.title}</Text>
              </ListItem>)
            })}
          </List>
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
