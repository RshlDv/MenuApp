import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { globalStyles } from '../estilos/globalStyles';

export default function TraductorScreen() {
  const [numero, setNumero] = useState('');
  const [letras, setLetras] = useState('');

  const numeroALetras = (num) => {
    if (num === 1000) return 'mil';
    if (num === 0) return 'cero';

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecentos'];

    if (num === 100) return 'cien';
    let resultado = '';
    const c = Math.floor(num / 100);
    const restoC = num % 100;
    if (c > 0) resultado += centenas[c] + ' ';

    if (restoC >= 10 && restoC < 20) {
      resultado += especiales[restoC - 10];
    } else if (restoC >= 20 && restoC < 30) {
      const u = restoC % 10;
      resultado += u === 0 ? 'veinte' : 'veinti' + unidades[u];
    } else {
      const d = Math.floor(restoC / 10);
      const u = restoC % 10;
      if (d > 0) {
        resultado += decenas[d];
        if (u > 0) resultado += ' y ' + unidades[u];
      } else if (u > 0) {
        resultado += unidades[u];
      }
    }
    return resultado.trim();
  };

  const traducir = () => {
    Keyboard.dismiss();
    const val = parseInt(numero, 10);
    if (!isNaN(val) && val >= 1 && val <= 1000) {
      setLetras(numeroALetras(val));
    } else {
      setLetras('');
      alert('Ingresa un número entero del 1 al 1000');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Convertidor Números a Letras</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Ingresa un número (1 - 1000)"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />

        <TouchableOpacity style={globalStyles.button} onPress={traducir}>
          <Text style={globalStyles.buttonText}>Convertir</Text>
        </TouchableOpacity>

        {letras !== '' && (
          <View style={globalStyles.resultContainer}>
            <Text style={globalStyles.resultValue}>{letras}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}