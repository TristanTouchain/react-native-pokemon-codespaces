import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native"
import { pokemonAPI } from "./pokemonAPI"



export interface PokemonDetails {
    name: string
    height: number
    weight: number
    types: {type: {name: string}}[]
}

interface PokemonDetailsProps {
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({  }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonDetails | null>()
    const navigation = useNavigation();
    const route = useRoute()

    const id = (route.params as {id: number})?.id

    if (loadingData) {
        pokemonAPI.get(`pokemon/${id}/`).then((response) => {
            setLoadingData(false)
            setPokemon(response.data)

        }).catch(error => console.log(error))
    }
    return (

        <View style={styles.container}>
            <Image style={styles.pokemonImage} source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png` }} />
            <Text>{pokemon?.name}</Text>
            <Text>{pokemon?.height}</Text>
            <Text>{pokemon?.weight}</Text>
            {pokemon?.types.map(type => <Text>{type.type.name}</Text>)}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        width: '100%',
    },
    pokemonImage: {
        width: 100,
        height: 100,
    },

});