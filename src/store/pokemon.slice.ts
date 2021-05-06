import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { PokemonDetail, PokemonResults } from "./interfaces/IPokemon";
import { Request } from "./interfaces/IRequest";
import api from "../request/api/pokemon.api";

interface PokemonState extends Request {
    pokemonList: PokemonResults
    pokemonDetail: PokemonDetail
}

const PokemonInitialState = {
    pokemonList: {},
    pokemonDetail: {},
    isLoading: true,
    error: null
} as PokemonState

const startLoading = (state: PokemonState) => {
    state.isLoading = true
}

const loadingFailed = (state: PokemonState, action: PayloadAction<string>) => {
    state.isLoading = false
    state.error = action.payload
}

const pokemons = createSlice({
    name: 'pokemons',
    initialState: PokemonInitialState,
    reducers: {
        getPokemonsRequest: startLoading,
        getPokemonsSuccess(state, { payload }: PayloadAction<PokemonResults>){
            state.pokemonList = payload
            state.isLoading = false
        },
        getPokemonSuccess(state, { payload }: PayloadAction<PokemonDetail>){
            state.pokemonDetail = payload
            state.isLoading = false
        },
        getPokemonsFailure: loadingFailed
    }
})



export const {
    getPokemonsRequest,
    getPokemonsSuccess,
    getPokemonsFailure,
    getPokemonSuccess
} = pokemons.actions

export default pokemons.reducer

// Thunks Actions
export const fetchAllPokemons = (): AppThunk => async dispatch => {
    try{
        dispatch(getPokemonsRequest())
        const dataPokemons = await api.getAllPokemons()
        dispatch(getPokemonsSuccess(dataPokemons))
    }catch(error){
        dispatch(getPokemonsFailure(error.toString()))
    }
}

export const fetchPokemonById = (id: string | undefined): AppThunk => async dispatch => {
    try{
        dispatch(getPokemonsRequest())
        const dataPokemon = await api.getPokemonById(id)
        dispatch(getPokemonSuccess(dataPokemon))
    }catch(error){
        dispatch(getPokemonsFailure(error.toString()))
    }
}