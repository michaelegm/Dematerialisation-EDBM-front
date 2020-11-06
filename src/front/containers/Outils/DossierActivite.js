import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/Information'
import NavBarAll from '../../components/header/navbarall';
import Footer from '../../components/footer/footer';
import * as outilsActionCreators from '../../actions/Outils/Activite'
import { bindActionCreators } from 'redux';
import dossieractivite from '../../componentscss/dossieractivite.css'
import { Fragment } from 'react';
import {Container} from 'react-bootstrap'
import { createPath } from 'history';
import './dossierActivite.css'


class DossierActivite extends Component{


              constructor(props) {
                super(props);
                this.state = {
                  status:'section',
                  idSectionActivite:'',
                  idDivisionActivite:'',
                  idGroupeActivite:'',
                  idClasseActivite:'',
                  idCategorieActivite :'',
                  libelleSection:" Cet outil a pour objectif de vous donner des informations utiles concernant le/les activités dans lesquelles vous souhaitez exercer, notamment leur classification. Vous pouvez vous baser sur le descriptif fourni pour rédiger votre objet social, information clé dans votre création d'entreprise."+
                  "Pour identifier facilement votre activité cible, sélectionnez d'abord dans la colonne de gauche la section d'activité dont votre projet fait partie. Ensuite, ajoutez plus de précision en choisissant la division puis le groupe. Finalement, vous déterminez la classe qui englobe votre activité principale pour identifier celle qui correspond le plus à vos objectifs."+
                 "Pour savoir si votre activité est une activité réglementée, vous pouvez consulter directement la liste dédiée ici (lien).",
                  libelleDivision:'',
                  libelleGroupe:'',
                  libelleCategorie:'',
                  libelleClasse:'',
                  generalId:'',
                  generalLibelle:'',
                  text:' ',
                  parent:'',
                  arborescence:''
                };
              }
               getSection(){
                this.setState({
                  status:'section',
                  parent:'',
                  text:'',
                  libelleCategorie:'',
                  libelleClasse:'',
                  libelleDivision:'',
                  libelleSection:" Cet outil a pour objectif de vous donner des informations utiles concernant le/les activités dans lesquelles vous souhaitez exercer, notamment leur classification. Vous pouvez vous baser sur le descriptif fourni pour rédiger votre objet social, information clé dans votre création d'entreprise."+
                  "Pour identifier facilement votre activité cible, sélectionnez d'abord dans la colonne de gauche la section d'activité dont votre projet fait partie. Ensuite, ajoutez plus de précision en choisissant la division puis le groupe. Finalement, vous déterminez la classe qui englobe votre activité principale pour identifier celle qui correspond le plus à vos objectifs."+
                 "Pour savoir si votre activité est une activité réglementée, vous pouvez consulter directement la liste dédiée ici (lien).",


                })
               }
               getDivision(idSection,libSection){
                 this.setState({
                   status:'division',
                   idSectionActivite:idSection,
                   libelleSection:libSection,
                   text:'',
                   libelleCategorie:'',
                   libelleGroupe:'',
                   libelleClasse:''

                 })
                 this.props.listeDivision(idSection);
                ;
               }
               getGroupeActivite(idDivision,libDivision)
               {
                this.setState({
                  status:'groupe',
                  idDivisionActivite:idDivision,
                  libelleDivision:libDivision,
                  text:'',
                  libelleCategorie:'',
                  libelleClasse:'',
                  libelleGroupe:'',


                })
                this.props.listeGroupe(idDivision);
               }
              getClasseActivite(idGroupe,libGroupeActivite)
                {
                  this.setState({
                    status:'classe',
                    idGroupeActivite:idGroupe,
                    libelleGroupe:libGroupeActivite,
                    text:'',
                    //libelleCategorie:''
                  })

                this.props.listeClasse(idGroupe)

                }
                getCategorieActivite(idClasse,libClasse){
                  this.setState({
                    status:'categorie',
                    idClasseActivite:idClasse,
                    libelleClasse:libClasse,
                    text:''
                  })

                this.props.listeCategorie(idClasse);
                }
            componentDidMount() {
                window.addEventListener('DOMContentLoaded', this.props.listeSection);
            }
            renderSwich(){
              switch(this.state.status)
              {
                case 'section': const section=this.props.section
                  var listeSection=section.length?(
                    section.map(post=>{
                    return(
                      <li onClick={()=>this.getDivision(post.idSectionActivite,post.libelleSectionActivite)}><a href="#" className="link "></a> {post.idSectionActivite}  {post.libelleSectionActivite} </li>
                    )

                      })
                  ):(<p> Aucun article pour le moment!</p>)
                  this.state.arborescence=listeSection;break;
                case 'division':

                    const division=this.props.division;
                    var sectionActiv = this.state.libelleSection;
                    var listeDivision=division.length?(division.map(post=>{

                        return(
                        <span><blockquote><li onClick={()=>this.getGroupeActivite(post.idDivisionActivite,post.libelleDivisionActivite)}><a href="#" className="link "></a> {post.idDivisionActivite}  {post.libelleDivisionActivite} </li></blockquote></span>
                        )

                          })
                      ):(<p> Aucun article pour le moment!</p>);
                      //this.state.parent=<b>HELLO </b>;
                    this.state.parent=(<Fragment><b><i onClick={()=>this.getSection()}>{this.state.idSectionActivite} - {sectionActiv}</i></b></Fragment>);
                    this.state.arborescence=listeDivision;break;
                case 'groupe':
                    const groupe=this.props.groupe;
                    var divisionActiv=this.state.libelleDivision;
                    var listeGroupe=groupe.length?(groupe.map(post=>{
                      return(
                        <span><blockquote><li onClick={()=>this.getClasseActivite(post.idGroupeActivite,post.libelleGroupeActivite)}><a href="#" className="link "></a> {post.idGroupeActivite}  {post.libelleGroupeActivite} </li></blockquote></span>
                      )
                    })):(<p> Aucun article pour le moment!</p>);
                    this.state.parent=(<Fragment><b><i onClick={()=>this.getDivision(this.state.idSectionActivite, this.state.libelleSection)}>{this.state.idDivisionActivite} - {divisionActiv}</i></b></Fragment>);
                    this.state.arborescence=listeGroupe;
                    break;
                case 'classe':
                  const classe=this.props.classe;
                    var GroupeActiv=this.state.libelleGroupe;
                    var listeClasse=classe.length?(classe.map(post=>{
                      return(
                        <span><blockquote><li onClick={()=>this.getCategorieActivite(post.idClasseActivite,post.libelleClasseActivite)}><a href="#" className="link "></a> {post.idClasseActivite}  {post.libelleClasseActivite} </li></blockquote></span>
                      )
                    })):(<p> Aucun article pour le moment!</p>);
                    this.state.parent=(<Fragment><b><i onClick={()=>this.getGroupeActivite(this.state.idDivisionActivite, this.state.libelleDivision)}>{this.state.idGroupeActivite} - {GroupeActiv}</i></b></Fragment>);
                    this.state.arborescence=listeClasse;
                    break;
                case 'categorie':
                  const categorie=this.props.categorie;
                    //var classeActiv=this.state.libelleClasse;
                    var listeCategorie=categorie.length?(categorie.map(post=>{
                      return(
                        <span><blockquote><li  className="textfinal"><a href="#" className="textfinal"></a> {post.codeCategorie}  {post.descriptivesCategorie} </li></blockquote></span>
                      )
                    })):(<p> Aucun article pour le moment!</p>);
                    //this.state.parent=(<Fragment><b><i onClick={()=>this.getClasseActivite(this.state.idClasseActivite, this.state.libelleClasse)}>{this.state.idGroupeActivite} - {classeActiv}</i></b></Fragment>);
                    this.state.text=listeCategorie;
                    break;


                default: ;

              }
            }


