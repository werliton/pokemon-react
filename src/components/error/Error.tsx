import { Button, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useHistory } from 'react-router';

const Error: React.FC = () => {
  const history = useHistory()

  const handleGoToHome = () => {
    history.push('/')
  }

  return (
      <Grid container justify="center">
          <Grid item xs>
            <Alert severity="info">OPS!! Página não encontrada.</Alert>
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" onClick={handleGoToHome}>Voltar para HOME</Button>
          </Grid>
      </Grid>
  )
}

export default Error;