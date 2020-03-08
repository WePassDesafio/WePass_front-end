import {
  createStackNavigator,
  createSwitchNavigator,
  cr,
} from 'react-navigation';

import Inicial from './pages/Inicial';
import Login from './pages/Login';
import Compra from './pages/Compra';

const AppStack = createStackNavigator(
  {
    Inicial,
    Compra,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6967da',
      },
      headerTintColor: '#fff',
    },
  },
);

export default createSwitchNavigator(
  {Login, AppStack},
  {initialRouteName: 'Login'},
);
