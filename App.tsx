import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { pokemonAPI } from './pokemonAPI';
import { PokemonList } from './PokemonList';



export default function App() {


  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <PokemonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
