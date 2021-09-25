/*Screen de registro*/
import React, {useState} from 'react';
import { Alert, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { InputApp,ButtonApp,ModalApp } from '../componentes';
import useForm from '../hooks/useForm';


export default  ({navigation}) =>{
  const [loading,setLoading]=useState(false)

  // como pass2 no está en los datos para ser gusrdados en la BD se gestiona por aparte
  const [pass2,setPass2]=useState('')
  const datosIniciales ={
    email:'',
    password:'',
    salt:'salt',
    firstname:'',
    lastname:'',
    age:'',
    phone:'',
    grade:'',
    matricula:true,
    desc:''
  }



  const pushRegistrar = valores =>{
    // Se verifica que los datos estan guardados, en este caso ok
    if (valores.password===pass2){
     setLoading(true)
     fetch('https://backend-prueba-maolink.vercel.app/api/auth/register',{
      method:'POST',
      headers:{
        'Content-Type':'Application/json'
      },
      body:JSON.stringify(valores)
    }).then(x=>x.text())
      .then(x=>{
      if (x==='Usuario creado con exito'){
        setLoading(false)
        return Alert.alert('Éxito',x,[{text:'inicio',onPress:()=>navigation.navigate('Login')}])
      }
      setLoading(false)
      Alert.alert('Error',x)
    }
    )
    }
    else{
      Alert.alert("Error", "Las contreaseñas no coinciden")
    }
   }

  const {subscripcion, manejadorPush} = useForm(datosIniciales,pushRegistrar)
   console.log(pass2)
    return (
      <View style={styles.container}>
        <ModalApp modalVisible={loading}><ActivityIndicator size="large" color="#00ff00" /></ModalApp>
        <Text style={styles.title}>Registro</Text>
        <InputApp placeholder ='Correo' onChangeText={subscripcion('email')}/>
        <InputApp placeholder ='Contraseña'onChangeText={subscripcion('password')} secureTextEntry={true}/>
        <InputApp placeholder ='Repita contraseña'  onChangeText={x=>setPass2(x)} secureTextEntry={true}/>
        <InputApp placeholder ='Nombres' onChangeText={subscripcion('firstname')}/>
        <InputApp placeholder ='Apellidos' onChangeText={subscripcion('lastname')}/>
        <InputApp placeholder ='Edad' onChangeText={subscripcion('age')}/>
        <InputApp placeholder ='Telefono' onChangeText={subscripcion('phone')}/>
        <InputApp placeholder ='Grado' onChangeText={subscripcion('grade')}/>
        <InputApp placeholder ='Comentario' onChangeText={subscripcion('desc')}/>
        <ButtonApp text='Registro' onPress={manejadorPush}/>
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