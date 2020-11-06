import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {  Container, Col, Row } from 'react-bootstrap'
import MediaCard from './card'
import infoimage from '../../../../images/entrepreneur.jpg'
import transparence from '../../../../images/formalise.png'
import outils from '../../../../images/contrat.jpg'
import Avantage from './avantage'
import './tab_formalisation.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "transparent",
  },
}));

export default function TabFormatlisation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Les notions de bases"  {...a11yProps(0)} />
          <Tab label="Les avantages de la formalisation" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="tab_formalisation">
      <Container fluid className='px-3 py-5  ' >
                        <Row className='blockHome'>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                               < MediaCard image={infoimage} titre=" Entrepreneur" contenue="Une personne ayant une activité ou portant un projet d’activité dans lesquels elle s’implique fortement et pour lesquels elle a l’objectif de créer une entreprise. Le projet ou l’activité peut concerner tous les secteurs et avoir toute taille. Ainsi, un vendeur de rue ou  un freelance occasionnel est tout aussi entrepreneur que celui qui projette une industrie de transformation ou une chaîne de restaurant."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={outils} titre=" Société de fait" contenue="Un contrat, écrit ou non, entre 2 à plusieurs personnes pour exprimer leur volonté de mettre en commun des biens (financiers, matériels ou compétences) dans un projet afin d’en partager les bénéfices ou de profiter de l’économie qui en résulte. La société de fait définit toute entreprise pour laquelle la ou les personnes associée(s) n’ont effectué aucune démarche de formalisation."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={transparence} titre=" Société formalisée" contenue="La formalisation consiste à déclarer à l’administration la constitution d’une société qui aura alors des identifications fiscales et statistiques la différenciant des autres sociétés de même activité. Dans la majorité des cas, une société formalisée dispose d’une identité juridique distincte de celle des personnes qui la constituent. Elle obéit ainsi à un cadre légal spécifique."/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <h2 className="avantage">Les avantages de la formalisation</h2>
      <Avantage/>
      </TabPanel>
    
    </div>
  );
}
