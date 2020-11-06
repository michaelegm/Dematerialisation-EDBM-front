import React, { Component } from 'react'
import logoedbm from '../../../images/logoedbmwhite.png'
import {Navbar, Nav, Form, FormControl, Button, InputGroup, Row, Col} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import RecherchePopover from './recherche'


class NavBarHome extends Component{
    render(){
        return (
            <header className="App-header">
                <Navbar collapseOnSelect expand="xl"  className="navbarhome" id="navbarhome">

                    <Row  noGutters={true}  className="w-100 pt-4 pb-4">
                        <Col lg={12} xl={4} className='justify-content-between align-items-center align-content-center d-flex'>
                            <Navbar.Brand href="#home" className='logo-head'>
                                <img src={logoedbm} alt="logoedbm" className="img-logo-header-home"></img>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </Col>
                        <Col lg={12} xl={8} className="justify-content-center align-content-center align-items-center">


                                    <Navbar.Collapse id="responsive-navbar-nav " className='navHeader '>
                                        <Row  noGutters={true}  className="w-100">
                                            <Col xs={12} md={6} className='d-flex justify-content-center'>
                                            <Form inline className="recherche-home justify-content-center "  >
                                                <InputGroup className="searchHeader bg-white">
                                                    < RecherchePopover></RecherchePopover>
                                                    <InputGroup.Append>
                                                        <Button variant="">
                                                            <FaSearch/>
                                                        </Button>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Form>
                                            </Col>
                                            <Col xs={12} md={6} className=''>
                                            <Nav className='w-100 justify-content-xs-center justify-content-end flex-md-row notConnecteButtons'>
                                                <Nav.Link href="/inscription" className="linktext text-center p-2" variant="outline-info">S'inscrire</Nav.Link>
                                                <Nav.Link href="/connexion" className="linktext text-center p-2">Se connecter</Nav.Link>
                                            </Nav>
                                            </Col>
                                        </Row>
                                    </Navbar.Collapse>

                            </Col>
                        </Row>

                </Navbar>
            </header>

        )
    }
}
export default NavBarHome
