import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import cardImage from '../../../assets/imgs/card.jpg'
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,

    '&:hover': {
      cursor: 'pointer',
      borderColor: '#d45858',
      border: '2px solid'
    },
    transition: 'all 0.5s 0s ease'
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
});

interface PokemonProps {
  name?: string
  url?: string
}

const PokemonCard: React.FC<PokemonProps> = ({ name, url }) => {
  const classes = useStyles();
  const history = useHistory()

  const urlcutted = url?.split('/')
  const id = urlcutted && urlcutted[urlcutted?.length - 2]

  const handleClick = () => {
    history.push(`/detail/${id}`)
  }

  return (
    
    <Grid item xs={6} md={3}>
      <Card className={classes.root} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cardImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name?.toLocaleUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth color="primary" variant="contained">
            <Link to={`/detail/${id}`} className={classes.link} >
                Detalhes
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default PokemonCard