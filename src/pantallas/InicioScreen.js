import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../estilos/globalStyles';

export default function InicioScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <Image
          source={require('../../assets/foto.png')}
          style={globalStyles.profileImage}
        />
        <Text style={globalStyles.title}>Datos personales</Text>

        <View style={globalStyles.infoGroup}>
          <Text style={globalStyles.label}>Alumna:</Text>
          <Text style={globalStyles.value}>Rashel Roa Diaz</Text>
        </View>

        <View style={globalStyles.infoGroup}>
          <Text style={globalStyles.label}>Correo:</Text>
          <Text style={globalStyles.value}>rashelroadiaz@gmail.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}