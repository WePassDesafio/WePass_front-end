import React, {Component} from 'react';
import api from '../services/api';
import axios from 'axios';

import Card from '../components/card';
import {View, Text} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'WePass',
  };

  async getEventos() {
    try {
      const response = await axios.get(
        'https://localhost:5001/api/Evento/BuscarTodosEventos',
      );
      console.warn(response);
    } catch (error) {
      console.error('err', error);
    }
  }

  async componentDidMount() {
    await this.getEventos();
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderBottomWidth: 2,
            paddingVertical: 16,
            marginBotton: 16,
            borderBottomColor: '#000',
            width: '90%',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#6967da',
              margintop: 10,
            }}>
            Eventos
          </Text>
        </View>

        <View style={{flex: 1, width: '90%', marginTop: 12}}>
          <Card
            title={'Mulan'}
            data={'19/02/2020'}
            valor={'25,00'}
            ingressos={'50'}
          />
        </View>
      </View>
    );
  }
}
