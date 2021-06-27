
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PokemonList } from './PokemonList';
import { PokemonDetails } from './PokemonDetails';


export const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={() => <PokemonList />}/>
        <Stack.Screen name="PokemonDetails" component={() => <PokemonDetails />} getId={({ params }) => params?.id} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
