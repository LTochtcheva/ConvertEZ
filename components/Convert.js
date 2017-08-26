import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Content } from 'native-base'
import Units from './Units.js'
import measurements from '../consts/measurements.js'

export default class Convert extends Component {
  render () {

   const option = this.props.navigation.state.params ?
    this.props.navigation.state.params.option :
    measurements[0]

    return (
      <Container>
        <Content>
          <Text style={styles.header}>{option.title}</Text>
          <Units/>
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
  }
})
