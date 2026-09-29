import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import { globalStyles } from '../estilos/globalStyles';

export default function TablaScreen() {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const manejarCambioTexto = (texto) => {
    const textoLimpio = texto.replace(/[^0-9]/g, '');
    setNumero(textoLimpio);
  };

  const generarTabla = () => {
    Keyboard.dismiss();
    const val = parseInt(numero, 10);

    if (!isNaN(val) && val >= 0 && val <= 13) {
      const items = Array.from({ length: 13 }, (_, i) => i + 1);
      setTabla(items);
    } else {
      setTabla([]);
      alert('Ingresa un número del 0 al 13');
    }
  };

  const numVal = parseInt(numero, 10);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Tabla de Multiplicar (0 a 13)</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Ingresa un número"
          keyboardType="numeric"
          maxLength={2}
          value={numero}
          onChangeText={manejarCambioTexto}
        />

        <TouchableOpacity style={globalStyles.button} onPress={generarTabla}>
          <Text style={globalStyles.buttonText}>Generar tabla</Text>
        </TouchableOpacity>

        {tabla.length > 0 && (
          <ScrollView style={globalStyles.tableScroll}>
            {tabla.map((i) => (
              <View key={i} style={globalStyles.row}>
                <Text style={globalStyles.rowText}>{numVal} x {i} =</Text>
                <Text style={globalStyles.rowResult}>{numVal * i}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}