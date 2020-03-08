import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default class Main extends Component {
  render() {
    return (
      <View
        style={{
          padding: 16,
          borderRadius: 8,
          backgroundColor: '#6967da',
          height: 200,
          width: '100%',
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>
          Evento: {this.props.title}
        </Text>

        <Text style={{color: '#fff', fontSize: 20}}>
          Data: {this.props.data}
        </Text>

        <Text style={{color: '#fff', fontSize: 20}}>
          Valor: {this.props.valor}
        </Text>

        <Text style={{color: '#fff', fontSize: 20}}>
          Ingressos: {this.props.ingressos}
        </Text>

        <Button
          style={{marginTop: 24, backgroundColor: '#fff'}}
          mode="Text"
          onPress={() => {}}>
          Ver Evento
        </Button>
      </View>
    );
  }
}
