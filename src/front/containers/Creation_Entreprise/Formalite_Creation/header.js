import React, { Component } from 'react'
import '../carouselhead.css'
import Slide2 from '../../../../images/slides/PHOTOS/elevage.jpeg'
import step1 from '../../../../images/step/step1.png'
import step2 from '../../../../images/step/step2.png'
import step3 from '../../../../images/step/step3.png'
import step4 from '../../../../images/step/step4.png'
import step5 from '../../../../images/step/step5.png'
import background from '../../../../images/step/background.jpg'
import {Carousel,Container} from 'react-bootstrap'
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
class HeaderFormalite extends Component{
    render(){
        return (
            <div className="homeSlideHead head">
                <Grid container spacing={3} className="itemstep">
                    
                    <Grid item xs={2}>
                   <a href="/formalite_creation#forme_juridique"> <img src={step1} alt="" className="cover" xs={2}/></a>
                    </Grid>
                    <Grid item xs={2}>
                    <a href ="/formalite_creation#statut"><img src={step2} alt="" className="cover" /></a>
                    </Grid>
                    <Grid item xs={2}>
                    <a href="/formalite_creation#dossier"> <img src={step3} alt="" className="cover" /></a>
                    </Grid>
                    <Grid item xs={2}>
                    <a href="/formalite_creation#frais" ><img src={step4} alt="" className="cover" /></a>
                    </Grid>
                    <Grid item xs={2}>
                    <a href="formalite_creation#transmettre"><img src={step5} alt="" className="cover" /></a> 
                    </Grid>
              </Grid>
                
            </div>
           
        )
    }
}
export default HeaderFormalite
