import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MediaCard from './card'
import {  Container, Col, Row } from 'react-bootstrap'
import forme_juridique from '../../../../images/forme_juridique.jpg'
import personne from '../../../../images/peronne_p_m.jpg'
import patrimoine from '../../../../images/gestion_patrimoine.jpeg'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Example_Objet_Social() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Pour les artisans" {...a11yProps(0)} />
        <Tab label="Pour les commerçants" {...a11yProps(1)} />
        <Tab label="Pour les entreprises de services" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
       
                            <Row >
                                <Col xs={12} md={4}>
                                    <div className="pb-5">
                                < MediaCard  titre=" Confection vente/achat " contenue="La confection, l'achat, la vente en boutique ou en ligne, l’importation, l’exportation, de vêtements de prêt-à-porter, d’accessoires de mode, de maroquinerie, de matières premières, de textiles, de cuir, d’accessoires d’assemblage et toute autre matière utile et nécessaire à la confection des créations."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="pb-5">
                                    < MediaCard  titre=" Coiffure " contenue="Tout type de soins pour la beauté, pour la femme, l’homme et l’enfant, la coiffure, le maquillage, les ongles, les soins du visage et du corps. L’achat vente de tous types de produits relevant de cette activité."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="pb-5">
                                    < MediaCard titre=" Boulangerie" contenue="La fabrication à caractère artisanal et la vente de produits de boulangerie"/>

                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={12} md={4}>
                                    <div className="pb-5">
                                < MediaCard  titre=" Garagiste  " contenue="Toute activité de négoce, d’achat, de vente, de location, de réparation et d’entretien de tous véhicules automobiles, commerce de détail de tous accessoires, équipements et pièces détachées se rapportant à l'automobile, de tous carburants, lubrifiants et produits d'entretien."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="pb-5">
                                    < MediaCard  titre=" Maçonnerie " contenue="Toute activité de maçonnerie, de carrelage, de peinture, de plomberie, d’électricité, ainsi que tous travaux du bâtiment. Pose de faux plafond, cloisons, travaux de vitrerie, ravalement intérieur et extérieur."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="pb-5">
                                    < MediaCard titre=" Artisanat " contenue="Toute réalisation d’activités, de confection de manière individuelle et artisanale, la création d’objet divers, la transformation d’objet par une réalisation manuelle, ou par l’intermédiaire d’instruments traditionnels."/>

                                    </div>
                                </Col>
                            </Row>
                            
      </TabPanel>
      <TabPanel value={value} index={1}>
                        <Row >
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                < MediaCard  titre=" Epicerie " contenue="Commerce de détail d'alimentation générale et produits non alimentaires"/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard  titre=" Fast-food  " contenue="La fourniture au comptoir d'aliments et de boissons à consommer sur place ou à emporter, présentés dans des conditionnements jetables. La vente peut être dans une salle sur place ou dans des équipements mobiles."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre=" Boutique de vêtements " contenue="Le commerce de détail de tissus et de textiles en magasin spécialisé. L’achat et vente, importation et exportation de toutes marchandises de type textile ou accessoires d’habillement et de mode, et activités connexes"/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre=" Magasin d'optique " contenue="Vente et montages de verres correcteurs, vente de lunettes, vente de lentilles de contact, vente de produits d'entretien, vente d'articles divers."/>

                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                < MediaCard  titre=" Intermédiaire de l'automobile  " contenue="Le commerce de détail de véhicules automobiles neufs ou d'occasion pour le transport des personnes, y compris les véhicules spéciaux tels qu'ambulances, minibus, etc."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard  titre=" Quincaillerie/bricolage   " contenue="Achat et  vente de tous  produits, de matériel de bricolage, d’outillage, jardinage, de produits d'entretiens."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre="  Import-export  " contenue="Toute activité d’achat et de vente, d’importation et d’exportation de toutes marchandises alimentaires ou non alimentaires. La commercialisation et la distribution de ces marchandises, et toute activité connexe."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre=" BTP " contenue="Tout type de travaux de BTP, de construction, de rénovation tout corps d’État en entreprise générale, la réalisation d’études techniques, le conseil, l’analyse des essais, la gestion de projets et d’affaires"/>

                                    </div>
                                </Col>
                            </Row>

      </TabPanel>
      <TabPanel value={value} index={2}>
                        <Row >
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                < MediaCard  titre=" Activités immobilières  " contenue="L’acquisition, l’administration, la gestion par location ou autrement de tous immeubles et biens immobiliers, la vente de tous immeubles et biens immobiliers."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard  titre="  Agence de communication    " contenue="Agence de communication tous supports web Print événementiel, conseil en relations publiques et communication, activités Pré-Presse, gestion d'événements, conseils en stratégie d'entreprise, programmation informatique"/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre="  Conseil et gestion   " contenue="Toute activité d’aide et d’accompagnements, de service, de conseils aux particuliers et aux entreprises, d’aide à la rédaction et la fourniture de documents administratifs. L’aide aux particuliers et aux entreprises pour leurs développements, la transformation de leur d’activité."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                < MediaCard  titre=" Société de graphisme :   " contenue="La création d’objets de communication visuelle, notamment la création des éléments graphiques de sites internet ou d'applications mobiles"/>

                                    </div>
                                </Col>
                            </Row>
                            <Row >
                              
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard  titre="  Programmation informatique:    " contenue="Création et exploitation de sites internet, conseil en système et logiciels informatiques, portail internet, programmation informatique"/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre="  Site e-commerce   " contenue="Toutes opérations pouvant se rattacher directement ou indirectement à l'achat et la vente au détail sur internet de tous articles et produits marchands non réglementés sous toutes ses formes d'opérations et tous services pouvant s'y rattacher."/>

                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className="pb-5">
                                    < MediaCard titre=" Audiovisuel  " contenue="La production, la réalisation et la fourniture de prestations audiovisuelles, de rédaction d’articles, vidéo sonore ou muette pour tout support télévision, internet, dvd, presse."/>

                                    </div>
                                </Col>
                            </Row>
      </TabPanel>
      
    </div>
  );
}
