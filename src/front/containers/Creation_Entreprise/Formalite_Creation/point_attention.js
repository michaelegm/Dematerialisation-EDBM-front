import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, Row, Col }from "react-bootstrap"
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

export default function PointAttention() {
  
  
  
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

  
   
    
   

  return (
  

    <div className={classes.root}>
        
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} expanded="true">
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={"panel1bh-content"}
            id={"panel1bh-header"}
        >
        
            <Typography className={classes.heading}>Points d’attention </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
            
            
                <Card.Body>
                    <Row noGutters={true}>
                        <Col xs={12} md={4} className="cardStyleWrapper ">
                            <Card className='cardStyle1'>
                                
                                <Card.Body className="text-justify strong">
                                <strong>Cohérence des informations</strong>
                                <p>
                                La validité du dossier est conditionnée par la cohérence des informations fournies. Par exemple : 
                                <br></br>- Les signataires (associés et gérants) doivent être ceux mentionnés dans les documents. 
                                <br></br>- Les autorités de délivrance des justificatifs doivent correspondre aux localités mentionnées dans les adresses.

                                </p>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xs={12} md={4} className="cardStyleWrapper">

                            <Card className='cardStyle1'>
                                
                                <Card.Body className="text-justify">
                                
                                <strong>Durée de validité</strong>
                                <p>Les documents dont la date de validité sont dépassés ne sont pas acceptés lors du dépôt de création. Cette information doit être contrôlée au préalable :
                                <br></br>- Validité 1 mois : déclaration de perte
                                <br></br> - Validité 3 mois : justificatifs de résidence/existence, extrait d’acte
                                <br></br>- Validité 1 an : carte fiscale, acte de vente, licences</p>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xs={12} md={4} className="cardStyleWrapper">

                            <Card className='cardStyle1'>
                            
                                <Card.Body className="text-justify">
                                    <strong>Exhaustivité du dossier</strong>
                                    <p>La création de société nécessite une liste de documents justificatifs relative à la situation spécifique du projet. L’absence d’un document peut retarder le traitement de votre dossier. Vous pouvez déterminer cette liste en utilisant l’outil “Constituer votre dossier”</p>

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
