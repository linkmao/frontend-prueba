// Componente tipo TouchableOpacity 

import React from 'react';
import { StyleSheet, View, TouchableOpacity,Dimensions, Text} from 'react-native';

export default  ({text, onPress}) =>{
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create({
  button:{
    width:Dimensions.get('window').width-250,
    height:40,    
    margin:5,
    padding:5,
    backgroundColor:'#50BEFF',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'
  }
});



