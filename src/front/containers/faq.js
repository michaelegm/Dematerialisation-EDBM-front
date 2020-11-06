import React, {Component, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer/footer';
import NavBarAll from '../components/header/navbarall'
import '../App.css';
import './Accueil/Home.css'
import ScrollableAnchor from 'react-scrollable-anchor'
import {Container, Row, Col, Accordion, Card, Image} from "react-bootstrap"
import CarouselFAQ from '../components/homecarousel/faq'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/FaqAction'
import arrow from "../../images/arrow.png";


const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 600){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 600){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 600, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)
    return (
        <div className="ScroolToTop scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}><Image src={arrow} rounded  className="RoundButton"/></div>
    );
}


class Faq extends Component {
    constructor(props)
     {
            super(props);
            console.log('hello')
            this.props.listeTHEME();
            //this.props.listeQuestionReponse()
            this.state={
                sujets:[{sujet:'',question_reponse:{question:'',reponse:''}}],
                question_rep:'',
                contenu:null,
               
                
            }
           
           
     }

     getListeSujet(idTheme){
        this.props.listeSujet(idTheme);
     }
    
     componentDidMount() {
        this.props.listeTHEME()
        window.addEventListener('DOMContentLoaded', this.props.listeTHEME);
        window.addEventListener('DOMContentLoaded', this.props.listeSujet(1));
        window.addEventListener('DOMContentLoaded', this.props.listeQuestionReponse);
        
        const listeQuestionReponse=this.props.questionFAQ;
        console.log(this.props.sujet)
        
      
    }
     
    render(){
        const listeTHEMEs=this.props.theme;
        const listesujets=this.props.sujet;
        const questionReponse=this.props.questionFAQ;
     console.log(questionReponse)
           
    
        //this.getListeQuestionRep(1)
        return (

            <div className="faq">
                 <NavBarAll/>
                 <CarouselFAQ></CarouselFAQ>
                <main className="wrapper">

                    <ScrollArrow />
                    <Container fluid>
                        <Accordion>
                                <Row>
                                    <Col sm={12} md={12}>
                                        {listeTHEMEs.length?(
                                        listeTHEMEs.map(post=>{
                                            //this.getListeSujet(1)
                                            const listeSujets=this.props.sujet;
                                            const listeQuestionReponse=this.props.questionFAQ;
                                             //console.log(listeQuestionReponse)
                                             this.state.contenu=listeQuestionReponse; 
                                            console.log(
                                                this.state.contenu
                                            )
                                        return(
                                        <div>
                                            <h3 className="titre-accordion">{post.theme}</h3><br></br>
                                            <div className="LinkFaq">
                                        {listeSujets.length?(listeSujets.map(sujet=>{
                                           
                                            
                                            return(<p className="faq_text"><a href={'#'+sujet.idSujet} className="faq_text">{sujet.sujet}<br></br></a></p>
                                        )})):(<p>aucun Sujet</p>)}
                                            </div>
                                        
                                        </div>)
                                        
                                    })
                                ):(<p> Aucun theme pour le moment!</p>)}
                                                            
                                    </Col>

                                
                                </Row>

                                <Row>
                                    <Col sm={12} md={12}>
                                      
                                     
                                       {
                                       listesujets.length?(listesujets.map(sujet=>{
                                        return(<ScrollableAnchor className='p-0'  id={sujet.idSujet}>

                                            <div className="py-5">
                                                <h2 className='titreSections'>{sujet.sujet}</h2>
                                                
                                              
                                                  
                                                
                                               
                                            <Accordion>
                                            {
                                                questionReponse.length?(questionReponse.map(qr=>{if(qr.idSujet===sujet.idSujet){ return(
                                                
                                                 <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey={qr.question} className="cursor-pointer">
                                                <h3 className="m-0 p-0 d-flex flex-row flex-nowrap justify-content-between">{qr.question}</h3>
                                                    </Accordion.Toggle>
                                                  <Accordion.Collapse eventKey={qr.question}>
                                                         <Card.Body>
                                                                <p>{qr.reponse}
                                                                </p>
                                                         </Card.Body>
                                                     </Accordion.Collapse>
                                                     
                                                </Card>    
                                                )}})):(<p>Pas de question</p>)
                                                }
                                            </Accordion>
                                            </div>
                                        </ScrollableAnchor>



                                        

                                       )})):(<p>pas de sujet</p>)}
                                        
                                       
                                    </Col>
                                </Row>

                        </Accordion>

                    </Container>
                </main>
                 <Footer/>
             </div>
        )
    }
}

const mapStateToProps= state=>{
    return{

        theme:state.faq.theme,
        sujet:state.faq.sujet,
        questionFAQ:state.faq.questionFAQ
    }
};
export default connect(mapStateToProps,actionCreators)(Faq);
