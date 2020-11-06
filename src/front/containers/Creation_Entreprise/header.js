import React, { Component } from 'react'
import './carouselhead.css'
import Slide1 from '../../../images/slides/PHOTOS/artMalagasy.jpeg'
import Slide2 from '../../../images/slides/PHOTOS/elevage.jpeg'
import Slide3 from '../../../images/slides/PHOTOS/agriculture.jpeg'
import * as serveur from '../../constants/Serveur'
import {Button, Carousel} from 'react-bootstrap'

class HeaderCreationEntreprise extends Component{
    render(){
        return (

            <Carousel className='homeSlideHead'nextIcon="" prevIcon="" indicators="">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Slide1}
                    alt=""
                />
              <Carousel.Caption>
                <h3>La création d’entreprise</h3>
                <p>Créer une entreprise est une démarche à effectuer dans un cadre légal dont le but est de protéger l’entrepreneur et de favoriser une économie de développement. Cette rubrique permet de clarifier ce cadre et de guider l’entrepreneur dans ses formalités. </p>
                  
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        )
    }
}
export default HeaderCreationEntreprise
