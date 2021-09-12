import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {InputApp, ButtonApp} from '../componentes'

export default  ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maolink Software</Text>
      <InputApp placeholder ='usuario'/>
      <InputApp placeholder ='contraseña'/>
      <ButtonApp text='Login' />
      <ButtonApp text='Register' onPress={()=>navigation.push('Register')}/>
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

