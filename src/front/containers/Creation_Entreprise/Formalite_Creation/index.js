import React, {Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../components/footer/footer';
import NavBarAll from '../../../components/header/navbarall';
import HeaderFormalite from'./header';
import {Container, Col, Row,Image } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import './formalite_creation.css'
import FormeJurique from './forme_juridique'
import Statut from "./statut"
import statut from '../../../../images/statut.png'
import Example_Objet_Social from './example_objet_social'
import PointAttention from './point_attention'
import FraisConstitution from './frais_de_constitution'
import arrow from '../../../../images/arrow.png';
import caracteristiqueFJ from '../../../../images/caracteristiqueFJ.png'
import transmettre from '../../../../images/transmettre.PNG'
import document_list from '../../../../images/required_document.png'

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

class FormaliteCreation extends Component{
    onComponentDidMount(){
        console.log('hahah')
    }
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderFormalite/>
                <div className="notion">
                <div align="left" id="forme_juridique">
                    <h1 className=" example centraliser">1. Choisir la forme juridique (Selon votre projet) </h1>
                </div>
                           
                    <div align="center" className="">
                        <h3 className=" h3">Les caractéristiques des formes juridiques</h3>
                    </div>
                    <div align="center" >
                        <img src={caracteristiqueFJ} alt="caracteristique forme Juridique"/>
                    </div>
                    <Container fluid className='px-3 py-5 mr-3 my-5' >
                        <FormeJurique/>
                    </Container>
                    
                </div>
                <div >
                <ScrollableAnchor  className='p-0'   id="statut" >
                <div align="left" >
                        <h1 className="example centraliser" id="">2. Rédiger les statuts </h1>
                </div>
                </ScrollableAnchor>
                <div align="center" className="">
                    <h3 className=" h3">Rédaction des statuts de société</h3>
                    
                </div>
                <div align="center" >
                <img src={statut} alt="statut"/>
                    
                </div>
               
                    <div align="center" className="" >
                        <h3 className=" h3">Exemples d’objet social d’entreprise </h3>
                    </div>
                    <Example_Objet_Social/>
                </div>
                <div >
                <div align="left" className="example" >
                            <h1 className="centraliser example" id="dossier">3. Constituer le dossier de création </h1>
                </div >
                    <Container fluid className='px-3 py-5 mr-3 my-5' >
                    
                    <h3 >Obtenez la liste exhaustive spécifique à votre projet avec  l’outil “Constituer votre dossier”.</h3>
                    <img src={document_list} alt="list of document" className="document_list"></img>
                    </Container>
                    <div align="center" className=" h3">
                        <h3 className=" h3">Listes des documents justificatifs de base</h3>
                    </div>
                    <Container fluid className='px-3 py-5 mr-3 my-5' >
                        <PointAttention/>
                    </Container>
                </div>
                <div >
                <div align="left" className="example">
                        <h1 className="centraliser example" id="frais">4. Déterminer les frais </h1>
                </div>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <FraisConstitution className="document_list"/>
                </Container>
                </div>
                <div >
                <div align="left" className="example" >
                        <h1 className="centraliser example" id="transmettre">5. Transmettre le dossier de création </h1>
                </div>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                
                    <div align="center" >
                        <img src={transmettre} alt="transmettre"></img>
                    </div>
                </Container>
                </div>

               <Footer/>
             </div>
        )
    }
}
export default FormaliteCreation
