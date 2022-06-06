import React, {useEffect} from 'react';
import {View, FlatList, Box, HStack, Spinner, Heading} from 'native-base';
import Cards from "./cards/Cards";
import {usePokedex} from "../../api/PokemonListApi";
import {ImageBackground, StyleSheet} from "react-native";

export const PokemonListView = ({navigation}) => {
    const image = {uri: "https://images4.alphacoders.com/728/728240.png"};
    const {pokemons, loader} = usePokedex();

    if (loader) {
        return <HStack space={2} style={styles.loader}>
            <Spinner color="emerald.500" style={styles.loader}/>
            <Heading style={styles.loader}>
                Recherche en cours
            </Heading>
        </HStack>;
    }

    return (
        <Box style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View>
                    <FlatList
                        data={pokemons}
                        horizontal={false}
                        numColumns={2}
                        maxToRenderPerBatch={10}
                        renderItem={({item: pokemon}) => {
                            return <Cards pokemon={pokemon} navigation={navigation}/>;
                        }}
                    />
                </View>
            </ImageBackground>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    loader: {
        justifyContent: "center",
        marginTop: 50,
        color: '#00c727',
    }
});
