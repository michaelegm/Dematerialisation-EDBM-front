import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, Row, Col }from "react-bootstrap"
import * as config from '../../../index'
import * as action from '../../actions/Information'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '53.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
    fontStyle:'italic'
  },
}));
const listeFormeJuridique=[{idRF:"",
    libelleRegimeFiscal:"",
    acroRegimeFiscal:"",
    caracteristique:"",
    casutilisation:"",
    responsabilite:""}]

export default function ListeActiviteReglemente() {

  function getListeActiviteReglemente(){
    const state=config.store.getState()
    return state.information.activiteReglementesDetail;

  }
  
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
    useEffect(() => {
        
      action.listeActiviteReglementeDetail()
    }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //
  //console.log(state.information.formeJuridiques)
 const  listeAR=getListeActiviteReglemente();
  const listeARS=listeAR.length?(listeAR.map(post=>{return(
    <Accordion expanded={expanded === 'panel'+post.idActivitedetail} onChange={handleChange('panel'+post.idActivitedetail)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel"+post.idActivitedetail+"bh-content"}
        id={"panel"+post.idActivitedetail+"bh-header"}
      >
    
        <Typography className={classes.heading}>{post.libelleActivitedetails} </Typography>
      
      </AccordionSummary>
      <AccordionDetails>
        
        
              <Card.Body>
                 
                          <Card className='cardStyle1'>
                              
                              <Card.Body className="text-justify strong">
                              <p>{post.detailActivitedetails}</p>
                              </Card.Body>
                          </Card>

                     
                     
                  
              </Card.Body>
              
      </AccordionDetails>
    </Accordion>
     )})):<p></p>;
   

  return (
  

    <div className={classes.root}>
        
        {listeARS}
    </div>
  );
}
