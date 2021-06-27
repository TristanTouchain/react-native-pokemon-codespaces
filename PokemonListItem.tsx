import React, { useState } from "react"
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native"
import { pokemonAPI } from "./pokemonAPI"



export interface PokemonDetails {
    name: string
}

interface PokemonListItemProps {
    url: string
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ url }) => {

    const [loadingData, setLoadingData] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonDetails | null>()

    const id = url.split('/')[url.split('/').length - 2]

    if (loadingData) {
        console.log(`pokemon/${id}/`)
        pokemonAPI.get(`pokemon/${id}/`).then((response) => {
            setLoadingData(false)
            setPokemon(response.data)

        }).catch(error => console.log(error))
    }
    return (
        <View style={styles.container}>
            <Image style={styles.pokemonImage} source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png` }} />
            <Text style={styles.pokemonName}>{pokemon?.name.toUpperCase()}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems:'center',
        width: '100%',
    },
    pokemonImage: {
        width: 50,
        height: 50,
        marginRight: 24,
    },
    pokemonName: {
        fontFamily: 'FontPokemon',
        fontWeight: '200',
        
    }

});