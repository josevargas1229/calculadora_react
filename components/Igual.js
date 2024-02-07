import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Igual = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [ styles.boton,{
                height:pressed?55:60,
                width:pressed?55:60,
                marginLeft:pressed?2.5:0,
                marginRight:pressed?2.5:0
            }]} onPress={onPress}>
                <Text style={styles.texto}>=</Text>
            </Pressable >
        </View>
        
    )
}


const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 30
    },
    boton: {
        backgroundColor: '#FF7433',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        justifyContent:'center',
        alignitems:'center',
    }
})