import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import NavBarAll from '../../components/header/navbarall';
import Footer from '../../components/footer/footer';
import * as outilsActionCreators from '../../actions/Outils/Activite'
import  '../../componentscss/simulationdroit.css'
import {Container} from 'react-bootstrap'
import {Button,Form, FormControl, InputGroup,Col} from 'react-bootstrap'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import * as APIConfig from "../../constants/APIConfig";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
const state = {
    accompte_prev:0,
    total:0,
    value : 0,
    nb_mois:0,
    mensualite:0,
    enrg_bail:0,
    pv_agc:0,
    pv_ca:0,
    pv_nomination_gerant:0,
    checked_pvagc:false,
    checked_pvca:false,
    checked_nomination:false,
    enrg_document:0,
    procuration:'',
    capital:0,
    droit_statut:0,
    valeur_procuration:0,
    enrg_rcs:0,
    enrg_stat:0,
    frais_transactions:0,
    total_enrg_document:0,
    activites:[{codeFormeJuridique:'initial',
                activite:'Pas de valeur',
                montant:'Pas de valeur'}],
    show:false,
    step: ['Forme Juridique','Imposition', 'Activite', 'Capital','BAIL','Procuration'],
    loader:true
};
var loader=false;
// List of step
function getSteps() {
  return state.step;
}

