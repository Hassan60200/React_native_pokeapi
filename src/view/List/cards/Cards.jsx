import {
    Box,
    Heading,
    Stack,
    Pressable, Avatar, ScrollView, Badge,
} from "native-base";
import React from "react";
import {StyleSheet} from 'react-native';

const Cards = ({pokemon, navigation}) => {
    return <ScrollView>
        <Box style={styles.card}>
            <Pressable
                onPress={() => {
                    navigation.navigate('Pokemon', {
                        pokemon
                    })
                }}>
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <Avatar style={styles[pokemon.types[0].type.name]} alignSelf="center" size="2xl"
                                source={{
                                    uri: pokemon.sprites.other['official-artwork'].front_default
                                }}>
                        </Avatar>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading style={styles.title} size="md" ml="-1">
                                N°{pokemon.id} {pokemon.name.toUpperCase()}
                            </Heading>
                            {pokemon.types.map((types) => (
                                <Badge
                                    key={types.type.name}
                                    style={styles[types.type.name]}
                                >
                                    {types.type.name}
                                </Badge>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            </Pressable>
        </Box>
    </ScrollView>;

};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 15,
        alignItems: "center",
    },
    stack: {
        padding:10,
    },
    title: {
        fontWeight: 'bold',
        color: '#e80d0d',
        textAlign: "center"
    },
    grass: {
        backgroundColor: 'rgb(38, 235, 90)'
    },
    fire: {
        backgroundColor: 'rgb(235, 71, 38)'
    },
    water:
        {
            backgroundColor: 'rgb(38, 186, 235)'
        },


    electric:
        {
            backgroundColor: 'rgb(235, 209, 38)'
        },


    ice:
        {
            backgroundColor: 'rgb(38, 219, 235)'
        },


    fighting:
        {
            backgroundColor: '#B26950'
        },


    poison:
        {
            backgroundColor: 'rgb(176, 38, 235)'
        },

    ground:
        {
            backgroundColor: 'rgb(181, 131, 92)'
        },


    flying:
        {
            backgroundColor: '#6E99E4'
        },


    psychic:
        {
            backgroundColor: 'rgb(219, 77, 207)'
        },


    ghost:
        {
            backgroundColor: 'rgb(131, 24, 133)'
        },


    bug:
        {
            backgroundColor: 'rgb(113, 209, 10)'
        },

    rock:
        {
            backgroundColor: 'rgb(166, 87, 8)'
        },


    dragon:
        {
            backgroundColor: 'rgb(50, 24, 217)'
        },


    normal:
        {
            backgroundColor: '#A7A89F'
        },


    fairy:
        {
            backgroundColor: 'rgb(255, 148, 191)'
        },

    dark:
        {
            backgroundColor: 'rgb(14, 13, 13)'
        },
    steel:
        {
            backgroundColor: '#ACADBB'
        }
});

export default Cards;
