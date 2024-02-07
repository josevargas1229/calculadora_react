import {Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Boton = ({texto,colorT,onPress}) => {
    return (
        <Pressable  style={({ pressed }) => [{
            backgroundColor: pressed ?'#292929':'black',
        }, styles.boton]}
        onPress={onPress}>
            <Text style={[styles.texto,{color:colorT==='operacion'?'#FF7433':'white'}]}>{ texto }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    texto:{
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