// get list's content  
function getStepContent(stepIndex,props) {
  switch (stepIndex) {
    case 'Forme Juridique':
      return <div><h3>Veuillez sélectionner la forme juridique de votre société</h3><FormeJuridique props={props}/></div>;
    case 'Imposition':
      return <div><h3>Quel est votre choix d'imposition?</h3><Imposition props={props}/></div>;
    case 'Activite':
        return <div><h3>Veuillez sélectionner votre secteur d'activités:</h3><Activite props={props}/></div>;
    case 'Capital':
      return <div><h3> Veuillez saisir le montant de votre capital</h3><Capital props={props}/></div>;
    case 'BAIL':
        return <div><h3>Veuillez saisir la durée de bail et le montant de vos mensualité</h3><Bail props={props}/></div>;
    case 'Procuration':
        return <div><h3>Il s'agit de procuration</h3><Procuration props={props}/></div>;
    case 'nb_associe':
        return <div><h3> Combien y-a -t-il d'associés?</h3><Associe props={props}/></div>;
    case 'actegerant':
          return <div><h3> Le(s) gérant(s) est-il déclaré dans les status de la société? (Oui/non)</h3><EnregistrementActe props={props}/></div>;
        default:
            
      return <div><h3>Veuillez cliquer sur finaliser pour finaliser nos calculs</h3></div>;
  }
}
// get list of FormeJuridique
var formejuridique;
function FormeJuridique(props){
   
    const changeStep =(e)=>{
    formejuridique=e.target.value;
    
      if(1<formejuridique)
      {
        formejuridique==9?state.step.push('nb_associe'):console.log('non 9')
        state.step.push('actegerant')
        var immatriculation={contexte:'immatriculation',instat:{detail:"Immatriculation INSTAT",value:40000},rcs:{detail:"Immatriculation RCS",value:16000}};
        props.props.addcomponent(immatriculation)
        
        var index= state.step.indexOf('actegerant');
        console.log(index)
        formejuridique==6?state.step.splice(3,1) || state.step.splice(index,1) :console.log('non sdet')
        
      }
      else 
      {
           
          state.step=  ['Forme Juridique','Imposition', 'Activite','Procuration']
          var imm={contexte:'immatriculation',instat:{detail:"Immatriculation INSTAT",value:20000},rcs:{detail:"Immatriculation RCS",value:6000}};
          props.props.addcomponent(imm)
      }
    
        
   
}
    return(<Form.Group as={Col} md="6" >
        <Form.Control as="select" defaultValue="Choose..."  name="formejuridique" onChange={changeStep}>
            <option value="0">Choisir</option>
            <option value="1">Entreprise individuelle (EI)</option>
            <option value="2">Société à responsabilité limitée (SARL)</option>
            <option value="3">Société à responsabilité limitée Unipersonnelle (SARLU)</option>
            <option value="4">Société Civile (SC)</option>
            <option value="5">Groupement d'Intérêt Economique (GIE)</option>
            <option value="6">Société de Droit ETranger (SDET)</option>
            <option value="7">Société en commandité Simple (SCS)</option>
            <option value="8">Société en Nom Collectif (SNC)</option>
            <option value="9">Société Anonyme (SA)</option>

        </Form.Control>
    </Form.Group>)
                        
}
// Choix d'imposition
function Imposition(props){

   
   const activiteCorrespondant=(e)=>{
        getListeActivite(e.target.value,props)
        //var acc={contexte:"loader",impot:e.target.value}
        // props.props.addcomponent(acc);
   }
    return(<Form.Group as={Col} md="6" >
        <Form.Control as="select" defaultValue="Choose..."  name="formejuridique" onChange={activiteCorrespondant}>
            <option value="0">Choisir</option>
            <option value="IS">Impôt Synthétique</option>
            <option value="IR"> Impôt sur le Revenu </option>
            

        </Form.Control>
    </Form.Group>)
                        
}
// List Activity
function getListeActivite(codeFormeJuridique,props){

    var ressource='simulateurActivite';
    var authorization=APIConfig.ACCESS_SOCIETE;
    const formattedData = [];
   var acc={contexte:"loader_true",loader:true}
   props.props.addcomponent(acc);
    axios.get(APIConfig.API_URI_SOCIETE+ressource,
                                      {       headers: {
                                                      'Content-Type': 'application/json',
                                                      Accept: 'application/json',
                                                      Authorization:authorization ,
                                                      //'Access-Control-Allow-Origin': '*',
                                                      },
                                              params:{
                                                  codeFormeJuridique:codeFormeJuridique
                                                      }})
                                      .then((response)=>{

                                                      const section = Object.values(response.data.activiteAsujetissements);
                                                      console.log(section);
                                                      section.forEach(task =>
                                                          Object.entries(task).forEach(([key, value]) =>
                                                                                      formattedData.push({
                                                                                          codeFormeJuridique:value['codeFormeJuridique'],
                                                                                          activite:value['activite'],
                                                                                          montant:value['montant']
                                                                                      })
                                          ));
                                      //this.setState({activite:formattedData})
                                      state.activites=formattedData
                                      var acc={contexte:"loader_false",loader:false}
                                      props.props.addcomponent(acc);
                              })
                              .catch((error) => {
                                  console.error(error)
                                  console.log('ERROR  ')
                              })

}
// Component Activite
function Activite(props){
  const accompt=(e)=>{
  var acc={contexte:"accompte_previsionnel",impot:e.target.value}
  props.props.addcomponent(acc);
  //console.log(acc)
  }
    const listeActiviteSimulation=state.activites
         const listeActivite=listeActiviteSimulation.length ?(
            listeActiviteSimulation.map(post=>{
                return(
                <option key={post.activite} value={post.montant}>{post.activite}</option>

                ) })
                ):(<p> Aucun procedure pour le moment!</p>);
                return(<Form.Row>
                    <Form.Group as={Col}   md="6">
                        <Form.Label column  >
                           
                        </Form.Label>

                        <Form.Group as={Col} >
                            <Form.Control as="select" defaultValue="Choose..."  name="categorieactive" onChange={accompt}>
                                <option value="0">Choisir</option>
                                {listeActivite}

                            </Form.Control>
                        </Form.Group>
                    </Form.Group>
                
                </Form.Row>)
}

