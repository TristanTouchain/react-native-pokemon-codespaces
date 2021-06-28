import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { pokemonAPI } from "./pokemonAPI";
import { PokemonListItem } from "./PokemonListItem";

export interface Pokemon {
  name: string;
  url: string;
}

export const PokemonList: React.FC = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  if (loadingData) {
    pokemonAPI
      .get(`pokemon?limit=20&offset=${page * 20 - 20}`)
      .then((response) => {
        setLoadingData(false);
        setPokemons([...pokemons, ...response.data.results]);
      })
      .catch();
  }
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <FlatList
        style={{ width: "100%" }}
        refreshing
        data={pokemons}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={(pokemon) => (
          <PokemonListItem key={pokemon.item.name} url={pokemon.item.url} />
        )}
        onEndReached={() => {
          setPage(page + 1);
          setLoadingData(true);
        }}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};
