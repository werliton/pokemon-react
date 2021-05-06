import React from 'react';
import { AppBar as Bar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
  }));

const AppBar: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleToHome = () => {
    history.push('/')
  }

  return (
    <Bar position="static">
    <Toolbar>
      <Button onClick={handleToHome} color="inherit">
        <Typography variant="h6" className={classes.title}>
          Pokemon Challange
        </Typography>
      </Button>
    </Toolbar>
  </Bar>
  )
}

export default AppBar;