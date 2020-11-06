import React, { Component } from 'react'
import './carouselhead.css'
import Slide2 from '../../../images/demarches-creation-entreprise.png'

import {Carousel,Container} from 'react-bootstrap'

class HeaderAutreInformartion extends Component{
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
             
              
           
                  
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        )
    }
}
export default HeaderAutreInformartion
