import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { globalStyles } from '../estilos/globalStyles';

export default function SumadoraScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularSuma = () => {
    Keyboard.dismiss();
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      setResultado(n1 + n2);
    } else {
      setResultado(null);
      alert('Ingresa numeros validos');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Suma de Números</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Número 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Número 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />

        <TouchableOpacity style={globalStyles.button} onPress={calcularSuma}>
          <Text style={globalStyles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {resultado !== null && (
          <View style={globalStyles.resultContainer}>
            <Text style={globalStyles.resultValue}>{resultado}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}