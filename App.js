import React from "react";
import {
    NativeBaseProvider,
    extendTheme,
} from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonListView} from "./src/view/List/PokemonListView";
import {PokemonDetailsView} from "./src/view/Details/PokemonDetailsView";

const Stack = createNativeStackNavigator();
// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({config});
export default function App() {

    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="POKEMONS" component={PokemonListView} options={{
                        headerTitleAlign: "center",
                        title: "POKEDEX"
                    }}/>
                    <Stack.Screen name="Pokemon" component={PokemonDetailsView} options={{
                        headerTitleAlign: "center",
                        title: "Pokemon"
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}




