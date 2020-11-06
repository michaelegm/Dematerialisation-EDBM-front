import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AssocieNombreEtranger from './AssocieNombreEtranger'
import Grid from '@material-ui/core/Grid';
import AssocieNombreMalagasy from './AssocieNombreMalgasy';
import AssocieNombre from './AssocieNombre';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Associe(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState();
  const [assocMalagasy, setAssocMalagasy] = React.useState();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
    //props.nextStep()
    //handleSubmit(event)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'oui') {
        var associer=<AssocieNombreEtranger/>;
        var assocMalagasy=<AssocieNombreMalagasy/>
        console.log(associer)
      setHelperText(associer);
      setAssocMalagasy(assocMalagasy)
      setError(false);
    } else if (value === 'non') {
      setHelperText('');
      setError(true);
      props.nextStep()
    } else {
      setHelperText('Veuillez choisir');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        {/*<FormLabel component="legend">Avez- vous des associés dans votre société?</FormLabel>*/}
        
     
        <Grid container spacing={2}>
        <Grid item xs={2}>
        {/*<RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="non" control={<Radio /> } label="Non" onClick={props.nextStep}/>
          <FormControlLabel value="oui" control={<Radio />} label="Oui" />
      </RadioGroup>*/}
        
       <AssocieNombre/>
        </Grid>
       
        </Grid>
        <ButtonValider nextStep={props.nextStep}/>
        
      </FormControl>
    </form>
  );
}
function ButtonValider(props)
{
  return <Button onClick={props.nextStep} className="btn btn-primary">Valider</Button>
}
function getListeDossier(){
console.log('hahaha')
}