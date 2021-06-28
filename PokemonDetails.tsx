import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { pokemonAPI } from "./pokemonAPI";
import { AntDesign } from "@expo/vector-icons";

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

interface PokemonDetailsProps {}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({}) => {
  const [loadingData, setLoadingData] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonDetails | null>();
  const navigation = useNavigation();
  const route = useRoute();

  const id = (route.params as { id: number })?.id;

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
    <View style={styles.container}>
      <View style={{ height: 125, backgroundColor: "transparent" }} />
      <View
        style={{
          backgroundColor: "#e7e7e7",
          borderWidth: 2,
          flex: 1,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View style={{ paddingHorizontal: 16 }}>
          <View
            style={{
              backgroundColor: "transparent",
              alignItems: "center",
              position: "relative",
              top: -60,
            }}
          >
            <Image
              style={styles.pokemonImage}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
              }}
            />
            <Text
              style={{ fontFamily: "FontPokemon", fontSize: 25, marginTop: 8 }}
            >
              {pokemon?.name.toUpperCase()}
            </Text>
          </View>
          <View style={{ position: "relative", top: -126 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="leftcircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 16, marginTop: -70 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              {pokemon?.types.map((type) => (
                <View
                  key={type.type.name}
                  style={{
                    backgroundColor: "#b8caf6",
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    margin: 4,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "#476ECC",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textTransform: "capitalize",
                      color: "#476ECC",
                    }}
                  >
                    {type.type.name}
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ marginTop: 16 }}>
              <Text style={{ fontSize: 20 }}>{`Height: ${
                pokemon?.height && pokemon?.height * 10
              } cm`}</Text>
              <Text style={{ fontSize: 20 }}>{`Weight: ${
                pokemon?.weight && pokemon?.weight / 10
              } kg`}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "transparent",
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
});
