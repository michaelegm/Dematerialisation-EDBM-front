import React, { Component } from 'react'
import '../../componentscss/carouselhead.css'
import Slide1 from '../../../images/Question-Mark-Picture.jpg'
import { Carousel, Col, Row} from 'react-bootstrap'
class CarouselFAQ extends Component{
    render(){
        return (

            <Carousel className='homeSlideHead' indicators={false} nextIcon="" prevIcon="">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Slide1}
                    alt=""
                />
              <Carousel.Caption>
                <p>
                    Bienvenue sur la foire aux questions du site <a rel="stylesheet" href="http://I-orina.mg/" target='_blank' className='text-white font-italic '>I-orina.mg</a> <br/>
                    Vous pouvez avoir plus de précisions sur les procédures d'immatriculation, modification et
                    cessation de votre activité.
                    <br/>Veuillez sélectionner directement le thème que vous souhaitez
                    approfondir
                </p>
                  <Row>
                      <Col className='text-center p-5'>
                          <h1 className='text-white'>Foire aux questions</h1>
                      </Col>
                  </Row>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        )
    }
}
export default CarouselFAQ
