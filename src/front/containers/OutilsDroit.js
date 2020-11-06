import React, {Component} from 'react';
import {Button, Card,Form, FormControl, InputGroup,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import NavBarAll from '../components/header/navbarall';
import Footer from '../components/footer/footer';
import axios from "axios";
import * as APIConfig from "../constants/APIConfig";
import { createPath } from 'history';
import  './OutilsDroit.css'






var pvagc=0;var _pvca=0;var nomination=0;
class OutilsDroit extends Component{
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
                show:false
        };
      }
        getListeActivite(codeFormeJuridique){

            var ressource='simulateurActivite';
            var authorization=APIConfig.ACCESS_SOCIETE;
            const formattedData = [];
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
                                         this.state.activites=formattedData
                                         console.log("state"+this.state.activites)
                                })
                                .catch((error) => {
                                    console.error(error)
                                    console.log('ERROR  ')
                                })

        }

      calcul_droit_enrg_bail(){
         var  enrg_bail=((this.state.mensualite*this.state.nb_mois)*2)/100
          this.setState({enrg_bail:enrg_bail});

      }
      pvagc(e){
        console.log("PVAGC"+this.state.checked_pvagc)
        if(this.state.checked_pvagc===false)
            {
                console.log("PVAGC"+ this.state.pv_agc)
                pvagc=2000

            }

        else
            {
                console.log("not pv_agc")
                pvagc=0

            }

      }
      pvca(e){
        console.log("PVCA"+this.state.checked_pvca)
        if(this.state.checked_pvca===false)
        {
            console.log("PVCA"+this.state.pv_ca)
            _pvca=2000

        }
        else
        {
            console.log("not pvca")
            _pvca=0

        }
        //this.total_enrg_document()
      }
      calcul_enrg_document(){
          //let enrg_document=0;
          console.log(this.state.checked_nomination)
            if(this.state.checked_nomination===false)
            {
                //console.log("nomination"+this.state.pv_nomination_gerant)
                nomination=2000

            }
            else
            {
               // console.log("ekkkk")
                nomination=0

            }

      }
      total_enrg_document()
      {

        var total=nomination+_pvca+pvagc;
        this.setState({
            enrg_document: total    });
      }
      onChangeInput=(e)=>{

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.state.name=value;

        this.setState({
            [name]: value    });

        this.state.droit_statut=this.state.capital?(this.state.capital*(0,5))/100:0
        if(!this.state.capital)
        this.state.droit_statut=0
        if(name==='checked_pvagc')
            this.pvagc(e)
        if(name==='checked_pvca')
            this.pvca(e)
        if(name==='checked_nomination')
            this.calcul_enrg_document(e)
        if(name==='procuration')
            {
                if(value==='oui')
                    this.state.valeur_procuration=2000
                else this.state.valeur_procuration=0
            }
        if(name==='type')
        {
            if(value==='pp')
                {
                    this.state.enrg_rcs=6000
                    this.state.enrg_stat=20000
                }

            else
                {
                    this.state.enrg_stat=40000
                    this.state.enrg_rcs=16000
                }

        }
        if (name==='codeFormeJuridique')
            {
                this.getListeActivite(value)
                console.log('lasa'+value)
            }
            if(name==='categorieactive')
            {
                    console.log(value)
                    this.state.accompte_prev=value
            }
        this.calcul_droit_enrg_bail();
        //this.calcul_frais_transaction();

        this.total_enrg_document()
        var sous_total=parseFloat(this.state.droit_statut+this.state.enrg_bail+this.state.enrg_document+this.state.enrg_rcs+this.state.enrg_stat+this.state.valeur_procuration+parseFloat(this.state.accompte_prev))
        this.state.frais_transactions=((parseFloat(sous_total))*5)/100
        this.state.total_enrg_document=sous_total+(parseFloat(this.state.frais_transactions))



    }


    render(){
        const { value } = this.state;

        const listeActiviteSimulation=this.state.activites
         const listeActivite=listeActiviteSimulation.length ?(
            listeActiviteSimulation.map(post=>{
                return(
                <option key={post.activite} value={post.montant}>{post.activite}</option>

                ) })
                ):(<p> Aucun procedure pour le moment!</p>);
        return (
             <div>
                  <NavBarAll/>

                  <div  className="App Form-Container">
                     {/*   ORMULAIRE Droit*/}

                     <h3 className='text-center p-4'></h3>
                        <Form className='form mb-5' onSubmit={this.getListeDossier}>
                            <div className="blockForm sumulateur">
                              <div className="tiitleForm" align='center'>
                                Simuler vos droits de formalisation:
                                </div>
                                <div>
                                    <Form.Row>

                                        <Form.Group as={Col} >
                                            <Form.Label column md="4">
                                                Regime Fiscale *:
                                            </Form.Label>

                                            <Form.Group as={Col} >
                                                <Form.Control as="select" defaultValue="Choose..." name="codeFormeJuridique" onChange={this.onChangeInput}>
                                                    <option value="0">Choisir</option>
                                                    <option value="IS">Impôt Synthétique </option>
                                                    <option value="IR">Impôt sur le Revenu  </option>

                                                </Form.Control>
                                            </Form.Group>

                                        </Form.Group>
                                       
                                        <Form.Group as={Col} >
                                            <Form.Row>
                                            <Form.Group as={Col}   md="3">
                                             <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                <InputGroup.Radio  name="type" value="pp" onChange={this.onChangeInput}  aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 Pers.Physique *<br></br>
                                                </Form.Label>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="3">
                                             <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                <InputGroup.Radio  name="type" value="pm" onChange={this.onChangeInput} aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 Pers.Morale *<br></br>
                                                </Form.Label>
                                            </InputGroup>
                                        </Form.Group>
                                        </Form.Row>
                                        </Form.Group>
                                        
                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Form.Group as={Col}   md="6">
                                            <Form.Label column  >
                                                Catégorie activité:
                                            </Form.Label>

                                            <Form.Group as={Col} >
                                                <Form.Control as="select" defaultValue="Choose..."  name="categorieactive" onChange={this.onChangeInput}>
                                                    <option value="0">Choisir</option>
                                                    {listeActivite}

                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Group>
                                    
                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Form.Group as={Col}   md="8">
                                            <Form.Label column  >
                                                Acompte prévisionnel impôt:
                                            </Form.Label>


                                        </Form.Group>
                                        <Form.Group as={Col}   md="2">
                                        <Form.Control type="text" value={this.state.accompte_prev}  disabled/>
                                        </Form.Group>

                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}   md="4">
                                            <Form.Label column  >
                                                Droit d'enregistrement Statut


                                            </Form.Label>

                                        </Form.Group>



                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Form.Group as={Col}   md="4">
                                            <Form.Label column  >
                                                Capital(MGA)

                                            </Form.Label>

                                        </Form.Group>
                                        <Form.Group as={Col}  md="4">

                                            <Form.Control type="text" value={this.state.capital} name="capital" onChange={this.onChangeInput} placeholder="votre capital" />
                                       {/*<Form.Control type="range" value={value} onChange={changeEvent => this.setValue(changeEvent.target.value)}/>
                                        */ } </Form.Group>
                                        <Form.Group as={Col}   md="2">
                                        <Form.Control type="text" value={ this.state.droit_statut} disabled />
                                        </Form.Group>


                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}   md="4">
                                            <Form.Label column  >
                                                Droit d'enregistrement Contrat de Bail<br></br>
                                            </Form.Label>

                                        </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                        <Form.Group as={Col}  md="3">
                                             <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className='w-100'> Nombre de mois</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                 <FormControl id="inlineFormInputGroupNbMois"  placeholder="" value={this.state.nb_mois} name="nb_mois" onChange={this.onChangeInput} />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col}   md="3">
                                        <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className='w-100'> Mensualité(MGA)</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                 <FormControl id="inlineFormInputGroupMesualite" name="mensualite" placeholder="" value={this.state.mensualite} onChange={this.onChangeInput} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group as={Col}   md="2">

                                        </Form.Group>
                                        <Form.Group as={Col}   md="2">
                                        <Form.Control type="text" disabled value={this.state.enrg_bail}  />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label column  >
                                                Droit d'enregistrement Document<br></br>
                                            </Form.Label>

                                        </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                        <Form.Group as={Col}  md="3">
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Checkbox checked={this.state.checked_pvagc} name="checked_pvagc" onChange={this.onChangeInput}  />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 PV AGC<br></br>
                                            </Form.Label>
                                            </InputGroup>

                                        </Form.Group>
                                        <Form.Group as={Col}   md="3">
                                             <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Checkbox checked={this.state.checked_pvca} name="checked_pvca" onChange={this.onChangeInput} aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 PV CA<br></br>
                                                </Form.Label>
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group as={Col}   md="2">
                                        <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Checkbox checked={this.state.checked_nomination} name="checked_nomination" onChange={this.onChangeInput}  aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 PV Nomination Gérants<br></br>
                                            </Form.Label>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="2">
                                        <Form.Control type="text" name="enrg_document" value={this.state.enrg_document} disabled />
                                        </Form.Group>

                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}   md="3">
                                        <Form.Label >
                                                 Procuration
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col}   md="3">
                                             <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Radio  name="procuration" value="oui" onChange={this.onChangeInput}  aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 Oui<br></br>
                                                </Form.Label>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="2">
                                             <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Radio  name="procuration" value="non" onChange={this.onChangeInput} aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <Form.Label >
                                                 Non<br></br>
                                                </Form.Label>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col}   md="2">
                                        <Form.Control type="text" value={this.state.valeur_procuration} disabled  />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}  md="8">
                                        <Form.Label >
                                                 Droit immatriculation au Registre des Sociétés (RCS):
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="2">
                                        <Form.Control type="text" value={this.state.enrg_rcs} disabled  />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}   md="8">
                                        <Form.Label >
                                                 Droit immatriculation Statistique (STAT):
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col}   md="2">
                                        <Form.Control type="text" value={this.state.enrg_stat} disabled/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}  md="8">
                                        <Form.Label >
                                                 Frais de transactions:
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="2">
                                        <Form.Control type="text" value={this.state.frais_transactions} disabled />
                                        </Form.Group>
                                    </Form.Row>
                                    <hr></hr>
                                    <Form.Row>
                                    <Form.Group as={Col}  md="6">

                                    </Form.Group>
                                    
                                        <Form.Group as={Col} md="2">
                                        <Form.Label >
                                                 TOTAL
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Col}  md="2">
                                        <Form.Control type="text" name="total" value={this.state.total_enrg_document} disabled />
                                        </Form.Group>
                                    </Form.Row>
                                </div>



                            </div>
                        </Form>
                        {/*   ORMULAIRE Droit*/}




             </div>
             <Footer></Footer>
             </div>
        )
    }
}
export default  OutilsDroit;

