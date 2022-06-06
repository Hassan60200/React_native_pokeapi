import React from 'react';
import {View, Text, Box, Badge, Progress, VStack, ScrollView, Avatar, Button} from 'native-base';
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";


export const PokemonDetailsView = ({route}) => {
    const {pokemon} = route.params;

    const value = [...pokemon.stats];

    return (
        <ScrollView>
            <Box alignItems="center">
                <Box>
                    <View style={styles.modalContainer}>
                        <Avatar style={styles[pokemon.types[0].type.name]} alignSelf="center" size="2xl"
                                source={{
                                    uri: pokemon.sprites.other['official-artwork'].front_default
                                }}>
                        </Avatar>
                        <Text style={styles.pokeName}>{pokemon.name.toUpperCase()}</Text>
                        {pokemon.types.map((types) => (
                            <Badge
                                key={types.type.name}
                                style={styles[types.type.name]}
                            >
                                {types.type.name}
                            </Badge>
                        ))}
                    </View>
                </Box>
                <View style={styles.container}>
                    <View>
                        <View style={styles.detailContainer}>
                            <Icon name="dumbbell" color="#111" size={20}/>
                            <Text style={styles.detailText}>{pokemon.weight / 10} kg</Text>
                            <Icon name="arrows-alt-v" color="#111" size={20}/>
                            <Text style={styles.detailText}>{pokemon.height / 10} cm</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <VStack space="md">
                        <VStack style={styles.progressBar} space="md">
                            <Text style={styles.pokeName}>Stats de bases</Text>
                            <View>
                                <Text style={styles.stats}>HP: {value[0].base_stat}</Text>
                                <Progress colorScheme="emerald" value={value[0].base_stat}/>
                            </View>
                            <View>
                                <Text style={styles.stats}>ATK: {value[1].base_stat}</Text>
                                <Progress colorScheme="secondary" value={value[1].base_stat}/>
                            </View>
                            <View>
                                <Text style={styles.stats}>DEF: {value[2].base_stat}</Text>
                                <Progress colorScheme="warning" value={value[2].base_stat}/>
                            </View>
                            <View>
                                <Text style={styles.stats}>ATK SPE: {value[3].base_stat}</Text>
                                <Progress colorScheme="primary" value={value[3].base_stat}/>
                            </View>
                            <View>
                                <Text style={styles.stats}>DEF SPE: {value[4].base_stat}</Text>
                                <Progress colorScheme="light" value={value[4].base_stat}/>
                            </View>
                            <View>
                                <Text style={styles.stats}>SPEED: {value[5].base_stat}</Text>
                                <Progress colorScheme="warning" value={value[5].base_stat}/>
                            </View>
                        </VStack>
                    </VStack>
                </View>
                <VStack space="md">
                    <VStack style={styles.progressBar}>
                        <Text style={styles.pokeName}>Compétences</Text>
                        <View>
                            {pokemon.abilities.map((abilities) => (
                                <Button colorScheme="secondary" style={styles.abilities}
                                        key={abilities.ability.name}>{abilities.ability.name.toUpperCase()}</Button>
                            ))}
                        </View>
                    </VStack>

                    <VStack style={styles.progressBar}>
                        <Text style={styles.pokeName}>Attaques</Text>
                        <View>
                            {pokemon.moves.slice(0, 5).map((move, index) =>
                                <Button colorScheme="warning" style={styles.abilities}
                                        key={index}>{move.move.name.toUpperCase()}</Button>
                            )}
                        </View>
                    </VStack>
                </VStack>
            </Box>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
        card: {
            width: '100%',
            borderRadius: 80,
            overflow: 'hidden',
            marginTop: 15,
            marginBottom: 50,
            backgroundColor: '#19d33f',
        },
        title: {
            fontWeight: 'bold',
            color: '#e80d0d',
            textAlign: "center"
        },
        modalContainer: {
            marginTop: 100,
            marginBottom: 50,
        },
        pokeImage: {
            height: 100,
            width: 200,
        },
        progressBar: {
            marginTop: 15,
            marginBottom: 30
        },
        pokeName: {
            paddingTop: 20,
            fontSize: 25,
            textAlign: "center"
        },
        stats: {
            textAlign: "center"
        },
        container: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        detailContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
        },
        detailText: {
            color: "#111",
            marginLeft: 10,
            marginRight: 20,
            fontSize: 18,
        },
        abilities: {
            paddingBottom: 10,
            marginTop: 15,
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
    })
;
