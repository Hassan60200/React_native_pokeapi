import APIRoot from './index.api';
import React, {useEffect, useState} from "react";
import axios from "axios";

const pokedex = new APIRoot('/pokemon');
export const usePokedex = () => {

    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemon = async (limit) => {
        try {
            await pokedex.pokeApi().get('/', {params: {limit}}).then(res => {
                return res.data.results;
            }).then(results => {
                return Promise.all(results.map(res => axios.get(res.url)));
            }).then(results => {
                setPokemons(results.map(res => res.data));
                setLoader(false);
            })

        } catch (err) {
            setError(true);
            throw err;
        }
    };



    useEffect(() => {
        fetchPokemon(151);
    }, [])

    return {
        pokemons,
        loader
    }
}
