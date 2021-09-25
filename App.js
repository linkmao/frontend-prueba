// Inicio de la ejecucion con el montaje de las screen con el createAppContainer y similares para la navegacion

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import InfoScreen from './screens/Info';
import AuthTokenScreen from './screens/AuthToken'

const pantallas = createStackNavigator ({
  Login:LoginScreen,
  Register: RegisterScreen,
  
},{
  initialRouteName: 'Login'
})

const loginOk = createStackNavigator({
  Info:InfoScreen,
},{
  initialRouteName:'Info'
})

const baseNavigation = createSwitchNavigator({
  NavPantallas:pantallas,
  NavToken:AuthTokenScreen,
  NavLoginOk:loginOk
},{initialRouteName:'NavToken'})

export default createAppContainer(baseNavigation)
