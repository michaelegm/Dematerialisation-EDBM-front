import React, { Component } from 'react'
import '../carouselhead.css'
import Slide2 from '../../../../images/slides/PHOTOS/elevage.jpeg'
import {Carousel,Container} from 'react-bootstrap'

class HeaderCreationEntreprise extends Component{
    render(){
        return (

            <Carousel className='homeSlideHead'nextIcon="" prevIcon="" indicators="">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt=""
                />
              <Carousel.Caption>
              <Container fluid id="menu_commencer" className='px-3 py-5' >
                <h3>Définir son projet<br></br><br></br> de création d’entreprise</h3>
                </Container>
                  
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        )
    }
}
export default HeaderCreationEntreprise
