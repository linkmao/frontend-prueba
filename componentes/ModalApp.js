// Componente Tipo Modal para la pantalla del indicador de esperando...

import React from 'react';
import {StyleSheet, Dimensions, Modal, View, Text} from 'react-native';

export default ({children, modalVisible}) =>{
    return(
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.modalCenter}>
                <View style={styles.modalView}>
                    <Text>{children}</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles =StyleSheet.create({
    modalCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    modalView:{
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0)',
        borderRadius:4,
        padding:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:4},
        minWidth:Dimensions.get('window').width-100
    }
})