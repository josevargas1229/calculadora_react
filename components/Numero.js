import {Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Numero = ({texto}) => {
    return (
        <Pressable  style={({ pressed }) => [{
            backgroundColor: pressed ?'#292929':'black'
        }, styles.boton]}>
            <Text style={styles.texto}>{ texto }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    texto:{
        color:'white',
        fontSize:27
    },
    boton:{
        width:60,
        height:60,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    }
})