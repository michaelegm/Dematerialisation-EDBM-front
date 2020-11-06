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
import infoimage from '../../../../images/secteur_activite.jpeg'
import transparence from '../../../../images/forme.jpg'
import outils from '../../../../images/competence.jpg'
import etude_marche from '../../../../images/etude_marche.jpg'
import business_plan from '../../../../images/business_plan.jpg'
import financement from '../../../../images/financement.jpg'
import forme_juridique from '../../../../images/forme_juridique.jpg'
import personne from '../../../../images/peronne_p_m.jpg'
import patrimoine from '../../../../images/gestion_patrimoine.jpeg'
import Avantage from './avantage'
import './tab_construire_projet.css'

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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabConstruireProjet() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Le projet : quelle activité? avec qui?"  {...a11yProps(0)} />
          <Tab label="Les ressources : quels besoins? " {...a11yProps(1)} />
          <Tab label="La forme d’entreprise : Personne physique ou morale" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
      <Container fluid className='px-3 py-5  ' >
                        <Row className='blockHome'>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                               < MediaCard image={infoimage} titre=" Quelle activité?" contenue="Pour votre projet, il faut définir en premier lieu en quoi consiste votre activité. S’agit-il de négoce (achat-vente), de fabrication de produits ou encore de prestations? Y-a-t-il des réglementations spécifiques qui y sont rattachées (besoin de licence ou d’autorisation)? Ceci vous permet de déterminer si vous en connaissez assez sur le secteur avant de vous lancer."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={outils} titre=" Quelles compétences?" contenue="Il faut être sûr de votre niveau d’expertise concernant l’activité choisie. Soit vous avez les formations ou connaissances acquises lors de précédentes expériences pour démarrer seul. Soit vous avez besoin des connaissances de base ou de compétences complémentaires et vous devez bien vous entourer : soit avec des associés, soit de futures embauches."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={transparence} titre=" Quels objectifs?" contenue="Pour définir au mieux votre projet, vos objectifs doivent être clairs. Souhaitez-vous vous assurer un revenu stable avec un minimum d’investissement? Avez-vous l’intention de vous développer à moyen/long terme? Misez- vous sur une croissance rapide moyennant des investissements conséquents? Vos objectifs définissent comment vous allez démarrer."/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Container fluid className='px-3 py-5  ' >
                        <Row className='blockHome'>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                               < MediaCard image={etude_marche} titre=" Etude de marché" contenue="L’étude de marché est une étape essentielle de la création d’entreprise. Il s’agit de collecter et d’analyser concernant le marché spécifique au projet : l’existence ou non de concurrents, la validation du produit par la clientèle cible, la viabilité de votre marché pour générer des bénéfices, les besoins en matières premières ou contacts clés selon l’activité. L’étude doit être valide sur le long terme afin de garantir la pérennité du projet."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={business_plan} titre=" Business Plan" contenue="Le business plan est un document qui présente votre projet dans les moindres détails : votre analyse du marché, vos stratégies de développement, vos besoins en financement, votre budget prévisionnel et vos perspectives de gains. Ce document est le moyen de valoriser votre projet afin d’attirer les attentions d’investisseurs ou acquérir des appuis financiers."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={financement} titre=" Financement" contenue="Une fois votre projet clairement défini, il faut étudier ce qu’il faudra financer. Le financement doit vous permettre de lancer votre entreprise et d’assurer vos besoins sur la période où vos revenus ne seront pas suffisants pour couvrir vos dépenses. Ainsi, il vous faut prévoir au minimum, vos frais d’immatriculation, l’achat de matériels ou produits de départs, les charges de fonctionnement."/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Container fluid className='px-3 py-5  ' >
                        <Row className='blockHome'>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                               < MediaCard image={personne} titre=" Personne physique/ Morale" contenue="Une personne physique est un individu ayant une identité civile. L’entreprise individuelle (personne physique) est ainsi indissociable de la personne qui l’a créée. Une personne morale est un groupement ayant une existence juridique, une société dont l’existence se dissocie des personnes qui la composent. "/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={forme_juridique} titre=" La forme juridique" contenue="La forme juridique d'une entreprise définit les règles de constitution qui lui sont applicables au regard de la loi comme les modalités de constitution (capital, durée,..), les rapports entre les associés et leurs obligations envers la société créée. L’entrepreneur peut choisir entre une entreprise individuelle ou un société."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={patrimoine} titre=" Gestion des patrimoines" contenue="Pour l’entreprise individuelle et les “société de personnes”, les patrimoines du ou des individus et de l’entreprise sont confondus. Dans ce cas, la responsabilité des créateurs est illimitée en cas de dettes de l’entreprise.  Les “sociétés de capitaux” distinguent le patrimoine de la société et celui du ou des associés. En cas d’échec, leur responsabilité  est limitée à  leurs apports."/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
      </TabPanel>
    

    </div>
  );
}
