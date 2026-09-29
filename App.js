import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Pantallas
import InicioScreen from './src/pantallas/InicioScreen';
import SumadoraScreen from './src/pantallas/SumadoraScreen';
import TraductorScreen from './src/pantallas/TraductorScreen';
import TablaScreen from './src/pantallas/TablaScreen';
import ExperienciaScreen from './src/pantallas/ExperienciaScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerActiveTintColor: '#007AFF',
          drawerInactiveTintColor: '#333333',
        }}
      >
        <Drawer.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: 'Página Principal' }}
        />
        <Drawer.Screen
          name="Sumadora"
          component={SumadoraScreen}
          options={{ title: 'Sumadora' }}
        />
        <Drawer.Screen
          name="Traductor"
          component={TraductorScreen}
          options={{ title: 'Traductor a Letras' }}
        />
        <Drawer.Screen
          name="Tabla"
          component={TablaScreen}
          options={{ title: 'Tabla de Multiplicar' }}
        />
        <Drawer.Screen
          name="Experiencia"
          component={ExperienciaScreen}
          options={{ title: 'Experiencia Personal' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}