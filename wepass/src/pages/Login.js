import React, {Component} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Logo from '../assets/logoWePass.png';

export default class Main extends Component {
  state = {
    text: '',
    password: '',
  };

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 200, height: 200, marginTop: 32}}
            source={Logo}
            resizeMode="contain"
          />
          <View style={{width: '80%'}}>
            <TextInput
              label="Login"
              value={this.state.text}
              onChangeText={text => this.setState({text})}
            />

            <TextInput
              label="Senha"
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              style={{marginTop: 32}}
            />
            <Button
              style={{marginTop: 32}}
              mode="contained"
              onPress={() => this.props.navigation.navigate('AppStack')}>
              Logar
            </Button>
          </View>

          <Button style={{marginTop: 40}} mode="Text" onPress={() => {}}>
            Cadastre-se
          </Button>
        </View>
      </ScrollView>
    );
  }
}
