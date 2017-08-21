
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Left, Body, Right, Content, Title } from 'native-base';
import Options from './components/Options'

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Convert E-Z</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Options />
        </Content>
      </Container>
    );
  }
}


AppRegistry.registerComponent('ConvertEZ', () => Main);
