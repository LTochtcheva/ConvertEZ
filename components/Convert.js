import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Icon } from 'native-base'

import InputResult from './InputResult.js'
import From from './From.js'
import To from './To.js'
//import select from './'
import measurements from '../consts/measurements.js'

export default class Convert extends Component {
  constructor() {
    super()
    //this.goBack = this.goBack.bind(this)
  }

  // goBack() {
  //   console.log('want to go back')
  //   this.props.navigation.navigate('Options')
  // }
  render () {

   const option = this.props.navigation.state.params ?
    this.props.navigation.state.params.option :
    measurements[0]

    return (
      <Container style={styles.container}>
        <Content >
          <TouchableOpacity
            style={styles.backRow}
            onPress={() => {
              console.log('Navigation: ', this.props.navigation)
              this.props.navigation.navigate('Select') }}>
            <Icon  style={styles.icon} name='arrow-back'/>
            <Text style ={styles.backText}>Back</Text>
          </TouchableOpacity >
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
  },
  backText: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'blue',
    padding: 4
  },
  backRow: {
    flexDirection: 'row',
    marginTop: 30
  },
  icon: {
    color: 'blue',
    alignSelf: 'center',
    margin: 5
  }
})
