import { PokemonDetail, PokemonResults } from "../../store/interfaces/IPokemon";
import Api from "./Api";

const getAllPokemons = async (): Promise<PokemonResults> => {
    
    const url = `/pokemon`

    const { data } = await Api.get<PokemonResults>(url)
    
    return data
}

const getPokemonById = async (id: string | undefined): Promise<PokemonDetail> => {
    
    const url = `/pokemon/${id}`

    const { data } = await Api.get<PokemonDetail>(url)
    
    return data
}

export default {
    getAllPokemons,
    getPokemonById
}