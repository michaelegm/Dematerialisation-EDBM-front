import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, Row, Col }from "react-bootstrap"
import * as config from '../../../index'
import ReactHtmlParser from 'react-html-parser';
import './forme_juridique.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '40.33%',
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
export default function RegimeFiscale() {
  function getListeRegimeFiscaux(){
    const state=config.store.getState()
    return state.information.regimeFiscaux;

  }
  
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
    useEffect(() => {
        
        //getListeFormeJuridique();
    }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //
  //console.log(state.information.formeJuridiques)
 const  listeRegimeFiscaux=getListeRegimeFiscaux();
  const listeFJ=listeFormeJuridique.length?(listeRegimeFiscaux.map(post=>{return(
    <Accordion expanded={expanded === 'panel'+post.idRF} onChange={handleChange('panel'+post.idRF)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel"+post.idRF+"bh-content"}
        id={"panel"+post.idRF+"bh-header"}
      >
    
        <Typography className={classes.heading}>{post.libelleRegimeFiscal} </Typography>
      </AccordionSummary>
      <AccordionDetails>
        
        
              <Card.Body>
                  <Row noGutters={true}>
                      <Col xs={12} md={4} className="cardStyleWrapper ">
                          <Card className='cardStyle1'>
                          <Card.Header>
                                          <h3>Caractéristiques</h3>
                            </Card.Header>
                              <Card.Body className="text-justify strong">
                              {ReactHtmlParser (post.caracteristique)}
                              </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={12} md={4} className="cardStyleWrapper">

                          <Card className='cardStyle1'>
                          <Card.Header>
                                          <h3>Calculs</h3>
                            </Card.Header>
                              <Card.Body className="text-justify">
                            
                              {ReactHtmlParser (post.casutilisation)}
                              </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={12} md={4} className="cardStyleWrapper">

                          <Card className='cardStyle1'>
                          <Card.Header>
                                          <h3>Déclaration</h3>
                            </Card.Header>
                              <Card.Body className="text-justify">
                              {ReactHtmlParser (post.responsabilite)}
                              </Card.Body>
                          </Card>


                      </Col>
                  </Row>
              </Card.Body>
              
      </AccordionDetails>
    </Accordion>
     )})):<p></p>;
   

  return (
  

    <div className={classes.root}>
        
        {listeFJ}
    </div>
  );
}
