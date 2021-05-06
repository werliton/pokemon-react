import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, CardHeader, Chip, Collapse, Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { fetchPokemonById } from '../../../store/pokemon.slice';
import { Skeleton } from '@material-ui/lab';
import { getFirstLetter } from '../../../utils/string';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',

    '& img':{
      width: 300
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));
interface PokemonProps {
  name?: string
  url?: string
}

interface ParameterProps {
  id: string | undefined
}

const PokemonDetail: React.FC<PokemonProps> = () => {
  
  const history  = useHistory()
  
  const handleToHome = () => {
    history.push('/')
  }
  return (
    <Grid container direction="column">
      <Grid item xs>
        <CardDetail />
      </Grid>
      <Grid item xs>
        <Button fullWidth color="primary" variant="contained" onClick={handleToHome}>Voltar ao início</Button>
      </Grid>
    </Grid>
      
  );
}

const CardDetail = () => {
  
  const { id }   = useParams<ParameterProps>()
  const dispatch = useDispatch()

  const { pokemonDetail, isLoading } = useSelector((state: AppState) => state.pokemons)
  
  useEffect(()=> {
    dispatch(fetchPokemonById(id))
  },[dispatch, id])
  
  const { name, weight, height, sprites, abilities } = pokemonDetail
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className={classes.root}>
        <CardHeader
          avatar={
            isLoading ? <Skeleton animation="wave" variant="circle" width={40} height={40} />
            :
            <Avatar aria-label="recipe" className={classes.avatar}>
              {getFirstLetter(name)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={
            isLoading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
            : name?.toUpperCase()
          }
          subheader={`Weight: ${weight}, Height: ${height}`}
        />
        {
          isLoading ? <Skeleton animation="wave" variant="rect" className={classes.media} />
          : 
          <CardMedia
            className={classes.media}
            image={sprites?.other?.dream_world?.front_default}
            title={name}
          />
        }
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Expanda para ver as habilidades do {name?.toUpperCase()}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>            
            <Typography paragraph>Habilidades:</Typography>
            <Abilities abilities={abilities} />
          </CardContent>
        </Collapse>
      </Card>
  )
}

const Abilities = ({abilities}: any) => {
  return (
    <>
    {
      abilities.map((ab: any) => (
        <Chip
          key={ab.ability.name}
          avatar={<Avatar>A</Avatar>}
          label={ab.ability.name}
          clickable
          color="primary"
          variant="outlined"
        />
      ))
    }
    </>
  )
}
export default PokemonDetail

