import { Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { fetchAllPokemons } from '../../store/pokemon.slice';
import PokemonCard from './pokemon-card/PokemonCard';

const PokemonList: React.FC = () => {
  return <PokemonListItem />
}

const PokemonListItem = () => {
  const dispatch = useDispatch()

    const { pokemonList: { results }, isLoading } = useSelector((state:AppState) => state.pokemons)

    useEffect(()=>{
        dispatch(fetchAllPokemons())
    },[dispatch])

  return (
    <>
    {
      isLoading ? <Skeleton variant="rect" width={210} height={118} />
      :
      results?.map((pokemon: any) => <PokemonCard {...pokemon} key={pokemon.url} />)
    }
    </>
  )
}

export default PokemonList;