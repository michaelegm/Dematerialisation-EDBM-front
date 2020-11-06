import React, { Component } from 'react'
import './carouselhead.css'
import Slide2 from '../../../images/slides/PHOTOS/elevage.jpeg'
import {Carousel,Container} from 'react-bootstrap'

class HeaderFormalite extends Component{
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
              <Container fluid id="menu_commencer" >
              
                </Container>
                  
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        )
    }
}
export default HeaderFormalite
