import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Content } from 'native-base'
import Units from './Units.js'
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
          <View>
            <Text style={styles.fromHeader}>From</Text>
            <Units units={option.unitsMetric}/>
            <Units units={option.unitsImperial}/>
          </View>
          <View>
            <Text style={styles.toHeader}>To</Text>
            <Units units={option.unitsMetric}/>
            <Units units={option.unitsImperial}/>
          </View>
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
  },
  fromHeader: {
    color: 'blue',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10
  },
  toHeader: {
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10
  }
})
