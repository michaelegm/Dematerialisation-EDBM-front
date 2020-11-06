import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import NavBarAll from '../../components/header/navbarall'
import HeaderAutreInformartion from'./header'
import {Container, Col, Row } from 'react-bootstrap'
import autre from '../../../images/autre.png'

import {Link} from "react-router-dom";

class CreationEntreprise extends Component{
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderAutreInformartion/>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <Row className='ContentHome pb-5'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className=' texteHome'>
                            <h1 className="centraliser">Définir son projet de société</h1>

                            <p className="description paragraphe-information">
                                Les entreprises sont des acteurs à part entière de la vie économique et sociale du pays. En effet, leur contribution est un facteur clé pour la croissance économique. Elles peuvent aussi agir pour l’amélioration de certaines problématiques sociales et environnementales. 
                                Cette rubrique a pour objectif de présenter les participations de base auxquelles les entreprises doivent se conformer dans ce cadre.

                            </p>
                            <br></br>
                            <div align='left'>
                                <i><Link to="/fiscalite">{ '>'}La fiscalité et autres obligations des entreprises </Link></i><br></br>
                                <i><Link to="/activite_reglemente">{ '>'}Les activités réglementées </Link></i><br></br>
                                <i><Link to="/entite">{ '>'}Les entités administratives </Link></i>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center align-content-center justify-content-center'>
                        <div className="w-100">
                                <img src={autre} alt="image" className='img-fluid w-100'/>
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
