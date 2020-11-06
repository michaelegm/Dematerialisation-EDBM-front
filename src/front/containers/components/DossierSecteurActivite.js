import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import * as config from '../../../index'
import { Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
    maxWidth: 600,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export const documentActivite=[{casUtilisation:"",nomDocument:""}]
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function getListeDossierActiviteReglemente(){

  const state=config.store.getState()
  console.log('listeAR'+config)
  return state.dossier.dossierAR;

}

export var dossier=[{nomDossier:"",casUtilisation:""}];

export default function SelectActivite(props) {
  getListeDossierActiviteReglemente();
  const listeAR=getListeDossierActiviteReglemente();
  

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    console.log(event)
   
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    const document=[];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
        document.push(options[i].dossier)
        console.log('document'+document)
      }
    }
    setPersonName(value);
  };


  const itemList=listeAR.length ?(
    listeAR.map(post=>{
            return(
              <MenuItem key={post.casUtilisation} style={getStyles(post.casUtilisation, post.casUtilisation, theme) } value={post.casUtilisation} name={post.nomDocument}>{post.casUtilisation}</MenuItem>
           

            ) })
            ):(<p> Aucun procedure pour le moment!</p>);

  return (
    <div>
      
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Secteur d'activités</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => {
            const _dossier=[]
            return(
            <div className={classes.chips}>
              {selected.map((value) => { 
                 
                  listeAR.map(post=>{
                   
                         if(value===post.casUtilisation)
                            {
                              _dossier.push({
                                nomDossier:post.nomDocument,
                                casUtilisation:post.casUtilisation
                              })
                           }});
                      dossier=_dossier
                      console.log(dossier)
                return(
                <Chip key={value} label={value} className={classes.chip} />
              )})}
            </div>
          )}}
          MenuProps={MenuProps}
        >
          {itemList}
          <MenuItem value="Autres">Autres</MenuItem>
        </Select>
        <Button onClick={props.nextStep}>Valider</Button>
      </FormControl>
      
    </div>
  );
}
