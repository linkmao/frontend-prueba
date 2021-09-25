/* Screen que solo se ingresa si se tiene un token, por lo tanto se llega acá luego de un logueo
Esta screen tambien permite mostrar los datos de usuario y cerrar sesion, por lo tanto en terminos
practicos esta seria el screen principal de la app luego del logueo 

Para futuras versiones, incorporar codigo para que la muestra de los datos se haga sin la necesidad del 
boton si no que lo haga con el cargue del screen, el uso de useEfect no me sirvió para ello, al parecer
estoy haciendo una mala implementacion de ello. Esto se debe corregir a futuro
*/


import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Alert, AsyncStorage} from 'react-native';
import {ButtonApp} from '../componentes'

export default  ({navigation}) =>{
  const [token,setToken]=useState('')
  const [data, setData]=useState({})

  useEffect(()=>{getToken()},[])

  const getToken=()=>{
  AsyncStorage.getItem('token').then(x=>setToken(x))
  }

  const manejador =()=>{
    getData(token)
  }

  const getData =(tk)=>{
    fetch('https://backend-prueba-maolink.vercel.app/api/usuarios/me',{
    method:'GET',
    headers:{
      'Content-Type':'Application/json',
      'Authorization':tk
    },
  }).then(x=>x.text())
    .then(x=>{
    setData(JSON.parse(x))
  })
  }

  const cerrarSesion = ()=>{
    AsyncStorage.clear()
    navigation.navigate('Login')
  }

//console.log(data)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuario registrado</Text>
      <Text style={styles.texto}>Usuario: {data.email}  </Text>
      <Text style={styles.texto}>Nombres: {data.firstname} </Text>
      <Text style={styles.texto}>Apellidos: {data.lastname} </Text>
      <Text style={styles.texto}>Edad: {data.age} </Text>
      <Text style={styles.texto}>Telefono: {data.phone} </Text>
      <Text style={styles.texto}>Grado: {data.grade} </Text>
      <Text style={styles.texto}>Descripción {data.desc} </Text>
      <ButtonApp text='Datos' onPress={()=>manejador()}/>
      <ButtonApp text='Cerrar sesion' onPress={()=>cerrarSesion()}/> 
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
  },
  texto:{
      fontSize:16,
      alignSelf:'flex-start',
      marginLeft:60
  }
});