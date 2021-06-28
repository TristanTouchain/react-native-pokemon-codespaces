import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { pokemonAPI } from "./pokemonAPI";

export interface PokemonDetails {
  name: string;
}

interface PokemonListItemProps {
  url: string;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ url }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonDetails | null>();
  const navigation = useNavigation();

  const id = url.split("/")[url.split("/").length - 2];

  if (loadingData) {
    pokemonAPI
      .get(`pokemon/${id}/`)
      .then((response) => {
        setLoadingData(false);
        setPokemon(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PokemonDetails", { id: id })}
    >
      <View style={styles.container}>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          }}
        />
        <Text style={styles.pokemonName}>{pokemon?.name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    width: "100%",
  },
  pokemonImage: {
    width: 50,
    height: 50,
    marginRight: 24,
  },
  pokemonName: {
    fontFamily: "FontPokemon",
  },
});
