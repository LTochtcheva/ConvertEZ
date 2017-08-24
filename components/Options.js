import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,
         Content, Text,
         Header
        } from 'native-base';
import SingleOption from './SingleOption.js'
import measurements from '../consts/measurements.js'


export default class Options extends Component {
  constructor() {
    super()
    this.state = {
      option: measurements[0]
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
        <Header style={styles.contentHeader}>
          <Text style={styles.textHeader}>Select Option</Text>
        </Header>
        <Content>
          { measurements.map((el, i) => {
            return (<SingleOption key={i} option={el}
             onSelect={this.selectOption} />)
          })
          }


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
  }
})
