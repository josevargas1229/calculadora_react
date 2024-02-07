import {Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Punto = ({onPress}) => {
    return (
        <Pressable style={({ pressed }) => [{
            backgroundColor: pressed ?'#292929':'black'
        }, styles.boton]} onPress={onPress}>
            <Text style={styles.texto}>.</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    boton: {
        justifyContent:'center',
        alignContent:'center',
        width:60,
        height:60,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        color:'white',
        fontSize:27
    }
})