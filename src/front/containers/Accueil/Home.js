import React,{Component} from "react";
import FAQ from '../../../images/obligations.png'
import info from '../../../images/projet_entrerpise.png'
import help from '../../../images/formalites.png'
import ntic from '../../../images/slides/PHOTOS/accueil.jpg'
import './Home.css';
import NavBarHome from '../../components/home/navbarhome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav,  Container, Col, Row } from 'react-bootstrap'
import Footer from '../../components/footer/footer';
import CarouselHome from "../../components/homecarousel/carousel";
import NavBarAll from '../../components/header/navbarall'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MediaCard from "../components/cardHome"
import infoimage from '../../../images/infovert.jpg'
import transparence from '../../../images/transparence.jpg'
import outils from '../../../images/outilsselect.jpg'

class Home extends Component {
    render(){

        return (
            <div className="homepage">
                <NavBarAll className="navbarhome"/>
                <CarouselHome/>
                <main className="wrapper">
                    <Container fluid id="menu_commencer" className='px-3 py-5' >
                        <Row>

                            <Col xs={12} md={4}>
                                <Nav className="m-3 ">
                                    <Link to="/definir_projet" className='d-flex  w-100 text_btn'>
                                        <Card className='w-100 align-content-center justify-content-center infoHome appHead1' >
                                            <Card.Header className="AppImg  text-center p-3">
                                                <Card.Img variant="top" src={info} style={{width:'80px',height:'auto',alignSelf:'center'}} />
                                            </Card.Header>
                                            <Card.Body className="App text-center mt-3">
                                                <h5 className="text_btn">Définir mon projet d'entreprise</h5>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Nav>
                            </Col>
                            <Col xs={12} md={4}>
                                <Nav className="m-3 ">
                                <Link to="/formalite_creation" className='d-flex  w-100'>
                                    <Card className='w-100 align-content-center justify-content-center infoHome appHead2' >
                                        <Card.Header className="AppImg  text-center p-3">
                                            <Card.Img variant="top" src={help} style={{width:'80px',height:'auto',alignSelf:'center'}} />
                                        </Card.Header>
                                        <Card.Body className="App text-center mt-3">
                                            <h5 className="text_btn">Les formalités de création</h5>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </Nav>
                            </Col>
                            <Col xs={12} md={4}>
                                <Nav className="m-3 ">
                                    <Link to="/fiscalite" className='d-flex  w-100'>
                                        <Card className='w-100 align-content-center justify-content-center infoHome appHead3' >
                                            <Card.Header className="AppImg  text-center p-3">
                                            <Card.Img  src={FAQ} style={{width:'80px',height:'auto',alignSelf:'center'}} />
                                            </Card.Header>
                                            <Card.Body className="App text-center mt-3">
                                                 <h5 className="text_btn">Les obligations des sociétés </h5>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Nav>
                            </Col>
                    </Row>
                </Container>
                    <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Centraliser toutes les informations sur les formalités</h1>

                            <p className="description paragraphe-information">
                            Avec le service en ligne I-orina.mg, l'EDBM met en place une plateforme centralisant toutes les informations relatives à la création d'entreprise, aux modifications qui peuvent s'ensuivre et à la dissolution. 
                            L'objectif est de fournir aux entrepreneurs et investisseurs des renseignements à jour pour garantir un accompagnement de qualité dès les premiers pas de l'entreprise. 
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={ntic} alt="mage" className='img-fluid w-100'/>
                            </div>
                    </Col>
                    </Row>

                </Container>

                    <Container fluid className='px-3 py-5  ' >
                        <Row className='blockHome'>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                               < MediaCard image={infoimage} titre=" Des informations complètes" contenue="Des contenus facilement accessibles pour découvrir les règles de création de société et les différentes démarches pour les entreprises déjà constituées."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={outils} titre=" Des outils pratiques" contenue="En complément des informations, des outils sont mis à disposition pour apporter un accompagnement sur mesure à ceux qui sont prêts à se lancer dans les formalités."/>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="pb-5">
                                < MediaCard image={transparence} titre=" Une garantie de transparence" contenue="Des procédures claires et les rôles de chaque entité expliqués pour que les entrepreneurs et investisseurs puissent effectuer leur démarches en toute sérénité."/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer />
            </div>

        )
  }

}
const mapStateToProps= state=>{
    return{
        posts:state.posts
    }
};

export default connect(mapStateToProps)(Home);
