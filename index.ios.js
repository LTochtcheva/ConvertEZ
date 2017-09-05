
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import Options from './components/Options'
import Convert from './components/Convert'

console.ignoredYellowBox = ['Remote debugger']

const stackNav = StackNavigator({
  Select: { screen: Options },
  Convert: { screen: Convert },
},
{headerMode: 'none'})

export default class Main extends Component {
  render() {
    return (
       React.createElement(stackNav)

    );
  }
}


AppRegistry.registerComponent('ConvertEZ', () => Main)
