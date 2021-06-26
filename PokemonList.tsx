import React, { useState } from "react"
import { FlatList, Text } from "react-native"
import { pokemonAPI } from "./pokemonAPI"

export interface Pokemon {
    name: string
    url: string
}

export const PokemonList = () => {
    const [loadingData, setLoadingData] = useState(true)
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    if (loadingData) {
        pokemonAPI.get('pokemon').then((response) => {
            console.log("response", response)

            setLoadingData(false)
            setPokemons(response.data.results)

        })
    }
    return (
        <FlatList data={pokemons} renderItem={(pokemon) => <Text>{pokemon.item.name}</Text>} />

    )
}