import React, { Component } from 'react'
import { StyleSheet,
         View,
         TextInput,
         TouchableOpacity } from 'react-native'
import {  Icon } from 'native-base'
import convert from '../utils/convertMain'

export default class InputResult extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      result: 'Result'
    }
  }

  onConvert(text) {
    const {fromUnit, toUnit, option} = this.props
    let result = convert(text, option, fromUnit, toUnit)
    this.setState({result})
  }

  render () {

    return (

        <View style={styles.container}>
          <TextInput
            keyboardType='numeric'
            placeholder='Input'
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            autoCorrect={false}
            style={styles.input}
            onSubmitEditing={() => this.onConvert(this.state.text)}/>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onConvert(this.state.text)}>
            <Icon name='arrow-forward' style={styles.icon} />
          </TouchableOpacity>

          <TextInput
            value={this.state.result}
            style={styles.result} />
        </View>
                )


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  input: {
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
    margin: 5,
    padding: 5,
    fontSize: 26,
    alignSelf: 'center'
  },
  result: {
    color: 'green',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    flex:1,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
    fontSize: 26
  },
  icon: {
    color: 'blue',
    alignSelf: 'center',
    margin: 10
  },
  button: {
    alignSelf: 'center'
  }
})
