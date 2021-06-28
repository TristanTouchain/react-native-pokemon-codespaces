import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { PokemonList } from "./PokemonList";
import { PokemonDetails } from "./PokemonDetails";
import { useFonts } from "expo-font";

export const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    FontPokemon: require("./assets/fonts/Pokemon_Solid.ttf"),
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
        <Stack.Screen name="Home" options={{ title: "POKEDEX" }}>
          {() => <PokemonList />}
        </Stack.Screen>
        <Stack.Screen
          name="PokemonDetails"
          options={{ cardStyle: { backgroundColor: "rgba(255,255,255,0.95)" } }}
        >
          {() => <PokemonDetails />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
