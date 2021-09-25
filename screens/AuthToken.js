/* Screen invisible (en realidad nunca se ve), que permite la verificacion de la existencia o no 
de un token para dirigirse a la pantalla de info o de login

Esto permite que la app siempre esté logueada a no ser que se cierre sesión*/

import React,{useEffect} from 'react';
import {View, AsyncStorage, ActivityIndicator} from 'react-native';


export default ({navigation})=>{
useEffect(()=>{
    AsyncStorage.getItem('token').then(x=>{navigation.navigate(x ? 'NavLoginOk':'NavPantallas')})
},[])
return (
    <View>
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
    )
}

