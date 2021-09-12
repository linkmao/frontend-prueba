import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';

const pantallas = createStackNavigator ({
  Login:LoginScreen,
  Register: RegisterScreen
},{
  initialRouteName: 'Login'
})


export default createAppContainer(pantallas)