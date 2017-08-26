import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Content } from 'native-base'

import InputResult from './InputResult.js'
import From from './From.js'
import To from './To.js'
import measurements from '../consts/measurements.js'

export default class Convert extends Component {
  render () {

   const option = this.props.navigation.state.params ?
    this.props.navigation.state.params.option :
    measurements[0]

    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.header}>{`Convert ${option.title}`}</Text>
          <From option={option}/>
          <To option={option}/>
          <InputResult />
        </Content>
      </Container>      )
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
  container: {
    backgroundColor: 'ivory'
  }
})
