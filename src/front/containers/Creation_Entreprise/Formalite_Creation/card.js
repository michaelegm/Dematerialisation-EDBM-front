import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 140,
  },
 
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="card">
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.titre}
          </Typography>
          <Typography  className="texte" component="p">
            {props.contenue}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
