import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import NavBarAll from '../../components/header/navbarall'
import HeaderAutreInformartion from'./header'
import {Container, Col, Row } from 'react-bootstrap'
import dgi from '../../../images/entite/logoTransparent.png'
import instat from '../../../images/entite/Instat_logo.png'
import rcs from '../../../images/entite/logoMinjus.png'
import edbm from '../../../images/entite/logo-blanc.png'

import Avatar from './avatar'
import './entite.css'

class Entite extends Component{
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderAutreInformartion/>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <Row className="ContentHome pg-5 titre_entite">
                        <Avatar image={dgi}/>
                        <h1 className="centraliser titre_entite">Centre Fiscal</h1>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                            Le centre fiscal dépend de la Direction Générale des Impôts du Ministère en charge des fInances. C’est l’entité en charge de la fiscalité des sociétés notamment pour la collecte des impôts.
                            En effet, le paiement des impôts est la contribution de tout un chacun  pour le financement des services publics et des programmes de développement.

                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                           

                            <p className="description paragraphe-information">
                            <strong>Avant d’exercer une activité quelconque, l’obtention du NIF est obligatoire.</strong><br></br>
                            La création des sociétés doit, en principe, passer par les Centres Fiscaux. Les pièces justificatives pour la création de société sont définies dans le Code Général des Impôts, ce qui fait que le centre fiscal est le premier à  approcher pour toute déclaration.

                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div >
                            <p className="description paragraphe-information">
                               <strong>Les bureaux de la DGI</strong> <br></br>
                                Centre Fiscal :  89
                                Service Régionale des Entreprises : 9  
                                Direction Régionale des Impôts : 14
                                Direction des Grandes Entreprises: 1


                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                   
                    </Row>
                    <Row className="ContentHome pg-5 titre_entite">
                    <Avatar image={instat}/><h1 className="centraliser titre_entite">L’institut Statistique (INSTAT)</h1>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                            Pour les sociétés, l’Institut Statistique suit  le mouvement des établissements ainsi que les statistiques sur les activités pour les entreprises formalisées à Madagascar. Dans ce cadre, il est aussi le dépositaire et le gestionnaire de la nomenclature des activités officielles de Madagascar.
                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                           

                            <p className="description paragraphe-information">
                                <strong>La carte statistique permet l'identification des établissements créés et leurs activités.</strong><br></br>
                                Elle est obtenue uniquement avec la preuve de la déclaration d'activité dans un centre fiscal (bordereau de versement Impôt). Toutes modifications des sociétés ou cessations d’activités doivent être obligatoirement déclarer à l’INSTAT pour garantir la fiabilité des statistiques nationales.

                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                                <strong>Les bureaux de l’INSTAT : </strong> <br></br>

                                1 bureau central à Antananarivo Anosy.
                                22 bureaux INSTAT dans les régions.




                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                   
                    </Row>
                    <Row className="ContentHome pg-5 titre_entite">
                    <Avatar image={rcs}/><h1 className="centraliser titre_entite">Le Registre du Commerce et des Sociétés (RCS)</h1>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                            Le Registre du Commerce et des Sociétés (RCS) est un registre tenu au sein de chaque Tribunal de Première Instance (TPI), destiné à recueillir et à publier des informations juridiquement importantes relatives aux commerçants et aux personnes morales assujetties à l'immatriculation. C'est un outil à la transparence des Entreprises, le RCS est accessible à tous.
                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                           

                            <p className="description paragraphe-information">
                              <strong> L’inscription au RCS permet de se voir attribuer la personnalité morale.</strong>
                                Toute entreprise exerçant une activité commerciale doit obligatoirement s’inscrire au RCS auprès du TPI référent (en fonction du siège social). Cette inscription est à réaliser au moment de la création de la société.

                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                                <strong> Les Tribunaux de Premières Instance :</strong><br></br>

                                44 TPI dans tout Madagascar.



                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                   
                    </Row>
                    <Row className="ContentHome pg-5 titre_entite">
                    <Avatar image={edbm}/><h1 className="centraliser titre_entite">Economic Development Board Of Madagascar (EDBM)</h1>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                            L’EDBM est l’expression institutionnelle de la volonté du Gouvernement de booster la croissance économique et de créer des emplois à travers la mise en place et le développement de projets maximisant les bénéfices de Madagascar et lesquels sont portés aussi bien par les étrangers que les nationaux.
                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                           

                            <p className="description paragraphe-information">
                                <strong>Le Guichet Unique de l’EDBM rassemble toutes les entités concernées par les démarches des sociétés.</strong><br></br> 
                                Ainsi les procédures d'immatriculation, de modification et de dissolution des sociétés, ou encore l’obtention de vos permis-licences-autorisations et visas peuvent être réalisés plus simplement. Ceci favorise aussi la rapidité du traitement des dossiers.

                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <p className="description paragraphe-information">
                                <strong>Les Guichets Uniques EDBM :</strong><br></br>

                                Antananarivo, Antsirabe, Toamasina,  Nosy Be, Antsiranana, Toliary.

                                Réception des dossiers, du lundi au vendredi : 8h30 à 12h00.
                                Délivrance, du lundi au vendredi : 13h30 à 16h00.

                            </p>
                            <br></br>
                            
                        </div>
                    </Col>
                   
                    </Row>
                    
                </Container>
                

               <Footer/>
             </div>
        )
    }
}
export default Entite
