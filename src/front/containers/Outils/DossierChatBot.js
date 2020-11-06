import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as serveur from '../../constants/Serveur'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import SelectActivite from '../components/DossierSecteurActivite'
import * as sectActiv from '../components/DossierSecteurActivite'
import Associe from '../components/DossierAssocie'
import * as nb_associe from  '../components/AssocieNombre'
import DirigeantMalagasy from '../components/DirigeantNombreMalagasy'
import * as nb_dir_et from '../components/DirigeantNombreEtranger'
import *as nb_dir_mg from '../components/DirigeantNombreMalagasy'
import DirigenatEtranger from '../components/DirigeantNombreEtranger'
import * as sassoc_etr from '../components/AssocieNombreEtranger'
import * as sassoc_mg from '../components/AssocieNombreMalgasy'
import * as actionDossier from '../../actions/Outils/Dossier'
import * as config from '../../../index'
import axios from "axios";
import * as APIConfig from "../../constants/APIConfig";
import * as types from '../../constants/DossierActionTypes'
import { Checkbox } from '@material-ui/core';
import "./DossierChatBot.css"
import {Link} from "react-router-dom";
/*import Pdf from "react-to-pdf";*/
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const useStylesSelect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export const state={
  codeFormeJuridique:"",
  idProcedure:1,
  idActiviteReglemente:"",
  value : 0
};
var dossierFJ=[{nomDossier:""}]
const dossier_importateur_exportateur=["Déclaration sur l'honneur","Certificat existence lieu exercice","Plan détaillé des locaux"];
const dossier_grossiste=["Autorisation préalable","Déclaration sur l'honneur","Certificat existence lieu exercice","Plan détaillé des locaux"]
//
var dossier_siege_social;
var dossier_caract=[]
var grossiste;
var importateur;
var exporateur;
var stepall =[ 'Forme Juridique','Activité principale','Caractéristique','Associés','Associé Mineur','Dirigeant Malagasy','Dirigeant Etrangère','Contrat Siège Social','Bailleur','Justificatif Local','Procuration'];
const ref = React.createRef();
function getSteps() {
  return stepall;
  //return ['Détermination Procédure', 'Forme Juridique','Secteur Activite','Caracteristique','Associé','Associé Mineur','Dirigeant Malagasy','Dirigeant Etrangère','Contrat Siège Social','Bailleur','Justificatif Local'];
}

function getStepContent(step,next) {
 
  switch (step) {
   /* case 0:
      return <div>
                
                <h3>Pour quelle procédure souhaitez-vous obtenir la liste de documents à fournir?</h3>
                <SelectProcedure nextStep={next}></SelectProcedure>
             </div>;*/
    case 'Forme Juridique':
      return <div>
              <h3>Quelle est la forme juridique de votre société?</h3>
              <p>Cliquez <Link to='/formalite_creation' target="_blank"><strong>ici</strong> </Link> pour plus d'informations sur les caractéristiques des formes juridiques.</p>
              <SelectFormeJuridique nextStep={next}></SelectFormeJuridique>
          </div>;
    /*case 2:
      return <div>
              <h3>S'agit-il d'une succursale?</h3>
              <Sucursale nextStep={next}/>
          </div>;*/
    case 'Activité principale':
      return <div>
              <h3>Sélectionnez votre activité dans la liste suivante ou "Autres" si aucune ne correspond</h3>
              <p>Plusieurs sélections possibles</p>
              <SelectActivite nextStep={next}/>
          </div>;
    case 'Caractéristique':
    return <div>
            <h3>Dans votre activité, avez-vous la qualité de : </h3>
            <p>Plusieurs sélections possibles, sélectionnez "Aucun" si rien ne vous concerne.</p>
            <Caracteristique nextStep={next}/>
        </div>;
    case 'Associés':
      return <div>
              <h3>Combien d'associés pour votre société, y compris vous? </h3>
           
              <Associe nextStep={next}/>
          </div>;
    case 'Associé Mineur':
      return <div>
              <h3>Un des associés a-t-il moins de 21 ans? </h3>
            
              <AssocieMineur nextStep={next}/>
          </div>;
    case 'Dirigeant Malagasy':
    return <div>
            <h3>Combien de dirigeants de nationalité malagasy pour la société? </h3>
            <p>Un dirigeant peut-être : gérant, co-gérant, Administrateur Général, Président directeur général, Président du Conseil d'Administration, Directeur Général, Commissaire aux comptes</p>
          
            <DirigeantMalagasy nextStep={next}/>
        </div>;
    case 'Dirigeant Etrangère':
    return <div>
            <h3>Combien de dirigeants de nationalité étrangère pour la société? </h3>
            <p>Un dirigeant peut-être : gérant, co-gérant, Administrateur Général, Président directeur général, Président du Conseil d'Administration, Directeur Général, Commissaire aux comptes</p>
            <DirigenatEtranger nextStep={next}/>
        </div>;
    case 'Contrat Siège Social':
      return <div>
              <h3>Quel type de contrat regit la jouissance du local pour votre siège social? </h3>
              
              <SelectContratSiege nextStep={next}/>
          </div>;
    case 'Bailleur':
    return <div>
            <h3>Le bailleur du local est-il :</h3>
            
            <SelectBailleur nextStep={next}/>
        </div>;
    case 'Justificatif Local':
    return <div>
            <h3>Sélectionnez le document justificatif du local </h3>
            
            <SelectJustificatifLocal nextStep={next}/>
        </div>;
    case 'Procuration':
      return <div>
      <h3>Les démarches seront-ils effectués par un mandataire?</h3>
      
      <Mandataire nextStep={next}/>
  </div>;
    default:
      return '';
  }
}
/// liste Procédure
function getListeProcedure(){
  const state=config.store.getState()
 // console.log(state.information)
return state.information.procedures
}
//liste formejuridique 
function getListeFormeJuridique()
{
  
  const state=config.store.getState()
  return state.information.formeJuridiques
}
function listeDossierFormeJuridique(params)
{
  actionDossier.listeDossier(params);
}
//liste dossier activité reglementée


