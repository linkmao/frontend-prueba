import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const t =  ({children}) =>{
    return(
        <View>
        <Text style={styles.textorojo}>{children}</Text>
        </View>
        )
}

const styles = StyleSheet.create({

  textorojo:{
    color:'#E00'
  }
});

export default t;

