import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import NavBarAll from '../../components/header/navbarall'
import HeaderCreationEntreprise from'./header'
import {Container, Col, Row } from 'react-bootstrap'
import ntic from '../../../images/demarches-creation-entreprise.png'
import step from '../../../images/step_by_step.jpg'
import {Link} from "react-router-dom";

class CreationEntreprise extends Component{
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderCreationEntreprise/>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Définir son projet </h1>

                            <p className="description paragraphe-information">
                            Avant d’entamer toutes démarches, il est important pour chaque entrepreneur de connaître les règles concernant le développement d’activités dans un cadre légal. La maîtrise du projet et de ses perspectives de développement est aussi une condition incontournable pour prendre les bonnes décisions concernant la future entreprise.
                            </p>
                            <div align='right'><i><a href="/definir_projet">En savoir plus { '>'}</a></i></div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={ntic} alt="mage" className='img-fluid w-100'/>
                            </div>
                    </Col>
                    </Row>
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Les formalités de création</h1>

                            <p className="description paragraphe-information">
                            Une fois que le projet  est bien construit et que la décision est prise de créer une entreprise, découvrez quelles sont les étapes pour arriver à la constitution proprement dite. Les formalités sont dépendantes des caractéristiques finales du projet, notamment de la réglementation en vigueur pour certains cas.
                            </p>
                            <div align='right'><Link to="/formalite_creation">En savoir plus{ ' >'}</Link></div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={step} alt="mage" className='img-fluid w-100'/>
                            </div>
                    </Col>
                    </Row>

                </Container>
                

               <Footer/>
             </div>
        )
    }
}
export default CreationEntreprise
