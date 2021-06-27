import React, { Suspense, useState } from "react"
import { FlatList, SafeAreaView, Text } from "react-native"
import { pokemonAPI } from "./pokemonAPI"
import { PokemonListItem } from "./PokemonListItem"

export interface Pokemon {
    name: string
    url: string
}

export const PokemonList: React.FC = () => {
    const [loadingData, setLoadingData] = useState(true)
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    if (loadingData) {
        pokemonAPI.get('pokemon').then((response) => {
            setLoadingData(false)
            setPokemons(response.data.results)

        })
    }
    return (
        <SafeAreaView style={{ width: '100%'  }}>
            <FlatList style={{ width: '100%'}} refreshing data={pokemons} renderItem={(pokemon) =>
                    <PokemonListItem key={pokemon.index} url={pokemon.item.url} />
            } />
        </SafeAreaView>

    )
}