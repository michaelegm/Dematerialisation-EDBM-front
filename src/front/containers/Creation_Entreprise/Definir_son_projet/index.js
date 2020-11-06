import React, {Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../components/footer/footer';
import NavBarAll from '../../../components/header/navbarall';
import HeaderCreationEntreprise from'./header';
import {Container, Col, Row,Image } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactHtmlParser from 'react-html-parser';
import TabFormatlisation from './tab_formalisation'
import TabConstruireProjet from './tab_construire_projet'
import './definir_projet.css'

import arrow from '../../../../images/arrow.png';


const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 800){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 800){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
            window.scrollTo({top: 1200, behavior: 'smooth', });
    };
    window.addEventListener('scroll', checkScrollTop)
    return (
        <div className="ScroolToTop scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}><Image src={arrow} rounded  className="RoundButton"/></div>
    );
}

class DefinirSonProjet extends Component{
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderCreationEntreprise/>
                <div className="notion">
                    <Container fluid className='px-3 py-5 mr-3 my-5' >
                        <Row className='ContentHome pb-5'>
                        
                            <div align="left">
                                <h1 className="centraliser">1. Faire le choix de la formalisation </h1>
                            </div>
                        </Row>
                        <TabFormatlisation/>

                    </Container>
                </div>
                <div >
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                <div align="left" >
                        <h1 className="centraliser">2. Construire son projet de création d’entreprise </h1>
                    </div>
                   <TabConstruireProjet/>
                </Container>
                </div>

               <Footer/>
             </div>
        )
    }
}
export default DefinirSonProjet
