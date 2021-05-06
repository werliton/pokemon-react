import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import pokemonSlice from './pokemon.slice'

export const rootReducer = combineReducers({
    pokemons: pokemonSlice
})

export type AppState = ReturnType<typeof rootReducer>

const store = configureStore({ reducer: rootReducer })

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>

export default store