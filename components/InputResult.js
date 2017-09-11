import React, { Component } from 'react'
import { StyleSheet,
         View,
         TextInput,
         TouchableOpacity,
         Text} from 'react-native'
import { Icon, Button } from 'native-base'
import convert from '../utils/convertMain'

export default class InputResult extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      result: ''
    }
  }

  onConvert(text) {
    const {fromUnit, toUnit, option} = this.props
    let resultNum = convert(text, option, fromUnit, toUnit)
    let result = `${text} ${fromUnit} = ${resultNum} ${toUnit}`
    this.setState({result})
  }

  render () {
    const {fromUnit, toUnit, option} = this.props
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType='numeric'
            placeholder='Input'
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            autoCorrect={false}
            clearButtonMode='always'
            style={styles.input}
            onSubmitEditing={() => this.onConvert(this.state.text)}/>

           <Button rounded success
            style={styles.button}
            onPress={() => this.onConvert(this.state.text)}>
            <Text style={styles.buttonText}>Convert</Text>
            <Icon name='arrow-forward' style={styles.icon} />
          </Button>
        </View>

        <Text style={styles.resultText}>
          {this.state.result}
        </Text>
      </View>
                )


  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
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
    alignSelf: 'center',
    fontFamily: 'Heiti SC'
  },
  resultText: {
    color: 'green',
    margin: 5,
    padding: 5,
    alignSelf: 'center',
    fontSize: 26,
    fontFamily: 'Heiti SC'
  },
  icon: {
    color: 'white'
  },
  button: {
    margin: 15,
    padding: 10,
    backgroundColor: 'darkseagreen',
    borderColor: 'darkgreen',
    borderWidth: 2
  },
  buttonText: {
    fontFamily: 'Heiti SC',
    color: 'white'
  }
})