export default function DossierChatbot() {
  //getListeProcedure()
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (index) => {
    setActiveStep((prevActiveStep) => index);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <h3>  Veuillez préciser les informations suivantes :</h3>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label} >
            <StepLabel onClick={(e)=>handleBack(index)}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(stepall[index],handleNext.bind(this))}</Typography>
              <div className={classes.actionsContainer}>
                <div>
              
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Vous avez fini toutes les étapes - Voici la liste de documents correspondant à votre situation
          </Typography>
          <div ref={ref}>
            <table className="table">
                <tr>
                  <td><th>Vos données</th></td>
                  <td><th>Votre liste de documents</th></td>
                </tr>
                <tr>
                  <td>FORME JURIDIQUE: {state.codeFormeJuridique}</td>
                  <td>{dossierFJ.map(dossierFJ=>(<p><li>{dossierFJ.nomDossier}</li></p>))}</td>
                  
                </tr>
                <tr>
                  <td>{sectActiv.dossier.map(dossierSect=>(<p><li>{dossierSect.casUtilisation}</li></p>))}</td>
                  <td>{sectActiv.dossier.map(dossierSect=>(<p><li>{dossierSect.nomDossier}</li></p>))}</td>
                </tr>
                <tr>
                  <td>
                    Caracteristique:
                  {
                    importateur===1?(<p>IMPORTATEUR</p>):(<p></p>)
                  }
                   {
                    exporateur===1?(<p>EXPORTATEUR</p>):(<p></p>)
                  }
                   {
                    grossiste===1?(<p>GROSSISTE</p>):(<p></p>)
                  }
                  </td>
                  <td>
                    DOSSIER :
                  {
                    importateur||exporateur?dossier_importateur_exportateur.map(dossier=>{return(<p><li>{dossier}</li></p>)}):(<p></p>)
                  }

                  {
                    grossiste?(<p> DOSSIER GROSSISTE:</p>):(<p></p>)
                  }
                  
                   {
                    grossiste?dossier_grossiste.map(dossier=>{return(<p><li>{dossier}</li></p>)}):(<p></p>)
                  }
                  </td>
                 
                </tr>
                {state.codeFormeJuridique!="EI"?(
                <tr>
                  <td>
                    ASSOCIE
                {sassoc_etr.nbr_assoc_etr!=0?(<p>Nombre d'associé droit étrager: {sassoc_etr.nbr_assoc_etr}</p>):(<p></p>)}
                {sassoc_mg.nbr_assoc_malagasy!=0?(<p>Nombre d'associé droit Malagasy: {sassoc_mg.nbr_assoc_malagasy}</p>):(<p></p>)}
                {mineur!=0?(<p>Un des associés a moins de 21 ans</p>):(<p></p>)}
                  </td>
                  <td>
                    
                {sassoc_etr.nbr_assoc_etr!=0?(<p><h4>Document associé droit étranger</h4>: {sassoc_etr.nbr_assoc_etr} x (statut et Kbis VF)</p>):(<p></p>)}
                {sassoc_mg.nbr_assoc_malagasy!=0?(<p><h4>Document associé droit Malagasy</h4>: {sassoc_mg.nbr_assoc_malagasy} x (Carte NIF et extrait RCS, PV prise de participation)</p>):(<p></p>)}
                {mineur!=0?(<p> <h4>CIN du représentant légal</h4></p>):(<p></p>)}
                  </td>
                </tr>):(<p></p>)}
                <tr>
                  <td>
                    DIRIGEANT
                    {nb_dir_et.nbr_dir_etr!=0?(<p>Nombre de dirigeant étranger: {nb_dir_et.nbr_dir_etr}</p>):(<p></p>)}
                    {nb_dir_mg.nbr_dir_mg!=0?(<p>Nombre de dirigeant Malagasy: {nb_dir_mg.nbr_dir_mg}</p>):(<p></p>)}
                  </td>
                  <td>
                    {nb_dir_et.nbr_dir_etr!=0?(<p><h4>Document pour le/les dirigeant étranger:</h4> {nb_dir_et.nbr_dir_etr} x (<li>Passeport avec visa long séjour,</li><li>certificat de résidence,</li><li>déclaration relatif aux dirigeants</li>  )</p>):(<p></p>)}
                    {nb_dir_mg.nbr_dir_mg!=0?(<p><h4>Document pour le/les dirigeant Malagasy:</h4> {nb_dir_mg.nbr_dir_mg} x (<li>CIN,</li><li>Certificat de résidence,</li>  <li>déclaration relatif aux dirigeants</li>)</p>):(<p></p>)}

                  </td>
                </tr>
                <tr>
                  <td>
                  SIEGE SOCIAL
                  {type_contrat!=""?(<p>Type de Contrat: {type_contrat}</p>):(<p></p>)}
                  {type_bailleur!=""?(<p>Bailleur: {type_bailleur}</p>):(<p></p>)}
                  {doucument_justificatif!=""?(<p><li>{doucument_justificatif}</li></p>):(<p></p>)}
                  </td>
                  <td>
                  DOCUMENT CONTRAT
                  <br></br>{type_contrat!=""?(dossier_siege_social):(<p></p>)} <br></br>
                  DOCUMENT BAILLEUR
                  {doc_type_bailleur!=""?(<p><li>{doc_type_bailleur}</li></p>):(<p></p>)}
                  JUSTIFICATIF LOCAL
                  {justificatif_local!=""?(<p><li>{justificatif_local}</li></p>):(<p></p>)}
                  {doucument_justificatif!=""?(<p><li>{doucument_justificatif}</li></p>):(<p></p>)}
                  

                  </td>
                </tr>
                {mandataire!=0?(<tr>
                  <td><p>MANDATAIRE</p></td>
                  <td>
                    <p>
                      <li>Lettre de procuration</li>
                    </p>
                    <p>
                      <li>Copie CIN du mandataire</li>
                    </p>
                  </td>
                  
                </tr>):(<p></p>)}
                
              
            </table>
            </div>
          <Button onClick={handleReset} className={classes.button}>
            Recommencer
          </Button>
          {/*<Pdf targetRef={ref} filename="documentCreation.pdf">
            {({ toPdf }) => <Button onClick={toPdf}>Télécharger</Button>}
                </Pdf>*/}
          
        </Paper>
      )}
    </div>
  );
}


 function SelectProcedure(props) {
  // console.log(listeprocedure)
  const listeprocedure= getListeProcedure();
  const listeProcedures=listeprocedure.length ?(
    listeprocedure.map(post=>{
            return(
              <MenuItem key={post.idProcedure} value={post.idProcedure} >{post.nomProcedure}</MenuItem>
           

            ) })
            ):(<p> Aucun procedure pour le moment!</p>);
  const classes = useStylesSelect();
  const [procedure, setProcedure] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setProcedure(event.target.value);
    state.idProcedure=event.target.value
    console.log(state.idProcedure)
    props.nextStep()
    //console.log(props.nextStep)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Procédure</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={procedure}
          onChange={handleChange}
        >
         
         {listeProcedures}
        </Select>
      </FormControl>
    </div>
  );
}
function SelectFormeJuridique(props) {
  const listeFormeJuridique= getListeFormeJuridique();
  
  const listeFormeJuridiques=listeFormeJuridique.length ?(
    listeFormeJuridique.map(post=>{
            return(
              <MenuItem key={post.idFJ} value={post.codeFormeJuridique} >{post.libelleFormeJuridique}</MenuItem>
           

            ) })
            ):(<p> Aucun procedure pour le moment!</p>);
  const classes = useStylesSelect();
  const [formeJ, setFormeJ] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFormeJ(event.target.value);
    state.codeFormeJuridique=event.target.value;
    if(state.codeFormeJuridique==='EI')
    {
      stepall =[ 'Forme Juridique','Activité principale','Caractéristique','Contrat Siège Social','Bailleur','Justificatif Local','Procuration'];
    }
    else{
       stepall =[ 'Forme Juridique','Activité principale','Caractéristique','Associé','Associé Mineur','Dirigeant Malagasy','Dirigeant Etrangère','Contrat Siège Social','Bailleur','Justificatif Local','Procuration'];
    }
    console.log(state)
   
    //actionDossier.listeDossier(state)
    props.nextStep()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Forme Juridique</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={formeJ}
          onChange={handleChange}
        >
         
          {listeFormeJuridiques}
        </Select>
      </FormControl>
    </div>
  );
}

 function Sucursale(props) {
  return (
    <FormControl component="fieldset">
    
      <RadioGroup row aria-label="position" name="sucursale" defaultValue="top">
        
        <FormControlLabel
          value="suc_oui"
          control={<Radio color="primary" />}
          label="Oui"
          labelPlacement="start"
          onClick={props.nextStep}
        />
     <FormControlLabel
          value="suc_non"
          control={<Radio color="primary" />}
          label="Non"
          labelPlacement="start"
          onClick={props.nextStep}
        />
        
      </RadioGroup>
    </FormControl>
  );
}
var mandataire=0;
function Mandataire(props) {
  const handleChange=(e)=>{
   
    if(e.target.value=="oui")
     {mandataire=1;}
     else{
      mandataire=0
    }
  
  }
  return (
    <FormControl component="fieldset">
    
      <RadioGroup row aria-label="position" name="sucursale" defaultValue="top" onChange={handleChange}>
        
        <FormControlLabel
          value="oui"
          control={<Radio color="primary" />}
          label="Oui"
          labelPlacement="start"
          onClick={props.nextStep}
        />
     <FormControlLabel
          value="non"
          control={<Radio color="primary" />}
          label="Non"
          labelPlacement="start"
          onClick={props.nextStep}
        />
        
      </RadioGroup>
    </FormControl>
  );
}
var grossiste;
function Caracteristique(props) {
  const handleChange=(e)=>{
    console.log(e.target.checked) 
    const dossier=[] 
    
    if(e.target.checked)
    {
      if(e.target.value==="Importateur"){
        importateur=1;
      }
      if(e.target.value==="Exportateur"){
        exporateur=1;
      }
        
        
      if(e.target.value==="Grossiste")
      grossiste=1;
       else
        dossier_caract=[]
      
    }
    else{
      importateur=0;
      exporateur=0;
      grossiste=0;
      }
      
  }
 
  return (
    <FormControl component="fieldset">
    
      <RadioGroup row aria-label="position" name="caracteristique" defaultValue="top">
        
        <FormControlLabel
          value="Importateur"
          control={<Checkbox color="primary" />}
          label="Importateur"
          labelPlacement="start"
          onClick={handleChange}
        
        />
     <FormControlLabel
          value="Exportateur"
          control={<Checkbox color="primary" />}
          label="Exportateur"
          labelPlacement="start"
          onClick={handleChange}
        
         
        />
         <FormControlLabel
          value="Grossiste"
          control={<Checkbox color="primary" />}
          label="Grossiste"
          labelPlacement="start"
          onClick={handleChange}
        />
        <FormControlLabel
          value="Aucun"
          control={<Checkbox color="primary" />}
          label="Aucun"
          labelPlacement="start"
          onClick={handleChange}
        />
         
      </RadioGroup>
      <Button onClick={props.nextStep}>Valider</Button>
    </FormControl>
  );
}
var mineur;
function AssocieMineur(props) {
  const handleChange=(e)=>{
   
    if(e.target.value==="mineur_oui")
     {mineur=1;}
     else{
      mineur=0
    }
    getlisteDossierFormeJuridique(state)
  }
 
  return (
    <FormControl component="fieldset">
    
      <RadioGroup row aria-label="position" name="associe_mineur" defaultValue="top" onChange={handleChange}>
        
        <FormControlLabel
          value="mineur_oui"
          control={<Radio color="primary" />}
          label="Oui"
          labelPlacement="start"
          onClick={props.nextStep}
          
        />
     <FormControlLabel
          value="mineur_non"
          control={<Radio color="primary" />}
          label="Non"
          labelPlacement="start"
          onClick={props.nextStep}
        />
        
      </RadioGroup>
    </FormControl>
  );
}

