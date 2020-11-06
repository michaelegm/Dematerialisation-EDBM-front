import React, {Component,useState} from 'react';
import {Button, Card,Form, FormControl, InputGroup,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/Information'
import form from '../../componentscss/form.css'
import NavBarAll from '../../components/header/navbarall';
import Footer from '../../components/footer/footer';
import * as outilsActionCreators from '../../actions/Outils/Dossier'
import * as action from '../../actions/Information'
import { bindActionCreators } from 'redux';
import ScrollableAnchor from 'react-scrollable-anchor'
import RangeSlider from 'react-bootstrap-range-slider';
import DossierChatbot from './DossierChatBot'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';



class Dossier extends Component{

    constructor(props) {
        super(props);
        this.state = {
                codeFormeJuridique:"",
                idProcedure:"",
                idActiviteReglemente:"",
                value : 0
        };
        this.getListeFJ()
        this.getListeProcedure()
        this.getListeDossierAR()
      }
    getListeFJ(){
        console.log('ato')

        action.listeFormeJuridique();
        console.log('liste procedure')
        //actionCreators.listeProcedure();


     }
     getListeDossierAR(){
         this.props.listeDossierActiviteReglemente()
     }
     getListeProcedure(){

         this.props.listeProcedure()
     }
      onChangeInput=(e)=>{
          this.setState({
              [e.target.name]:e.target.value
          })
      }
      getListeDossier=(event)=>{
        event.preventDefault();
        this.props.listeDossier(this.state)
        console.log(this.state.codeFormeJuridique)
      }

    componentDidMount() {
        window.addEventListener('DOMContentLoaded', this.props.listeFormeJuridique);
        window.addEventListener('DOMContentLoaded', this.props.listeProcedure);
     }

    render(){
        const { value } = this.state;

        // LISTE FORME JURIDIQUE
     const formeJuridique=this.props.formejuridique;
     const listeFormeJuridique=formeJuridique.length ?(
        formeJuridique.map(post=>{
              return(
                <option key={post.idFJ} value={post.codeFormeJuridique}>{post.libelleFormeJuridique}</option>
              ) })
              ):(<p> Aucun article pour le moment!</p>);
    //LISTE PROCEDURE
    const listeProcedure=this.props.procedure;
    const listeProcedures=listeProcedure.length ?(
        listeProcedure.map(post=>{
                return(
                <option key={post.idProcedure} value={post.idProcedure}>{post.nomProcedure}</option>

                ) })
                ):(<p> Aucun procedure pour le moment!</p>);
    //LISTE ACTIVITE REGLEMENTE
    const listeActiviteReglemente =this.props.activiteReglemente;
    const listeActiviteReglementes=listeActiviteReglemente.length ?(
        listeActiviteReglemente.map(post=>{
                return(
                <option key={post.idActiviteReglemente} value={post.idActiviteReglemente}>{post.nomActiviteReglemente}</option>

                ) })
                ):(<p> Aucun procedure pour le moment!</p>);
    //LISTE DOSSIER
    const dossierFJ=this.props.dossierFJ;
    const listeDossierFJ=dossierFJ.length ?(
        dossierFJ.map(post=>{
             return(
               <li key={post.nomDossier} >{post.nomDossier}</li>
             ) })
             ):(<li> Aucun dossier pour le moment!</li>);

        //CONTENU
        return (
             <div className='Dossier'>
                 <NavBarAll/>
                <main className="wrapper">

                    <div  className="App Form-Container">
                     {/*<h3 className='text-center p-4'>Constituer votre dossier </h3>*/}

                     {/* FORMULAIRE ConstituerDossier*/}
                        <h3 className='text-center p-4'>Constituer vos dossier:</h3>
                        <Form className='form mb-5' onSubmit={this.getListeDossier}>
                            <div className="blockForm">
                                <div className="tiitleForm">
                                  
                                </div>
                                <div>
                                <DossierChatbot procedure="" ></DossierChatbot>
                              { /*     <Form.Row>

                                        <Form.Group as={Col} controlId="formeJuridique">
                                                <Form.Label column md="6">
                                                Forme Juridique:
                                                </Form.Label>

                                            <Form.Group as={Col} controlId="formGridFormeJuridque">
                                                <Form.Control as="select" defaultValue="Choose..." name="codeFormeJuridique" onClick={this.getListeFJ} onChange={this.onChangeInput}>
                                                <option value="0">Choisir</option>
                                                {listeFormeJuridique}
                                                </Form.Control>
                                                </Form.Group>

                                        </Form.Group>

                                        <Form.Group as={Col} controlId="procédure">
                                            <Form.Label column md="6">
                                                 Procédure:
                                            </Form.Label>

                                            <Form.Group as={Col} controlId="formGridProcedure">
                                                <Form.Control as="select" defaultValue="Choose..." onClick={() => this.props.listeProcedure} name="idProcedure" onChange={this.onChangeInput}>
                                                    <option value="0">Choisir</option>
                                                    {listeProcedures}
                                                </Form.Control>
                                            </Form.Group>

                                    </Form.Group>

                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="activite"  md="6">
                                            <Form.Label column  >
                                            Activité:
                                            </Form.Label>

                                                <Form.Group as={Col} controlId="formGridActivité">
                                                <Form.Control as="select" defaultValue="Choose..." onClick={this.props.listeActiviteReglemente} name="idActiviteReglemente" onChange={this.onChangeInput}>
                                                    <option value="0">Choisir</option>
                                                    {listeActiviteReglementes}
                                                </Form.Control>
                                            </Form.Group>
                                    </Form.Group>
                                </Form.Row>
                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                            <Form.Row>
                                                <Col className='col-md-3 col-12'>
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        type={type}
                                                        id={`custom-${type}`}
                                                        label={`Importateur`}
                                                    />
                                                </Col>

                                                <Col className='col-md-3 col-12'>
                                                    <Form.Check
                                                    custom
                                                    inline
                                                    label="Exportateur"
                                                    type={type}
                                                    id={`custom-inline-${type}-2`}
                                                    />
                                                </Col>
                                                <Col className='col-md-3 col-12'>
                                                <Form.Check
                                                    custom
                                                    inline
                                                    label="Grossiste"
                                                    type={type}
                                                    id={`custom-inline-${type}-3`}
                                                />
                                            </Col>
                                        </Form.Row>
                                        </div>
                                    ))}
                                    </div>
                                    <hr/>
                                    <div>
                                         <font size="4"><h3>Associés et Dirigéants</h3></font><br></br>
                                        {['checkbox'].map((type) => (
                                                <div key={`assoc-inline-${type}`} className="mb-3">
                                                    <Form.Row>
                                                        <Col className='col-12'>
                                                            <label >
                                                        Associés:
                                                            </label>
                                                        </Col>
                                                        <Col className='col-md-4 col-12'>
                                                            <Form.Check
                                                                custom
                                                                inline
                                                                type={type}
                                                                id={`assoc-${type}`}
                                                                label={`Personne Physique`}
                                                            />
                                                        </Col>

                                                        <Col className='col-md-4 col-12'>
                                                            <Form.Check
                                                            custom
                                                            inline
                                                            label="Personne morale nationale"
                                                            type={type}
                                                            id={`assoc-inline-${type}-2`}
                                                            />
                                                        </Col>
                                                        <Col className='col-md-4 col-12'>
                                                            <Form.Check
                                                                custom
                                                                inline
                                                                label="Personne morale étrangère"
                                                                type={type}
                                                                id={`assoc-inline-${type}-3`}
                                                            />
                                                        </Col>
                                                    </Form.Row>
                                                </div>
                                            ))}
                                    </div>
                                    <div >
                                    <Form.Row>



                                        <Form.Group as={Col} controlId="formGridAge"  sm="6">
                                            <Form.Label column>
                                                Age {"<"} 21 ans:
                                            </Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." name="age"   >
                                                <option value="0">Oui</option>
                                                <option value="1">Non</option>

                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridSituationMatrimonial"  sm="6">
                                            <Form.Label column  align="left">
                                                Situation matrimoniale:
                                            </Form.Label>
                                                <Form.Control as="select" defaultValue="Choisir..." name="situation_matrimonial">
                                                    <option value="0">Célibataire</option>
                                                    <option value="1">Marié</option>
                                                    <option value="1">Divorsé</option>

                                                </Form.Control>
                                            </Form.Group>
                                        <Form.Group as={Col} controlId="Nationalite"  sm="6">
                                            <Form.Label column >
                                                Représantant:
                                            </Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." name="nationalite_represantant">
                                                <option value="0">Malagasy</option>
                                                <option value="1">Etranger</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    </div>

                                    <div>
                                        <Form.Row>
                                            <Col>
                                                <label >
                                                Dirigeants:
                                                </label>
                                            </Col>
                                            <Col className='d-flex'>
                                                <div className="custom-control custom-radio pr-3">
                                                        <input type="radio" value="Malagasy" name="nationalite_dirigeant" id="nationalite_dirigeant1"  className="custom-control-input"/>
                                                        <label className="custom-control-label" htmlFor="nationalite_dirigeant1">Malagasy</label>
                                                </div>

                                                <div className="custom-control custom-radio pr-3">
                                                        <input type="radio" value="Autres" name="nationalite_dirigeant"  id="nationalite_dirigeant2"className="custom-control-input"/>
                                                        <label className="custom-control-label" htmlFor="nationalite_dirigeant2">Autre Nationalité</label>
                                                </div>


                                            </Col>

                                        </Form.Row>



                                    </div>
                                    <hr/>
                                    <div>
                                        <Form.Row>

                                            <Form.Group as={Col} controlId="typeContrat"  sm="6">
                                                <Form.Label column  align="left">
                                                    Type de contrat:
                                                </Form.Label>
                                                    <Form.Control as="select" defaultValue="Choisir..." name="type_contrat">
                                                        <option value="0">Location</option>
                                                        <option value="1">Sous-location</option>
                                                        <option value="1">Domiciliation</option>

                                                    </Form.Control>
                                                </Form.Group>


                                            <Form.Group as={Col} controlId="typeContrat"  sm="6">
                                                <Form.Label column  align="left">
                                                    Document du siège:
                                                </Form.Label>
                                                    <Form.Control as="select" defaultValue="Choisir..." name="document_siege">
                                                        <option value="0">Certificat Juridique</option>
                                                        <option value="1">Acte de notoriété</option>
                                                        <option value="2">Acte de vente</option>
                                                        <option value="3">Titre propriété</option>
                                                    </Form.Control>
                                                    </Form.Group>
                                        </Form.Row>
                                        <Form.Row>

                                            <Form.Group as={Col} controlId="bailleur"  sm="6">
                                                <Form.Label column  align="left">
                                                    Bailleur:
                                                </Form.Label>
                                                    <Form.Control as="select" defaultValue="Choisir..." name="bailleur">
                                                        <option value="0">Propriétaire unique</option>
                                                        <option value="1">Représentant</option>
                                                        <option value="1">Propriétaires multiples (héritiers)</option>
                                                    </Form.Control>
                                            </Form.Group>
                                                    <Col>
                                                        <input type="radio" value="Particulier" name="type_bailleur" /> Particulier
                                                   </Col>
                                                    <Col>
                                                        <input type="radio" value="Societe" name="type_bailleur" /> Société
                                                    </Col>

                                        </Form.Row>
*/}

                                    </div>
                                    <div align="center">
                                    {/*<Button variant="secondary" size="lg" className="ButtonsLink  text-uppercase" type="submit">
                                        Obtenir ma liste de documents
</Button>*/}
                                    </div>
                                </div>
                        </Form>

                        {/*   Liste des dossier
                        <div  id="div-dossier" className='text-center mb-5 mt-5' >
                            <div className="blockForm">
                                <div className="tiitleForm">
                                    Dossier Societe
                                </div>
                                <div>
                                    <ol>
                                        {listeDossierFJ}
                                    </ol>
                                </div>
                            </div>

                        </div>
                        {/*   Liste des dossier*/}
                        {/* FORMULAIRE ConstituerDossier*/}



                        {/*   ORMULAIRE Droit*/}



                     {/* FORMULAIRE Activite*/}

                         <h3 className='text-center p-4 d-none'>Determiner  vos activité</h3>


                     {/* FORMULAIRE Activite*/}


                    </div>
                </main>
                 <Footer />
             </div>
        )
    }

}

  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        actionCreators: bindActionCreators(actionCreators, dispatch),
        outilsActionCreators: bindActionCreators(outilsActionCreators, dispatch)
      }
    };
  }
const mapStateToProps= state=>{
    return{

        formejuridique:state.information.formeJuridiques,
        procedure:state.information.procedures,
        activiteReglemente:state.information.activiteReglementes,
        dossierFJ:state.dossier.dossiersFJ,
        dossierAR:state.dossier.dossierAR,
    }
};
//const actions ={actionCreators,outilsActionCreators};

export default connect(mapStateToProps,outilsActionCreators) (Dossier);
