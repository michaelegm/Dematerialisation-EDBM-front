import React,{Component} from "react";
import FAQ from '../../images/FAQ.svg'
import info from '../../images/info.png'
import help from '../../images/help.png'
import ntic from '../../images/ntic.jpg'
import './Accueil/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import Footer from '../components/footer/footer';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import NavBarAll from "../components/header/navbarall";


class InscriptionPage extends Component {
    render(){

        return (
            <div className="LoginRegistration">
                <NavBarAll/>
                <main className="wrapper d-flex justify-content-center">
                    <Form className='d-flex flex-1 justify-content-center  flex-column'>
                        <Form.Row className='mb-4'>
                            <Col xs="auto" md={6}>

                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Nom
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Nom</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup"  className=" col-6 "  placeholder="" />
                                </InputGroup>
                            </Col>
                            <Col xs="auto" md={6}>
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Mot de passse
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Prénom</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup"  className=" col-6 " placeholder="" />
                                </InputGroup>
                            </Col>
                        </Form.Row>

                        <Form.Row className='mb-4'>
                            <Col xs="auto" md={6}>

                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Fokotany
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Fokotany</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup"  className=" col-6 "  placeholder="" />
                                </InputGroup>
                            </Col>
                            <Col xs="auto" md={6}>
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Commune
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Commune</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup"  className=" col-6 " placeholder="" />
                                </InputGroup>
                            </Col>
                            <Col xs="auto" md={6}>
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Region
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Region</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup"  className=" col-6 " placeholder="" />
                                </InputGroup>
                            </Col>
                        </Form.Row>
                        <Form.Row  className='mb-4 justify-content-center'>
                            <Button type="submit" className="ButtonsLink  text-uppercase">
                            S'inscrire
                        </Button>
                        </Form.Row>
                        <Row className='pt-5 pb-3'>
                            <Col xs={12} md={12} className='text-center'>
                                <Link to="/connexion"> Se connecter</Link>
                            </Col>
                        </Row>
                    </Form>

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

export default connect(mapStateToProps)(InscriptionPage);
