import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import frais_constitution from '../../../../images/frais_constitution.PNG'
import frais_creation from '../../../../images/frais_creation.PNG'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FraisConstitution(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Les frais de constitution de dossier</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div align="center">
            <img src={frais_constitution} alt="frais" className={props.className}></img>
            </div>
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Les frais de création de dossier</Typography>
        </AccordionSummary>
        <AccordionDetails className="center_content">
        <div align="center">
            <img src={frais_creation} alt="frais" className={props.className}></img>
            </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