var type_contrat="";
var contrat="";
function SelectContratSiege(props) {
  const classes = useStylesSelect();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    type_contrat=event.target.value;
    const doc=["Contrat de domiciliation","Contrat de bail","Contrat bail original", "contrat de sous-location"]
    switch(type_contrat){
      case 'Domiciliation':dossier_siege_social=doc[0];break;
      case 'Location':dossier_siege_social=doc[1];break;
      case 'Sous-location':dossier_siege_social=doc[2]+','+doc[3];break;
      default:;
    }
    props.nextStep()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Contrat siège Social</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          
          <MenuItem value={"Domiciliation"}>Domiciliation</MenuItem>
          <MenuItem value={"Location"}>Location</MenuItem>
          <MenuItem value={"Sous-location"}>Sous-location</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
var type_bailleur="";
var doc_type_bailleur="";
function SelectBailleur(props) {
  const classes = useStylesSelect();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    switch(event.target.value){
      case 1:type_bailleur="Un particulier Propriétaire";doc_type_bailleur="CIN";break;
      case 2:type_bailleur="Un particulier Héritier";doc_type_bailleur="Acte de notoriété propriétaire et Autorisation de louer des cohéritiers";break;
      case 3:type_bailleur="Représentant";doc_type_bailleur="CIN, procuration du propriétaire";break;
      case 4:type_bailleur="Société";doc_type_bailleur="RCS et Carte Fiscale";break;
      default: ;
    }
    
     props.nextStep()

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Bailleur</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
         
          <MenuItem value={1}>Un particulier Propriétaire</MenuItem>
          <MenuItem value={2}>Un particulier Héritier</MenuItem>
          <MenuItem value={3}>Un particulier représentant</MenuItem>
          <MenuItem value={4}>Une société</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
var justificatif_local="";
var doucument_justificatif="";
function SelectJustificatifLocal(props) {
  const classes = useStylesSelect();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    justificatif_local="PLan de repérage visé par le fokontany"
    doucument_justificatif=event.target.value;
    props.nextStep()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Justificatif Local</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
        
          <MenuItem value={"Copie du titre foncier"}>Copie du titre foncier</MenuItem>
          <MenuItem value={"Certificat de situation juridique"}>Certificat de situation juridique</MenuItem>
          <MenuItem value={"Acte de vente"}>Acte de vente</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
const mapStateToProps= state=>{
  return{

      formejuridique:state.information.formeJuridiques,
      regimeFiscaux:state.information.regimeFiscaux
  }
};



function getlisteDossierFormeJuridique(state)
{
  console.log("nombre associé"+nb_associe.nbr_assoc)
  if(state.codeFormeJuridique=='SA')
{
    if(nb_associe.nbr_assoc<=3){
      state.codeFormeJuridique='SA-AG'
    }
    else{
      state.codeFormeJuridique='SA-CA'
    }
      
}
    var ressource='listeDossierFormeJuridique';
    var authorization=APIConfig.ACCESS_DOSSIER;
   // console.log('function liste dossier'+request.codeFormeJuridique);
     axios.get(APIConfig.API_URI_DOSSIER+ressource,
                        { headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                    },
                          params: {
                              idProcedure:state.idProcedure ,
                              codeFormeJuridique:state.codeFormeJuridique
                            }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.dossierFormeJuridiques);
                                console.log(response);
 

                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    nomDossier:value['nomDocument']
                                                                })
                                    ));
                                    dossierFJ=formattedData
                                    console.log("dossierFJ"+dossierFJ)
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
                        
    
}
