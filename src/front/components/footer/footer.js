import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logoedbm from '../../../images/logoedbm.png'
import facebook from '../../../images/facebook.svg'
import website from '../../../images/website.svg'
import navbarhome from '../../componentscss/navbarhome.css'
import footer from '../../componentscss/footer.css'
import { Navbar, Nav,Form,FormControl,Button, Col, Row, Container } from 'react-bootstrap'
import '../../componentscss/footer.css'
import { FaFacebookF, FaDribbble } from 'react-icons/fa';

class Footer extends Component{
    render(){
        return (
            <footer>
            <Container className="footer    " fluid>
                {/*<Row>*/}
                {/*    <Col xs={12}  className='d-flex'>*/}
                {/*        <div className='text-center text-md-left w-100 d-flex'>*/}
                {/*        <Link to='/' className='d-flex w-100 justify-content-center  align-content-center align-items-center'><img src={logoedbm} alt="logoedbm" className="img-logo-header-home"/></Link>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row>
                    <Col xs={12} md={6} lg={3} >
                        <div className='text-center text-md-left'>
                            <h6 className="description-card-img">FAQ</h6>


                            <ul>
                                <li><Nav.Link href="/faq" className="linktext">Avant de créer une entreprise  </Nav.Link></li>
                                <li><Nav.Link href="/faq#3" className="linktext">Rédiger les statuts</Nav.Link></li>
                                <li><Nav.Link href="/faq#2" className="linktext">Choisir une forme juridique</Nav.Link></li>
                                <li><Nav.Link href="/faq#4" className="linktext">La procédure de création</Nav.Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} >
                        <div className='text-center text-md-left'>
                            <h6>INFORMATION</h6>
                            <ul>
                                <li><Nav.Link href="/formalite_creation#forme_juridique" className="linktext">Formes Juridique</Nav.Link></li>
                                <li><Link to="/fiscalite" className="linktext">Regime Fiscalité</Link></li>
                                <li><Nav.Link href="/definir_projet" className="linktext">Guide de Création</Nav.Link></li>
                                <li><Nav.Link href="/formalite_creation#transmettre" className="linktext">Processus Immatriculation</Nav.Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} >
                        <div className='text-center text-md-left'>
                            <h6>Conditions</h6>
                            <ul>
                                <li>  <Nav.Link href="/cgu" className="linktext menuLinks">CGU</Nav.Link></li>
                                <li>  <Nav.Link href="/mention_legal" className="linktext menuLinks">Mentions légales</Nav.Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} >
                        <div className='text-center text-md-left'>
                            <h6 style={{marginTop:2}}>NOUS SUIVRE</h6>
                            <div className="social">
                                <a href="https://www.facebook.com/Edbm.mg" target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a href="https://edbm.mg" style={{marginLeft:9}} target="_blank">
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="Copyright text-center">
                Copyright © 2020 EBDM Economic Development Board of Madagascar - Tous droits réservés
                </Row>
            </Container>
            </footer>
        )
    }
}
export default Footer
