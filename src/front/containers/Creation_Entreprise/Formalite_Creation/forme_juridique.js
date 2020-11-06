import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, Row, Col }from "react-bootstrap"
import * as config from '../../../../index'
import ReactHtmlParser from 'react-html-parser';
import './forme_juridique.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
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
export default function FormeJuridique() {
  function getListeFormeJuridique(){
    const state=config.store.getState()
    return state.information.formeJuridiques;

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
 const  listeFormeJuridique=getListeFormeJuridique();
  const listeFJ=listeFormeJuridique.length?(listeFormeJuridique.map(post=>{if(post.codeFormeJuridique!='SARLU'&& post.codeFormeJuridique!='SAU'){ return(
    <Accordion expanded={expanded === 'panel'+post.idFJ} onChange={handleChange('panel'+post.idFJ)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel"+post.idFJ+"bh-content"}
        id={"panel"+post.idFJ+"bh-header"}
      >
    
        <Typography className={classes.heading}>{post.libelleFormeJuridique} </Typography>
        <Typography className={classes.secondaryHeading}> {post.description}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        
        
              <Card.Body>
                  <Row noGutters={true}>
                      <Col xs={12} md={4} className="cardStyleWrapper ">
                          <Card className='cardStyle1'>
                              
                              <Card.Body className="text-justify strong">
                              {ReactHtmlParser (post.caracteristique)}
                              </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={12} md={4} className="cardStyleWrapper">

                          <Card className='cardStyle1'>
                              
                              <Card.Body className="text-justify">
                            
                              {ReactHtmlParser (post.casUtilisation)}
                              </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={12} md={4} className="cardStyleWrapper">

                          <Card className='cardStyle1'>
                           
                              <Card.Body className="text-justify">
                              {ReactHtmlParser (post.responsabilite)}
                              </Card.Body>
                          </Card>


                      </Col>
                  </Row>
              </Card.Body>
              
      </AccordionDetails>
    </Accordion>
     )}})):<p></p>;
   

  return (
  

    <div className={classes.root}>
        
        {listeFJ}
    </div>
  );
}
