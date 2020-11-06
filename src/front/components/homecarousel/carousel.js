import React, { Component } from 'react'
import '../../componentscss/carousel.css'
import Slide1 from '../../../images/slides/PHOTOS/artMalagasy.jpeg'
import Slide2 from '../../../images/slides/PHOTOS/elevage.jpeg'
import Slide3 from '../../../images/slides/PHOTOS/agriculture.jpeg'
import * as serveur from '../../constants/Serveur'
import {Button, Carousel} from 'react-bootstrap'

class CarouselHome extends Component{
    render(){
        return (

            <Carousel className='homeSlide'>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Slide1}
                    alt=""
                />
              <Carousel.Caption>
                <h3>Bienvenue sur i-orina.mg</h3>
                <p>Bienvenue sur i-orina, le site de l'EDBM pour vous accompagner dans vos démarches d'immatriculation,de modification et de cessation d'activité de votre entreprises. Vous trouverez sur le site toutes les informations nécessaires pour vous orientez et pour découvrir les différentes formalités et entités responsables.</p>
                  <div className='justify-content-center p-5'>
                     <a href={serveur.serveur_application+'/creation_entreprise'}> <Button variant="outline-info" size="lg" >Commencer</Button></a>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt="First slide"
                />
              <Carousel.Caption>
                <h3>Information avant création</h3>
                <p>Sur I-orina, vous pouvez en savoir plus sur les différentes formes juridiques et leurs caractéristiques pour vous aider à faire le meileur choix pour votre projet. Découvrez aussi les différentes obligations des entreprises dans le cadre de leurs activités.</p>
                  <div className='justify-content-center p-5'>
                      <a href={serveur.serveur_application+'/formalite_creation'}><Button variant="outline-info" size="lg">Y aller</Button></a>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide3}
                    alt="First slide"
                />
              <Carousel.Caption>
                <h3>Boite à Outils</h3>
                <p>Vous êtes prêts à vous lancer dans votre démarche d'immatriculation et souhaitez avoir plus de détails sur le dossier à constituer ou le montant des droits correspondant précisément à votre situation? I-orina vous mets à disposition les outils nécessaires pour que vous n'ayez pas de surprises dans vos procédures, il vous suffit d'utiliser la boîte à outils !</p>
                  <div className='justify-content-center p-5'>
                      <a href={serveur.serveur_application+'/outils'}><Button variant="outline-info" size="lg">Accédez</Button></a>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
export default CarouselHome
