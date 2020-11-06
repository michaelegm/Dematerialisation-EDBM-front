import React,{Component} from "react";
import FAQ from '../../images/FAQ.svg'
import info from '../../images/info.png'
import help from '../../images/help.png'
import ntic from '../../images/ntic.jpg'
import './Accueil/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import Footer from '../components/footer/footer';
import CarouselHome from "../components/homecarousel/carousel";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import NavBarAll from "../components/header/navbarall";


class Connexion extends Component {
    render(){

        return (
            <div className="LoginRegistration">
                <NavBarAll/>
                <main className="wrapper d-flex justify-content-center">
                    <Form className='d-flex flex-1 justify-content-center  flex-column'>
                        <Form.Row className='mb-4'>

                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Login
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Login</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup"  className=" col-6 "  placeholder="Username" />
                                </InputGroup>

                        </Form.Row>
                        <Form.Row className='mb-4'>
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Mot de passse
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend className="p-0 col-6 ">
                                        <InputGroup.Text className='w-100'>Mot de passse</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl type="password" id="inlineFormInputGroup"  className=" col-6 " placeholder="******" />
                                </InputGroup>
                        </Form.Row>
                        <Form.Row  className='mb-4 justify-content-center'>
                            <Button type="submit" className="ButtonsLink  text-uppercase">
                            Se connecter
                        </Button>
                        </Form.Row>
                        <Row className='pt-5 pb-3'>
                            <Col xs={12} md={6}  className='text-left'>
                                <Link to="/pass">Mot de passe oublié</Link>
                            </Col>
                           {/* <Col xs={12} md={6} className='text-right'>
                                <Link to="/inscription">Coopératives</Link>
                            </Col>*/}
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

export default connect(mapStateToProps)(Connexion);
