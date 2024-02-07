import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Resultados } from './Resultados'
import { Panel } from './Panel'

export const Calculadora = ({ valor, actualizarValor, num1, setNum1, num2, setNum2, operacion, setOperacion }) => {
    return (
        <View style={styles.container}>
            <Resultados style={styles.vista} valor={valor}/>
            <Panel 
                style={styles.vista} 
                actualizarValor={actualizarValor}
                num1={num1}
                num2={num2}
                setNum1={setNum1}
                setNum2={setNum2}
                operacion={operacion}
                setOperacion={setOperacion}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    vista: {
        flex: 1
    }
})