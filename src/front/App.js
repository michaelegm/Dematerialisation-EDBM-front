import React,{Component} from 'react';
import Routes from "../Routes";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import * as actionCreators from './actions/Information'
import * as faq from './actions/FaqAction'
import fonts from '../fonts/fonts.css'


class App extends Component {
  componentDidMount() {
   window.addEventListener('DOMContentLoaded', this.props.listeFormeJuridique);
   //window.addEventListener('DOMContentLoaded', faq.listeSujet(1));
   window.addEventListener('DOMContentLoaded', this.props.listeRegimeFiscal);
   window.addEventListener('DOMContentLoaded', this.props.listeActiviteReglementeDetail);
 }
    render(){
        return (
          <Routes></Routes>
            );
    }

}


const mapStateToProps= state=>{
  return{

      formejuridique:state.formeJuridiques,
      regimeFiscaux:state.regimeFiscaux,
      procedure:state.procedures
  }
};


export default connect(mapStateToProps,actionCreators) (App);
