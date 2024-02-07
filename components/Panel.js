import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Boton } from './Boton'
import { Punto } from './Punto'
import { Igual } from './Igual'
import { useEffect } from 'react';
export const Panel = ({
    actualizarValor,
    num1,
    setNum1,
    num2,
    setNum2,
    operacion,
    setOperacion
}) => {
    useEffect(() => {
        const operacionSimbolo = {
            suma: '+',
            resta: '-',
            mult: '×',
            div: '÷',
        };
        let valorActualizado = '';
        if (num2 !== null && operacion === null) {
            valorActualizado = num2 || '0';
        } else if (num2 === null) {
            valorActualizado = num1 || '0';
        } else if (num2 !== null && num1 !== null) {
            valorActualizado = num2 + operacionSimbolo[operacion] + num1;
        } else if (operacion && num2 !== null) {
            valorActualizado = num2 + operacionSimbolo[operacion];
        }
        actualizarValor(valorActualizado);
    }, [num1, num2, operacion, actualizarValor]);

    const pressNum = (numero) => {
        let ingresar = '';
        if (num1 === null) {
            if (numero !== '0')
                ingresar = numero;
        } else {
            ingresar = num1 + numero;
        }
        setNum1(ingresar);
    }
    const pressOp = (op, ope) => {
        let opText = '';
        if (num1 !== null && num2 === null) {
            opText = ope;
            setNum2(num1);
            setNum1(null);
        } else if (operacion !== null) {
            opText = ope;
        }
        setOperacion(opText);
    }
    const pressPunto = () => {
        if (num1 !== null && !num1.includes('.')) {
            setNum1(num1 + '.');
        }else{
            setNum1('0.')
        }
    }
    const pressIgual = () => {
        if (num1 !== null && num2 !== null) {
            const result = realizarOperacion(parseFloat(num2), parseFloat(num1));
            setNum1(result.toString());
            setNum2(null);
            setOperacion(null);
        }
    }
    const realizarOperacion = (num1, num2) => {
        switch (operacion) {
            case 'suma':
                return num1 + num2;
            case 'resta':
                return num1 - num2;
            case 'mult':
                return num1 * num2;
            case 'div':
                return (num2 !== 0) ? num1 / num2 : 'Error';
        }
    }
    const borrarTodo = () => {
        setNum1(null);
        setNum2(null);
        setOperacion(null);
    }
    const porcentaje = () => {
        if (num1 !== null) {
            setNum1((parseFloat(num1) / 100).toString());
        }
    }
    const invertir = () => {
        if (num1 !== null) {
            setNum1((-parseFloat(num1)).toString());
        }
    }
    const retroceder = () => {
        if (num1 !== null) {
            if (num1.length > 0) {
                setNum1(num1.slice(0, -1));
            } else{
                setOperacion(null);
                setNum1(num2);
                setNum2(null);
            }
        }else if(operacion!==null){
            setOperacion(null);
            setNum1(num2);
            setNum2(null);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Boton texto="AC" colorT='operacion' onPress={borrarTodo} />
                <Boton texto="&#9003;" colorT='operacion' onPress={() => { retroceder() }} />
                <Boton texto="%" colorT='operacion' onPress={() => porcentaje()} />
                <Boton texto="÷" colorT='operacion' onPress={() => { pressOp("÷", 'div') }} />
            </View>
            <View style={styles.row}>
                <Boton texto="7" onPress={() => { pressNum('7') }} />
                <Boton texto="8" onPress={() => { pressNum('8') }} />
                <Boton texto="9" onPress={() => { pressNum('9') }} />
                <Boton texto="×" colorT='operacion' onPress={() => { pressOp("×", 'mult') }} />
            </View>
            <View style={styles.row}>
                <Boton texto="4" onPress={() => { pressNum('4') }} />
                <Boton texto="5" onPress={() => { pressNum('5') }} />
                <Boton texto="6" onPress={() => { pressNum('6') }} />
                <Boton texto="-" colorT='operacion' onPress={() => { pressOp("-", 'resta') }} />
            </View>
            <View style={styles.row}>
                <Boton texto="1" onPress={() => { pressNum('1') }} />
                <Boton texto="2" onPress={() => { pressNum('2') }} />
                <Boton texto="3" onPress={() => { pressNum('3') }} />
                <Boton texto="+" colorT='operacion' onPress={() => { pressOp("+", 'suma') }} />
            </View>
            <View style={styles.row}>
                <Boton texto="±" colorT='operacion' onPress={() => invertir()} />
                <Boton texto="0" onPress={() => { pressNum('0') }} />
                <Punto onPress={pressPunto} />
                <Igual onPress={pressIgual} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    }
})