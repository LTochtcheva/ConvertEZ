
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

// const tabNav = TabNavigator({
//           Select: {
//               screen: Options,
//               navigationOptions:{

//                   tabBarLabel: 'Select',
//                   tabBarIcon: <Icon name='menu'/>

//               }
//           },
//           Convert: {
//               screen: Convert,
//               navigationOptions: {
//                 tabBarLabel: 'Convert',
//                 tabBarIcon: <Icon name='swap' />,
//                 style: {
//                   flexDirection: 'row'
//                 }
//               }
//           }
//       },
//           {
//           tabBarOptions: {
//             activeTintColor: 'maroon',
//             activeBackgroundColor: 'lightgrey',
//             labelStyle: {
//               fontSize: 13,
//             }
//           },
// })
// const tabNav = TabNavigator({
//   Select: {
//     screen: Options
//   },
//   Convert: {
//     screen: Convert
//   }
// })

export default class Main extends Component {
  render() {
    return (
       React.createElement(stackNav)

    );
  }
}


AppRegistry.registerComponent('ConvertEZ', () => Main)
