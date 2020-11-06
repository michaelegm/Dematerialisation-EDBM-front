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
import './statut.css'
import statut from '../../../../images/statut.png'
import Example_Objet_Social from './example_objet_social'
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

export default function Statut() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  
    useEffect(() => {
        
       
    }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };
  
   

  return (
    <div className={classes.root}>
         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} expanded="true">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel1bh-content"}
        id={"panel1bh-header"}
      >
    
        <Typography className={classes.heading}>Qu’est ce que les statuts?</Typography>
      
      </AccordionSummary>
      <AccordionDetails>
        
        
              <Card.Body>
                  <Row noGutters={true}>
                      <Col xs={12} md={4} className="cardStyleWrapper ">
                          <Card className='cardStyle1'>
                              
                              <Card.Body className="text-justify strong">
                             <p> Les statuts est un document permettant de définir précisément les obligations et les droits des associés ainsi que les caractéristiques de base de la société. Les statuts peuvent être complété par un pacte d’associés.</p>
                              </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={12} md={4} className="cardStyleWrapper">

                          <Card className='cardStyle1'>
                              
                              <Card.Body className="text-justify">
                            
                              <p>Les statuts ne concernent que les personnes morales. Il n'est pas besoin de statuts pour une entreprise individuelle. Les identités des associés sont détaillées avec mention  du représentant  pour une personne morale.</p>
                              </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={12} md={4} className="cardStyleWrapper">

                          <Card className='cardStyle1'>
                           
                              <Card.Body className="text-justify">
                             <p>Les statuts d’une société doivent préciser : la forme juridique, la dénomination sociale, l'objet social, les apports des associés et leurs types, le  capital social avec le nombre et la valeur des parts sociaux, le siège, la durée d'existence, les modalités de fonctionnement.</p> 
                              </Card.Body>
                          </Card>


                      </Col>
                  </Row>
              </Card.Body>
              
      </AccordionDetails>
    </Accordion>
    
    </div>
  );
}
