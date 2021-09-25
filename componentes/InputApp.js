// Componente tipo TextInput

import React from 'react';
import { StyleSheet, View, TextInput,Dimensions} from 'react-native';

export default  ({placeholder, onChangeText, autoCapitalize, secureTextEntry,value}) =>{
    return(
        <View>
          <TextInput style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          value={value}
          />
        </View>
        )
}

const styles = StyleSheet.create({
  input:{
    width:Dimensions.get('window').width-100,
    height:40,
    borderWidth:2,
    borderColor:'#009',
    margin:3,
    padding:5
  }
});



