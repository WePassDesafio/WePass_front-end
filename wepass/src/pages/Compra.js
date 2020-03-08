import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'WePass',
  };
  render() {
    return (
      <View>
        <Text>Compra wepass</Text>
      </View>
    );
  }
}
