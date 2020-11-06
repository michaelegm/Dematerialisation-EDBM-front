import React, { Component } from 'react'
import './carouselheadactivite.css'
import Slide2 from '../../../images/demarches-creation-entreprise.png'

import {Carousel,Container} from 'react-bootstrap'

class HeaderAutreInformartion extends Component{
    render(){
        return (

            <Carousel className='homeSlideHead1'nextIcon="" prevIcon="" indicators="">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt=""
                />
              <Carousel.Caption>
              <h3 className="h3">Les activités réglementées demandent des démarches complémentaires auprès des autorités compétentes concernées pour valider la création de la société ou le démarrage de l'activité. Vous trouverez ci-dessous la liste de ces activités et leurs caractéristiques.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        )
    }
}
export default HeaderAutreInformartion
