/*Screen de logueo*/ 
import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert,ActivityIndicator} from 'react-native';
import {InputApp, ButtonApp, ModalApp} from '../componentes'
import useForm from '../hooks/useForm';

export default  ({navigation}) =>{

  const [loading, setLoading]=useState(false);

  const datosIniciales={
    email:'',
    password:''
  }

  const pushRegistrar = valores=>{
      setLoading(true)
      fetch('https://backend-prueba-maolink.vercel.app/api/auth/login',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify(valores)
    }).then(x=>x.text()).then(x=>{
       try{
        return JSON.parse(x)
      }
      catch{
        throw x
      }
    }).then(x=>{
      AsyncStorage.setItem('token',x.token)
       navigation.navigate('Info')
    }).catch(e=>{setLoading(false); Alert.alert('Error',e)})
  }

  const {subscripcion,manejadorPush,inputs} = useForm(datosIniciales, pushRegistrar)
  
  return (
      <View style={styles.container}>
        <ModalApp modalVisible={loading}><ActivityIndicator size="large" color="#00ff00" /></ModalApp>
        <Text style={styles.title}>Maolink Software</Text>
        <InputApp placeholder ='usuario'
        onChangeText={subscripcion('email')}
        autoCapitalize='none'
        value={inputs.email}
        />
        <InputApp placeholder ='contraseña'
        onChangeText={subscripcion('password')}
        autoCapitalize='none'
        secureTextEntry={true}
        value={inputs.password}
        />
        <ButtonApp text='Login' onPress={manejadorPush}/>
        <ButtonApp text='Register' onPress={()=>navigation.navigate('Register')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color: '#005586'
  }
});

