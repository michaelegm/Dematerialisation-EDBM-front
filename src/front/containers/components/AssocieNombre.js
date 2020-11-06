
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AssocieNombreEtranger from './AssocieNombreEtranger'
import AssocieNombreMalagasy from './AssocieNombreMalgasy';



const useStyles = makeStyles({
  root: {
    width: 450,
  },
  input: {
    width: 102,
  },
});
export var nbr_assoc=0;
export default function AssocieNombre(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    nbr_assoc=event.target.value 
  
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    nbr_assoc=event.target.value  
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
     
    
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
         {/* <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
         />*/}
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
       
      </Grid>
      {nbr_assoc!=0?<AssocieNombreMalagasy/>: null}
      {nbr_assoc!=0?<AssocieNombreEtranger/>: null}
      
  
    </div>
  );
}/*
*/
