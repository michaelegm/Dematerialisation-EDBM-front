import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Col, Row } from 'react-bootstrap'
import './avantage.css'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Avantage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Row>
          <Col>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              
                <Typography variant="h5" component="h2">
                <div align="center"><h3>SOCIETE DE FAIT</h3></div>
                </Typography>
                
                <Typography variant="body2" component="p" align="inline">
                    <li className="soc_fait">Apports et gains non explicites en cas de litiges</li>
                    <li className="soc_fait">Aucun financement possible à part les prêts personnels</li>
                    <li className="soc_fait">Impossibilité d’accéder à des contrats importants avec de grandes entreprises</li>
                    <li className="soc_fait">Impossibilité de participer aux marchés publics</li>
                    <li className="soc_fait"> Impossibilité de participer à des événements pour le développement de l’entreprise</li>
                    <li className="soc_fait">Favorisation des fraudes et de la concurrence déloyale</li>
                    <li className="soc_fait">Risque de sanctions importantes de l’Etat</li>
                    <li className="soc_fait">Frein à l’animation de la vie économique du pays </li>
                </Typography>
            </CardContent>
           
            </Card>
          </Col>
          <Col>
          <Card className={classes.root} variant="outlined">
            <CardContent>
            <Typography variant="h5" component="h2">
             <div align="center"><h3>SOCIETE FORMALISÉE</h3></div>
                </Typography>
                
                <Typography variant="body2" component="p" align="inline">
                    <li className="soc_formalise">Existence juridique officielle</li>
                    <li className="soc_formalise">Engagements et bénéfices clairs pour les personnes impliquées</li>
                    <li className="soc_formalise">Accès aux financements (prêts bancaires, investissements, fonds de garantie, etc.) </li>
                    <li className="soc_formalise">Accès aux appuis spécifiques aux entreprises (annuaires professionnels, formations, etc.)</li>
                    <li className="soc_formalise">Accès aux contrats de fournisseur ou distributeur de grandes sociétés</li>
                    <li className="soc_formalise">Participation aux appels d’offres public</li>
                    <li className="soc_formalise">Participation aux foires, salons et manifestations commerciales (nationaux et internationaux)</li>
                    <li className="soc_formalise">Protection contre la concurrence déloyale</li>
                    <li className="soc_formalise"> Contribution à l’économie active du pays.</li>
                </Typography>
            </CardContent>
          
            </Card>
          </Col>
    
    </Row>
  );
}
