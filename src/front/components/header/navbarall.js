import React, { Component } from 'react'
import logoedbm from '../../../images/logoedbmwhite.png'
import { FaSearch, FaChevronUp } from 'react-icons/fa';
import {
    Button,
    Navbar,
    Nav,
    Row,
    Col,
    Collapse,
    Dropdown,
    ButtonGroup,
    InputGroup,
    FormControl,
    Form,
  
} from 'react-bootstrap'
import {Link} from "react-router-dom";

class NavBarAll extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render(){
        const { open } = this.state;
        return (
            <header className="App-header">

                <Collapse in={open} className='bg-white position-fixed searchInt '>
                    <div id="SearchBarBlock" >
                        <Form   className="recherche-page justify-content-center  d-flex flex-nowrap flex-row shadow-sm "  >
                            <InputGroup className="searchHeader searchIntern">
                                <FormControl
                                    className='searchInput'
                                    placeholder="Recherche"
                                    aria-label="Recherche"
                                    aria-describedby="basic-addon2"    />
                                <InputGroup.Append>
                                    <Button variant="">
                                        <FaSearch/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <Button variant={'link'}
                                                 className={'text-white p-5'}
                                                 onClick={() => this.setState({ open: false })}
                                                 aria-controls="SearchBarBlock"
                                                 aria-expanded={open}>
                            <FaChevronUp/>
                        </Button>
                        </Form>

                    </div>
                </Collapse>
                <Navbar collapseOnSelect expand="xl"  className="navbarhome" id="navbarhome">
                    <Row  noGutters={true}  className="w-100">
                        <Col lg={12}className='justify-content-between align-items-center align-content-center d-flex d-xl-none '>
                            <Navbar.Brand href="#home" className='logo-head'>
                                <img src={logoedbm} alt="logoedbm" className="img-logo-header-home"></img>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-navAll " />
                        </Col>

                        <Col lg={12} xl={12} className="justify-content-center align-content-center align-items-center">

                            <Navbar.Collapse id="navbar-navAll " className='navHeader pt-5 pb-5'>
                                <Row  noGutters={true}  className="justify-content-center align-content-center align-items-center w-100 ">
                                <Col xs={12} md={2}  className="d-none d-xl-block">
                                        <Nav.Link href="/" className="logo-head text-center"><img src={logoedbm} alt="logoedbm" className=" img-logo-header-home"></img></Nav.Link>
                                    </Col>
                                    <Col xs={12} md={5} className='pr-3 pl-3'>
                                        <Nav className=' justify-content-xs-center justify-content-start flex-md-row '>
                                            <Nav.Item>
                                                <Nav.Link href="/" className="linktext menuLinks" variant="outline-info">Accueil</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item dropdown">
                                                <Dropdown as={ButtonGroup}>
                                                    <Nav.Link  className='menuLinks'  data-toggle="dropdown" href="/creation_entreprise"
                                                              role="button" aria-haspopup="true" aria-expanded="false">Création d'entreprise </Nav.Link>
                                                    <Dropdown.Toggle split variant="default" id="dropdown-split-basic" className='text-white' />
                                                    <Dropdown.Menu>
                                                        
                                                        <Dropdown.Item href="/definir_projet">Définir son projet</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item > <Link to="/formalite_creation">Formalités de création</Link></Dropdown.Item>
                                                        <Dropdown.Divider/>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item dropdown">
                                                <Dropdown as={ButtonGroup}>
                                                    <Nav.Link  className='menuLinks' href="autre_information" data-toggle="dropdown"   role="button" aria-haspopup="true" aria-expanded="false">Autres informations</Nav.Link>
                                                    <Dropdown.Toggle split variant="default" id="dropdown-split-basic" className='text-white' />
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item ><Link to="/fiscalite">Fiscalité et obligations</Link> 
                                                        </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item><Link to="/activite_reglemente">Activités réglementées</Link> </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item href="/entite">Entités administratives </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                       
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item dropdown">
                                                <Dropdown as={ButtonGroup}>
                                                    <Nav.Link  className='menuLinks' data-toggle="dropdown" href="/outils"  role="button" aria-haspopup="true" aria-expanded="false">Outils</Nav.Link>
                                                    <Dropdown.Toggle split variant="default" id="dropdown-split-basic" className='text-white' />
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/dossier">Constituer un dossier </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item href="/outils_simulation">Simuler les frais
                                                        </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item  href="/dossier_activite">Trouver mon activité </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                       
                                                      
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item dropdown">
                                                <Dropdown as={ButtonGroup}>
                                                    <Nav.Link  data-toggle="dropdown" href="/faq"  role="button" aria-haspopup="true" aria-expanded="false">FAQ</Nav.Link>
                                                    <Dropdown.Toggle split variant="default" id="dropdown-split-basic" className='text-white' />
                                                    {/*<Dropdown.Menu>
                                                        <Dropdown.Item href="/faq">Utilisation du système</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item href="/faq">Procédures en ligne </Dropdown.Item>
                                                    </Dropdown.Menu>*/}
                                                </Dropdown>
                                            </Nav.Item>

                                        </Nav>
                                    </Col>
                                   
                                    <Col xs={12} md={5} className=''>
                                        <Nav className='w-100 justify-content-xs-center justify-content-end flex-md-row notConnecteButtons '>
                                            <Nav.Link href="/inscription" className="linktext" variant="outline-info">S'INSCRIRE</Nav.Link>
                                            <Nav.Link href="/connexion" className="linktext">SE CONNECTER</Nav.Link>
                                            <Button
                                                variant={'link'}
                                                className={'text-white'}
                                                onClick={() => this.setState({ open: !open })}
                                                aria-controls="SearchBarBlock"
                                                aria-expanded={open}
                                            >
                                                <FaSearch/>
                                            </Button>
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
export default NavBarAll
