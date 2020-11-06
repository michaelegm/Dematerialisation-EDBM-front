import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import NavBarAll from '../../components/header/navbarall'
import HeaderCreationEntreprise from'./header'
import {Container, Col, Row } from 'react-bootstrap'
import dossier from '../../../images/outils/dossier.png'
import activite from '../../../images/outils/activite.png'
import droit from '../../../images/outils/home-price.png'
import {Link} from "react-router-dom";

class Outils extends Component{
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderCreationEntreprise/>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Constituez votre dossier</h1>

                            <p className="description paragraphe-information">
                            Selon votre projet de création d’entreprise, cet outil vous aide à identifier les documents justificatifs que vous aurez à joindre conformément à votre situation.
                            </p>
                            <div align='right'><i><a href="/definir_projet">En savoir plus { '>'}</a></i></div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={dossier} alt="mage" className='img-fluid w-100'/>
                            </div>
                    </Col>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Simulez vos droits</h1>

                            <p className="description paragraphe-information">
                             Selon la forme de société et l'activité principale choisie, les frais peuvent être différents pour l’immatriculation de l’entreprise. Cet outil vous permet de simuler précisément le détail des montants à payer.
                            </p>
                            <div align='right'><i><Link to="/formalite_creation">En savoir plus{ ' >'}</Link></i></div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={droit} alt="mage" className='img-fluid w-100'/>
                            </div>
                    </Col>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Définissez votre activité principale</h1>

                            <p className="description paragraphe-information">
                             Pour toute entreprise, il est essentiel de connaître l'activité qui générera le plus de revenus : l’activité principale. Celle- ci doit être mentionnée clairement dans l'objet social en cas de création de société commerciale.
                            </p>
                            <div align='right'><i><Link to="/formalite_creation">En savoir plus{ ' >'}</Link></i></div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={activite} alt="mage" className='img-fluid w-100'/>
                        </div>
                    </Col>
                    </Row>

                </Container>
                

               <Footer/>
             </div>
        )
    }
}
export default Outils
