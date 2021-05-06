import React from 'react';
import AppBar from '../app-bar/AppBar';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const Wrapper: React.FC = ({ children }) => {
  const classes = useStyles()

  return (    
    <Router>
        <AppBar />
        <Container className={classes.container} >
          <div>
            {children}
          </div>
        </Container>
    </Router>
  )
}

export default Wrapper;