    render(){
        //CONTENU
        return (
             <div className='Dossier'>
                 <NavBarAll/>
                    <main className="wrapper">
                      <Container fluid  className='p-0' >
                        <div  className="App Form-Container">
                         {/*<h3 className='text-center p-4'>Constituer votre dossier </h3>*/}

                         {/* FORMULAIRE ConstituerDossier*/}
                         <div className="detreminer">
                            <h3 className='text-center p-4 titre'>Determiner votre activité:</h3>
                            <p>
                            Pour la formalisation de votre entreprise, la première étape consiste à déclarer votre activité principale, qu'il s'agisse d' une entreprise individuelle ou d'une société.  L'actvité principale doit correspondre à l'activité qui générera le plus de revenus pour l'entreprise. Elle est ainsi déterminante pour le calcul d'un acompte prévisionnel de l'impôt de la future entreprise, ainsi que pour la définition des documents justificatifs en cas d'activités réglementées.
                            La nomenclature des activités a été mis en place par l'INSTAT à des fins statistiques pour faciliter l'organisation de l'information économique et sociale. Cette liste, présentée ci-dessous, permet d'identifier plus facilement votre activité principale en suivant une infrastructure dont le plus haut niveau concerne les Sections d'activités, suivi des Divisions qui rassemblent des Groupes d'activités sub-divisés en Classes rassemblant les Activités précises.
                            </p><br></br>
                        </div>
                            <div align="center" className="nomac-container">
                                {/*<DossierActiviteChatBot />*/}
                                <div className="nomac-list-gauche">
                                    <div className="arbre-rubriques" align="left">
                                      {this.renderSwich()}
                                      { this.state.parent}
                                        {this.state.arborescence}
                                    </div>
                                </div>
                                <div className="nomac-list-droite">
                                  <div className="fil-ariane"></div>

                                    <div className="droite-detail" align="left">
                                        <p>
                                             <h4>{this.state.libelleSection}</h4>
                                            <h4>{this.state.libelleDivision}</h4>
                                            <h4>{this.state.libelleGroupe}</h4>
                                            <h4>{this.state.libelleClasse}</h4>
                                            <h4 className='textfinal'>{this.state.text}</h4>
                                        </p>
                                   </div>
                                  </div>
                            </div>
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

export default connect(mapStateToProps,outilsActionCreators) (DossierActivite);
