import React, { Component } from 'react'
import '../../componentscss/carousel.css'
import Slide1 from '../../../images/ProcessusCreation300.jpg'

class CarouselInformation extends Component{
    render(){
        return (
          <div>   <img
          className="d-block w-100"
           src={Slide1}
           alt=""
       /></div>
        
           
        )
    }
}
export default CarouselInformation
