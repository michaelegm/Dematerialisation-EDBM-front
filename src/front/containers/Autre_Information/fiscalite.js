import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import NavBarAll from '../../components/header/navbarall'
import HeaderAutreInformartion from'./header_fiscalite'
import RegimeFiscale from "./liste_regime_fisc"
import {Container, Col, Row } from 'react-bootstrap'
import '../Creation_Entreprise/Formalite_Creation/formalite_creation.css'




class CreationEntreprise extends Component{
    render(){
        return (
             <div>
                <NavBarAll/>
                <HeaderAutreInformartion/>
                <Container fluid className='px-3 py-5 mr-3 my-5' >
                    <div align="center">
                         <h3 className="h3">Fiscalité et obligations des entreprises</h3>
                    </div>
                    <RegimeFiscale/>
                    
                </Container>
                

               <Footer/>
             </div>
        )
    }
}
export default CreationEntreprise
