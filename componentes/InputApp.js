import React from 'react';
import { StyleSheet, View, TextInput,Dimensions} from 'react-native';

export default  ({placeholder}) =>{
    return(
        <View>
        <TextInput style={styles.input}
        placeholder={placeholder}/>
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



