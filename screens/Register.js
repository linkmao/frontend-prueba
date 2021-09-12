import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InputApp,ButtonApp } from '../componentes';


export default  () =>{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <InputApp placeholder ='Correp'/>
        <InputApp placeholder ='Contraseña'/>
        <InputApp placeholder ='Repita contraseña'/>
        <InputApp placeholder ='Nombres'/>
        <InputApp placeholder ='Apellidos'/>
        <InputApp placeholder ='Edad'/>
        <InputApp placeholder ='Telefono'/>
        <InputApp placeholder ='Grado'/>
        <InputApp placeholder ='Anotación'/>
        <ButtonApp text='Registro'/>
        
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