//Component Capital
function Capital(props){
  const enrg_statut=(e)=>{
        var capital=((0,5)*(e.target.value))/100;
        console.log(e.target.value)
        var enregistrement={contexte:"enregistrement_statut",statut:capital}
        props.props.addcomponent(enregistrement)
      }
    return( <Form.Group as={Col}  md="4">
            <Form.Control type="text"  name="capital" onChange={enrg_statut} placeholder="votre capital" className="chiffre" />
            </Form.Group>
          )
}
//component Associe
var nb_associee=0;
function Associe(props){
  const enrg_statut=(e)=>{
        nb_associee=e.target.value;
        var enregistrement={contexte:"associe",nb_associe:nb_associee}
        props.props.addcomponent(enregistrement)
      }
    return( <Form.Group as={Col}  md="4">
            <Form.Control type="text"  name="associé" onChange={enrg_statut} placeholder="nombre associé" className="chiffre" />
            </Form.Group>
          )
}
var nb_mois=0; var mensualite=0;
//Component BAIL
function Bail(props){
  
  const set_nb_mois=(e)=>{
        nb_mois=e.target.value?e.target.value:0
        calcul_bail()
  }
  const set_mensualite=(e)=>{
    mensualite=e.target.value?e.target.value:0;
    calcul_bail()
  }
  const calcul_bail=()=>{
    console.log(nb_mois+' '+mensualite)
    var bail=((nb_mois*mensualite)*2)/100
    var value={contexte:"enregistrement_bail",bail:bail}
    props.props.addcomponent(value)
  }
    return(<Form.Row>
                <Form.Group as={Col}  md="6">
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text className='w-100'> Nombre de mois</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroupNbMois"  placeholder=""  name="nb_mois" onChange={set_nb_mois} className="chiffre"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}   md="6">
                <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text className='w-100'> Mensualité(MGA)</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroupMesualite" name="mensualite" placeholder=""  onChange={set_mensualite} className="chiffre"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col}   md="2">

                </Form.Group>
                

    </Form.Row>)
}
//COMPONENT LEFT
export  function QuestionnaireDroit(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  
   window.location.reload(false);

  };

  return (
    <div className={classes.root}>
   
      
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Merci pour ces informations.Le montant de vos frais a été calculé dans l'onglet de droite</Typography>
            <Button onClick={handleReset}>REFAIRE LE CALCUL</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(state.step[activeStep],props)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                PRECEDENT
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'FINALISER' : 'SUIVANT'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// Component Procuration
var procuration;
function Procuration(props) {
  const handleChange=(e)=>{
   
    if(e.target.value==="procuration")
     {procuration=1;
     
    }
     else{
      procuration=0

    }
    var value={contexte:"procuration",procuration:procuration}
    props.props.addcomponent(value)
  }
 
  return (
   
      <RadioGroup row aria-label="position" name="procuration" defaultValue="top" onChange={handleChange}>
        
      <FormControlLabel
        value="procuration"
        control={<Radio color="primary" />}
        label="Oui"
        labelPlacement="start"
        
        
      />
   <FormControlLabel
        value="nonprocuration"
        control={<Radio color="primary" />}
        label="Non"
        labelPlacement="start"
       
      />
      
    </RadioGroup>
  );
}

//Component Enregistrement Acte
var engeristrement_acte;
function EnregistrementActe(props) {
  const handleChange=(e)=>{
   console.log(e.target.value);
    if(e.target.value==="enregistrer")
     {engeristrement_acte=1;
     
    }
     else{
      engeristrement_acte=0

    }
    var value={contexte:"engeristrement_acte",engeristrement_acte:engeristrement_acte}
    props.props.addcomponent(value)
  }
 
  return (
   
      <RadioGroup row aria-label="position" name="enregigrement_acte" defaultValue="top" onChange={handleChange}> 
      <FormControlLabel
        value="enregistrer"
        control={<Radio color="primary" />}
        label="Oui"
        labelPlacement="start"
      />
   <FormControlLabel
        value="nonenregistrer"
        control={<Radio color="primary" />}
        label="Non"
        labelPlacement="start"   
      />
      
    </RadioGroup>
  );
}


class CalculDroit extends Component{


              constructor(props) {
                super(props);
                this.state = {
                    accompte_prev:0,
                    total:0,
                    value : 0,
                    nb_mois:0,
                    mensualite:0,
                    enrg_bail:0,
                    pv_agc:0,
                    pv_ca:0,
                    pv_nomination_gerant:0,
                    checked_pvagc:false,
                    checked_pvca:false,
                    checked_nomination:false,
                    enrg_document:0,
                    procuration:0,
                    valeur_procuration:0,
                    capital:0,
                    droit_statut:0,
                    enrg_rcs:0,
                    enrg_stat:0,
                    enrg_statut:0,
                    frais_transactions:0,
                    engeristrement_acte:0,
                    total_enrg_document:0,
                    etat_souscription_versement:0,
                    declaration_souscripition_versement:0,
                    bulletin_souscription_versement:0,
                    activites:[{codeFormeJuridique:'initial',
                                activite:'Pas de valeur',
                                montant:'Pas de valeur'}],
                    show:false,
                    step: ['Forme Juridique','Imposition', 'Activite', 'Capital','BAIL','Procuration'],
                    loader:false
                   
                };
                this.addComponent=this.addComponent.bind(this)
                //getListeActivite('IS')
              }
                changeinput(target, value){
                    this.setState({
                        target:value
                    })
                }
                addComponent(a){
                console.log(a.contexte);
                var context=a.contexte;
                switch (context){
                  case "immatriculation":this.setState({
                    enrg_rcs:a.rcs.value,
                    enrg_stat:a.instat.value,
                });this.calcul_total();break;
                  case "accompte_previsionnel":this.setState({
                    accompte_prev:a.impot
                  });break;
                  case "enregistrement_statut":this.setState({
                    enrg_statut:a.statut
                  });this.calcul_total();break;
                  case "enregistrement_bail":this.setState({
                    enrg_bail:a.bail
                  });this.calcul_total();break;
                  case "procuration":this.setState({
                    procuration:a.procuration,
                  });a.procuration>0?this.state.valeur_procuration=2000:this.state.valeur_procuration=0;this.calcul_total();break;
                  case "engeristrement_acte":this.setState({
                    engeristrement_acte:a.engeristrement_acte
                  });this.gestion_acte();this.calcul_total();this.calcul_total();break;
                  case "associe": this.calcul_total();break;
                  case "loader_true":this.setState({
                    loader:a.loader
                  });break;
                  case "loader_false":this.setState({
                    loader:a.loader
                  });break;
                default:;
                }
               
                   //this.state.total_enrg_document=state.enrg_rcs
                }
              
                gestion_acte(){
                  if(formejuridique>1  ){
                    if(engeristrement_acte==0){
                         this.state.pv_nomination_gerant=2000
                      if(formejuridique>4)
                      {
                        this.state.pv_agc=2000
                      }
                      if(formejuridique==9){
                        this.state.etat_souscription_versement=2000;
                        this.state.declaration_souscripition_versement=2000;
                        console.log(nb_associee)
                          if(nb_associee==1){
                            this.state.bulletin_souscription_versement=2000;
                          }
                          
                          if(1<nb_associee<4){
                            this.state.bulletin_souscription_versement=nb_associee*2000;
                          }
                          if(nb_associee<=4){
                          
                            this.state.bulletin_souscription_versement=nb_associee*2000;
                            this.state.pv_ca=2000;
                          }    
                      }
                      
                    }
                    else{
                      this.state.pv_nomination_gerant=0
                      this.state.etat_souscription_versement=0;
                      this.state.declaration_souscripition_versement=0;
                      this.state.pv_agc=0
                    }
                    }
                    this.calcul_total()
               
                }
                calcul_total(){
                    var sous_total_acte=parseFloat(this.state.enrg_statut+this.state.enrg_bail+this.state.pv_nomination_gerant+this.state.etat_souscription_versement+this.state.declaration_souscripition_versement+this.state.pv_agc+this.state.bulletin_souscription_versement+this.state.pv_ca)
                    var sous_total=parseFloat(this.state.enrg_rcs+this.state.enrg_stat+sous_total_acte+this.state.valeur_procuration+parseFloat(this.state.accompte_prev))
                    this.state.frais_transactions=((parseFloat(sous_total))*5)/100
                    this.state.total_enrg_document=sous_total+(parseFloat(this.state.frais_transactions))
                    console.log(this.state.total_enrg_document);
                    this.state.total_enrg_document=this.state.total_enrg_document

                }
    render(){
      var addComponent=this.addComponent
        //CONTENU
        return (
             <div className='Dossier'>
                 <NavBarAll/>
                    <main className="wrapper">
                      <Container fluid  className='p-0' >
                        <div  className="App Form-Container">
                         {/*<h3 className='text-center p-4'>Constituer votre dossier </h3>*/}

                       
                         <div className="detreminer">
                            <h3 className='text-center p-4 titre'> Simulez vos droits de formalisation:</h3>
                            <br></br>
                        </div>
                        <LoadingMask loading={this.state.loader} text={"loading..."}>
                            <div align="center" className="nomac-container">
                                {/*<DossierActiviteChatBot />*/}
                               


                                <div className="nomac-list-gauche">
                                    <div className="arbre-rubriques" align="left">
                                        <QuestionnaireDroit addcomponent={addComponent.bind(this)}/>
                                    </div>
                                </div>
                               
                                <div className="nomac-list-droite">
                                  <div className="fil-ariane"></div>

                                    <div className="droite-detail" align="left">
                                        <table width="500">
                                          <tr><td><h3>Libellé</h3></td><td className="chiffre"><h3>Montant</h3></td></tr>
                                          <tr><td>Immatriculation RCS</td> <td className="chiffre">{this.state.enrg_rcs}</td></tr>
                                          <tr><td>Immatriculation STATISTIQUE</td> <td className="chiffre"> {this.state.enrg_stat}</td></tr>
                                          <tr><td>Acompte prévisionnel Impôt</td><td className="chiffre">{this.state.accompte_prev}</td></tr>
                                          <tr><td><h3>Enregistrement Actes:</h3></td></tr>
                                          <tr><td>Enregistrement Statut</td><td className="chiffre">{this.state.enrg_statut}</td></tr>
                                          <tr><td>Enregistrement Bail Commercial</td><td className="chiffre">{this.state.enrg_bail}</td></tr>
                                        
                                          {this.state.procuration!==0?(<tr><td>Procuration</td><td className="chiffre">{this.state.valeur_procuration}</td></tr>):(<p></p>)}
                                          {formejuridique>1?(<tr><td>PV Nomination Gérant</td><td className="chiffre">{this.state.pv_nomination_gerant}</td></tr>):(<p></p>)}
                                          {formejuridique>4?(<tr><td>PV AGC</td><td className="chiffre">{this.state.pv_agc}</td></tr>):(<p></p>)}
                                          {formejuridique==9?(<tr><td>Etat de souscription de versement</td><td className="chiffre">{this.state.etat_souscription_versement}</td></tr>):(<p></p>)}
                                          {formejuridique==9?(<tr><td>Déclaration de souscription de versement</td><td className="chiffre">{this.state.declaration_souscripition_versement}</td></tr>):(<p></p>)}
                                          {formejuridique==9?(<tr><td>Bulletin de souscription de versement</td><td className="chiffre">{this.state.bulletin_souscription_versement}</td></tr>):(<p></p>)}
                                          {formejuridique==9 && 4<=nb_associee?(<tr><td>PV CA</td><td className="chiffre">{this.state.pv_ca}</td></tr>):(<p></p>)}
                                          {this.state.frais_transactions==!0 ?(<tr><td>Frais de transaction</td><td className="chiffre">{this.state.frais_transactions}</td></tr>):(<p></p>)}
                                        </table>
                                        <Form.Row>
                                        <hr></hr>
                                        <Form.Group as={Col} md="6">
                                        
                                        <Form.Label >
                                                 TOTAL
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="6">
                                        <Form.Control type="text" name="total" value={this.state.total_enrg_document} disabled className="chiffre" />
                                        </Form.Group>
                                    </Form.Row>
                                   </div>
                                  </div>
                            </div></LoadingMask>
                        </div> 
                          <div className="clearfix"></div>
                        </Container>
                    </main>
                 <Footer />
             </div>
        )
    }


}


const mapStateToProps= state=>{
    return{
      section:state.activite.section,
      division:state.activite.division,
      groupe:state.activite.groupe,
      classe:state.activite.classe,
      categorie:state.activite.categorie

    }
};
//const actions ={actionCreators,outilsActionCreators};

export default connect(mapStateToProps,outilsActionCreators) (CalculDroit);