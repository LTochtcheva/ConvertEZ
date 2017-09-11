import React, { Component } from 'react'
import { StyleSheet,
         Text,
         TouchableOpacity,
       } from 'react-native'
import { Container, Content, Icon } from 'native-base'

import InputResult from './InputResult.js'
import From from './From.js'
import To from './To.js'

export default class Convert extends Component {
  constructor() {
    super()
    this.state = {
      fromUnit: '',
      toUnit: ''
    }
    this.selectFromUnit = this.selectFromUnit.bind(this)
    this.selectToUnit = this.selectToUnit.bind(this)
  }

  selectFromUnit(unit) {
    this.setState({fromUnit: unit})

  }

  selectToUnit(unit) {
    this.setState({toUnit: unit})
  }
   goBack() {
     this.setState({fromUnit: '', toUnit: ''})
     this.props.navigation.navigate('Select')
   }

  render () {

   const option = this.props.navigation.state.params.option
    return (
      <Container style={styles.container}>
        <Content >
          <TouchableOpacity
            style={styles.backRow}
            onPress={() => {this.goBack()}}>
            <Icon  style={styles.icon} name='arrow-back'/>
            <Text style ={styles.backText}>Back</Text>
          </TouchableOpacity >

          <Text style={styles.header}>{`Convert ${option.title}`}</Text>

          <From
            option={option}
            selectUnit={this.selectFromUnit}/>
          <To
            option={option}
            selectUnit={this.selectToUnit}/>
          <InputResult
            fromUnit={this.state.fromUnit}
            toUnit={this.state.toUnit}
            option={option.title}/>

        </Content>
      </Container>      )
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'maroon',
    fontSize: 28,
    margin: 5,
    alignSelf: 'center',
    fontFamily: 'Heiti SC'
  },
  container: {
    backgroundColor: 'ivory'
  },
  backText: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'blue',
    padding: 4,
    fontFamily: 'Heiti SC'
  },
  backRow: {
    flexDirection: 'row',
    marginTop: 30
  },
  icon: {
    color: 'blue',
    alignSelf: 'center',
    margin: 5
  },
  units: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
