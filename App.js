import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Calculadora } from './components/Calculadora';
import { useState } from "react"
export default function App() {
  const [valor, setValor] = useState('0');
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operacion,setOperacion]=useState(null);

  const actualizarValor = (nuevoValor) => {
    
    setValor(nuevoValor);
  };
  return (
    <View style={styles.container}>
      <Calculadora
        valor={valor}
        actualizarValor={actualizarValor}
        num1={num1}
        num2={num2}
        setNum1={setNum1}
        setNum2={setNum2} 
        operacion={operacion}
        setOperacion={setOperacion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
