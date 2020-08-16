import React from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


export type CardProps = {
    title: string;
    body: string;
    image: string;
}

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const CardComponent: React.FC<CardProps> = (props) => {
  const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={props.image}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography>
                    {props.body.slice(0,50)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent;