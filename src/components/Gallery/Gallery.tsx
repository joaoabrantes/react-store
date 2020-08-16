import React from 'react'

import CardComponent from '../Card/Card'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { CardType } from '../../pages/HomePage/HomePage'

export interface Cards {
    cards: CardType[]
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      marginTop: '10%',
    },
  }));

const Gallery = ({cards}: Cards) => {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card, index) =>
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <CardComponent title={card.title} image={card.img} body={card.info} /> 
                    </Grid>  
                )}
            </Grid>
        </Container>
    )
}

export default Gallery;