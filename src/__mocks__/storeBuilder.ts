import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../store/pokemon.slice";

const storeBuilder = (initialState = {}) => configureStore(
    {
        reducer:{
            pokemons: pokemonSlice
        },
        preloadedState: {
            pokemons: initialState
        }
    }
)

export default storeBuilder