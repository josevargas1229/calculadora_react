import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export const Resultados = ({valor}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} editable={false} placeholder='prueba de color' />
            <TextInput style={styles.input} editable={false} value={valor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    input: {
        color: 'white',
        flex: 1,
        fontSize: 55,
    }
})