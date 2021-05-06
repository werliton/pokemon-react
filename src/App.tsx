import React from 'react';
import { Grid } from '@material-ui/core';
import PokemonList from './components/pokemon-list/PokemonList';
import { Alert } from '@material-ui/lab';

function App() {
  return (
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Header />
        <PokemonList />
      </Grid>
  );
}

const Header = () => (
  <Grid item xs={12}>
    <Alert severity="info">
      Listagem de Pokemons
    </Alert>
  </Grid>
)

export default App;
