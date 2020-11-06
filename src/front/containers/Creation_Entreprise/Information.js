import React, {Component, useState} from "react";
import {  Link } from 'react-router-dom';
import law from '../../../images/law.png'
import metting from '../../../images/meeting.png'
import money from '../../../images/money.png'
import NavBarAll from '../../components/header/navbarall'
import { Card, Button, Container, Row, Col,Accordion,Image }from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../../components/footer/footer';
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/Information'
import ScrollableAnchor from 'react-scrollable-anchor'
import ReactHtmlParser from 'react-html-parser';
import CarouselInformation from "../../components/homecarousel/imageInformation";
import '../style.css'
import arrow from '../../../images/arrow.png'


const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 800){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 800){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
            window.scrollTo({top: 1200, behavior: 'smooth', });
    };

    window.addEventListener('scroll', checkScrollTop)
    return (
        <div className="ScroolToTop scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}><Image src={arrow} rounded  className="RoundButton"/></div>
    );
}
 class Information extends Component {
     constructor(props)
     {
            super(props);
            this.state=[];
            this.getListeFJ()
     }
     getListeFJ(){
        this.props.listeFormeJuridique();
        this.props.listeRegimeFiscal();

     }
   /* componentDidMount() {

        window.addEventListener('DOMContentLoaded', this.props.listeFormeJuridique);
        window.addEventListener('DOMContentLoaded', this.props.listeRegimeFiscal);
    }*/
  render(){
    //this.getListeFJ()


    const formeJuridique=this.props.formejuridique;//recuperation du store via props
    const regimeFisc=this.props.regimeFiscaux;
    console.log(regimeFisc)
      const listeRegimeFiscaux=regimeFisc.length?(
        regimeFisc.map(post=>{
          console.log(regimeFisc)
              return(

                <Card>

                    <Card.Header key={post.idRF}>
                      <Accordion.Toggle as={Button} variant="link" eventKey={post.idRF} >
                      {post.libelleRegimeFiscal}
                      ({post.acroRegimeFiscal})
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={post.idRF}>
                      <Card.Body>
                          <Row noGutters={true}>
                              <Col xs={12} md={4} className="cardStyleWrapper ">
                                  <Card className='cardStyle1'>
                                      <Card.Header>
                                          <h3>Présentation générale</h3>
                                      </Card.Header>
                                      <Card.Body className="text-justify">
                                          { ReactHtmlParser (post.caracteristique) }

                                      </Card.Body>
                                  </Card>

                              </Col>
                              <Col xs={12} md={4} className="cardStyleWrapper">

                                  <Card className='cardStyle1'>
                                      <Card.Header>
                                          <h3>Constitution de l’entreprise</h3>
                                      </Card.Header>
                                      <Card.Body className="text-justify">
                                          {ReactHtmlParser (post.casutilisation)}
                                      </Card.Body>
                                  </Card>

                              </Col>
                              <Col xs={12} md={4} className="cardStyleWrapper">

                                  <Card className='cardStyle1'>
                                      <Card.Header>
                                          <h3>Règles de fonctionnement</h3>
                                      </Card.Header>
                                      <Card.Body className="text-justify">
                                           {ReactHtmlParser (post.responsabilite)}
                                      </Card.Body>
                                  </Card>


                              </Col>
                          </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                </Card>
              )
          })
      ):(<p> Aucun article pour le moment!</p>);
        const listeFormeJuridique=formeJuridique.length ?(
          formeJuridique.map(post=>{
            console.log(post.idFJ)
                return(
                  <Card>
                      <Card.Header key={post.codeFormeJuridique}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={post.idFJ} >
                        {post.libelleFormeJuridique}<font className="font">({post.codeFormeJuridique})</font>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={post.idFJ}>
                        <Card.Body>
                            <Row noGutters={true}>
                                <Col xs={12} md={4} className="cardStyleWrapper">
                                    <Card className='cardStyle1'>
                                        <Card.Header>
                                        <h3>Présentation générale</h3>
                                        </Card.Header>
                                        <Card.Body className="text-justify">
                                            <p className="texte_guide_creation">
                                            {ReactHtmlParser (post.caracteristique)}
                                            </p>


                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4} className="cardStyleWrapper">

                                    <Card className='cardStyle1'>
                                        <Card.Header>
                                        <h3>A propos de l’entreprise</h3>
                                        </Card.Header>
                                        <Card.Body className="text-justify">
                                            <p>
                                            {ReactHtmlParser (post.casUtilisation)}
                                            </p>

                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4} className="cardStyleWrapper">

                                    <Card className='cardStyle1'>
                                        <Card.Header>
                                        <h3>Ce qu’il faut retenir</h3>
                                        </Card.Header>
                                        <Card.Body className="text-justify">
                                            <p>
                                            {ReactHtmlParser (post.responsabilite)}
                                            </p>

                                        </Card.Body>
                                    </Card>


                                </Col>
                            </Row>
                        </Card.Body>
                      </Accordion.Collapse>
                  </Card>



                )
            })
        ):(<p> Aucun article pour le moment!</p>);
    return (
      <div className="Information">
          <NavBarAll/>
          <CarouselInformation/>
          <main className="wrapper">
          <br></br>
          <Container fluid  className='p-0' >
              {/*PART 1*/}

             {/* <Row className='ml-5 mr-5'>
                  <Col className='text-center'>
                      <h1 className="titre-info">Information à connaitre </h1>
                      <h5 className="text-center information">Avant d'entamer vos démarches, soyez sûr d'avoir toutes les informations utiles</h5>
                  </Col>
              </Row>*/}
              <Row className='ml-5 mr-5 pb-5 b-bot-5' id="menu">
                  <Col xs={6} md={4} lg={3} className='mb-5'>
                      <Card.Link  href="#formejuridique">
                          <Card className='BlockInfos p-3'  >
                              <Card.Img  src={law}  style={{width:'80px',height:'auto',alignSelf:'center'}} />
                              <Card.Body className="p-0">
                                  <h5>Forme Juridique</h5>
                              </Card.Body>
                          </Card>
                      </Card.Link>
                  </Col>

                  <Col xs={6} md={4} lg={3} className='mb-5'>
                      <Card.Link  href="#regimefiscale">
                          <Card className='BlockInfos p-3'  >
                              <Card.Img variant="top" src={money}  style={{width:'80px',height:'auto',alignSelf:'center'}} />
                              <Card.Body className="p-0">
                                  <h5>Régime Fiscalité</h5>
                              </Card.Body>
                          </Card>
                      </Card.Link>
                  </Col>
                  <Col xs={6} md={4} lg={3} className='mb-5'>
                      <Card.Link  href="#entiteconcerne">
                          <Card className='BlockInfos p-3'  >
                                  <Card.Img variant="top" src={metting}   style={{width:'80px',height:'auto',alignSelf:'center'}} />
                                  <Card.Body className="p-0">
                                   <h5>Entité concerné</h5>
                                  </Card.Body>
                          </Card>
                      </Card.Link>

                  </Col>
                  <Col xs={6} md={4} lg={3} className='mb-5'>
                      <Card.Link  href="#activite">
                          <Card className='BlockInfos p-3'  >
                              <Card.Img variant="top" src={law}  style={{width:'80px',height:'auto',alignSelf:'center'}} />
                              <Card.Body className="p-0">
                                  <h5>Guide de création</h5>
                              </Card.Body>
                          </Card>
                      </Card.Link>
                  </Col>

              </Row>
              {/*PART 1*/}
          </Container>

          <ScrollableAnchor className='p-0'  id={'formejuridique'} >
              {/*PART 2*/}
              <Row className='ml-5 mr-5 pb-5 b-bot-5 formejuridique'>
                  <Col>
                          <h1 className="App titre-info">Les formes juridiques </h1>
                            <Accordion className='InfosElements' defaultActiveKey="0">
                              {listeFormeJuridique}


                          </Accordion>
                  </Col>
              </Row>
                {/*PART 2*/}

          </ScrollableAnchor>

            {/*<a href="#menu"><Image src={arrow} rounded  className="RoundButton"/></a>*/}

          <ScrollableAnchor  className='p-0'   id="regimefiscale" >
              {/*PART 3*/}
              <Row className='ml-5 mr-5 pb-5 b-bot-5'>
                  <Col>
                      <h1 className="App titre-info">Fiscalité </h1>
                      <Accordion className='InfosElements' defaultActiveKey="0">
                          {listeRegimeFiscaux}
                      </Accordion>
                  </Col>
              </Row>
              {/*PART 3*/}
          </ScrollableAnchor>

          {/*<a href="#menu"><Image src={arrow} rounded  className="RoundButton"/></a>*/}
          <ScrollableAnchor className='p-0'  id="entiteconcerne" >
          <Row className='ml-5 mr-5 pb-5 b-bot-5'>
                  <Col>
                      <h1 className="App titre-info">Entité Concernée </h1>




                      <Accordion className='InfosElements'>
                          <Card>
                              <Card.Header key="0" >
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="classeur_centre_fisc">
                                  <p className="description_entite"> Centre fiscal</p>
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                  <Card.Body>

                                      <Row>
                                          <Col xs={12} md={4}>


                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  Comme dans toute société démocratiquement structurée, pour le financement des services publics et des programmes de développement en partie, la contribution de tout un chacun(à travers le paiement des impôts) est indispensable.
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  La création des sociétés doit, en principe, passer par les Centres Fiscaux.
Avant d’exercer une activité quelconque, l’obtention du NIF est obligatoire.
Les pièces justificatives pour la création de société sont définies dans le Code générale des Impots, ce qui fait que le centre fiscal est le premier à  approcher pour toute déclaration,modification et cessation d'activité.
                                                  </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  Direction des Grandes Entreprises: 1 (Amparibe)

                                                    Diection Régionale des Impôts : 14 (Alaotra mangoro, Analamanga, Anosy, Atsinanana, Atsimo Andrefana, Boeny,Diana,  Haute Matsiatra, Itasy, Menabe, Sava, Sofia, Vakinakaratra, Vatovavy Fitovivany)

                                                    Service Régionale des Entreprises: 9 (Analamanga1 et 2, Atsimo Andrefana, Atsinanana, Boeny, Diana, Haute Matsiatra, Vatovavy Fitovinany, Vakinakaratra)

                                                    Centre Fiscal: 89
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>

                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                          <Card>
                              <Card.Header key="1">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="1"  className="classeur_centre_stat">
                                  <p className="description_entite"> Institut statistique</p>
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="1">
                                  <Card.Body>
                                      <Row>
                                          <Col xs={12} md={4}>


                                                  <Card>
                                                      <Card.Header>
                                                          <h6></h6>
                                                      </Card.Header>
                                                      <Card.Body className="texte_guide_creation">
                                                      L’INSTAT a pour mission de concevoir et de coordonner la mise en œuvre de la politique nationale en matière de statistique et de ses champs d’application dans les domaines économiques, démographique et social ainsi que de l’appui scientifique et technique à la gestion de l’économie nationale. L’INSTAT est également le dépositaire et le gestionnaire des nomenclatures des statistiques officielles de Madagascar.
                                                      </Card.Body>
                                                  </Card>


                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                    La carte statistique permet l'identification des établissements créés et leurs activités. L'objectif est de suivre le mouvement des établissements ainsi que les statistiques sur les activités pour les entreprises formalisées à Madagascar.
                                                    La carte statistique est obtenue uniquement avec la preuve de la déclaration d'activité dans un centre fiscal (bordereau de versement Impôt)
                                                  </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                    1 bureau central Antananarivo Anosy
                                                    22 bureaux INSTAT
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>

                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                          <Card>
                              <Card.Header key="2">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="2" className="classeur_centre_rcs" >
                                  <p className="description_entite"> Registre de commerce et des sociétés</p>
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="2">
                                  <Card.Body>

                                      <Row>
                                          <Col xs={12} md={4}>


                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  Le Registre du Commerce et des Sociétés (RCS) est un registre tenu au sein de chaque Tribunal de Première Instance (TPI), destiné à recueillir et à publier des informations juridiquement importantes relatives aux commerÇants et aux personnes morales assujetties à l'immatriculation. C'est un outil à la transparence des Entreprises, le RCS est accessible à tous.
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  toute entreprise exerçant une activité commerciale doit obligatoirement s’inscrire au RCS auprès du TPI référent (en fonction du siège social).Cette inscription est à réaliser au moment de la création de la société.
L’inscription au RCS permet de se voir attribuer la personnalité morale
                                                  </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  44 Tribunaux de Première Instance
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>

                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                          <Card>
                              <Card.Header key="3">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="3" className="classeur_centre_edbm" >
                                  <p className="description_entite"> Economic Development Board of Madagascar</p>
                                  </Accordion.Toggle>

                              </Card.Header>
                              <Accordion.Collapse eventKey="3">
                                  <Card.Body>

                                      <Row>
                                          <Col xs={12} md={4}>


                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">

                                                        L’EDBM est l’expression institutionnelle de la volonté du Gouvernement de booster la croissance économique et de créer des emplois à travers la mise en place et le développement de projets maximisant les bénéfices de Madagascar et lesquels sont portés aussi bien par les étrangers que les nationaux.
                                                        Missions
                                                        Améliorer le climat des affaires
                                                        Construire et véhiculer une image positive de Madagascar en tant que destination propice aux investissements, et attirer et encourager les multinationaux et les opérateurs locaux à investir dans les secteurs prioritaires
                                                        Fournir des services gratuits aux investisseurs, aussi bien nouveaux que déjà installés (aftercare), pour faciliter l’implémentation et/ou l’expansion de leur(s) projet(s) à Madagascar

                                                        Une équipe multidisciplinaire fournit des services gratuits, confidentiels et personnalisés tout au long du processus
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6> </h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">


                                                  Dans le cadre de la mission de fournir des services aux entrepreneurs et investisseurs, L'EDBM mets à disposition un guichet unique pour les procédures d'immatriculation, modification et cessation d'activité, l’obtention de vos permis-licences-autorisations et visas.
Toutes les entités concernés par les démarches proposées sont directement présentes dans chaque guichet unique pour favoriser la rapidité des traitement des dossiers.



                                                  </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h6></h6>
                                                  </Card.Header>
                                                  <Card.Body className="texte_guide_creation">
                                                  Les guichets uniques sont présents dans toutes les régions de Madagascar : Antananarivo, Antsirabe, Toamasina,  Nosy Be, Antsiranana, Toliary.

                                                    Réception des dossiers, du lundi au vendredi : 8h30 à 12h00
                                                    Délivrance, du lundi au vendredi : 13h30 à 16h00
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>
                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>

    </Accordion>

    </Col>
              </Row>

              {/*PART 5*/}
          </ScrollableAnchor>
          {/*<a href="#menu"><Image src={arrow} rounded  className="RoundButton"/></a>*/}
          <ScrollableAnchor className='p-0'    id="activite" >
              {/*PART 6*/}
              <Row className='ml-5 mr-5 pb-5  '>
                  <Col>
                      <h1 className="App titre-info">Guide de création</h1>


                      <Accordion className='InfosElements' defaultActiveKey="0">
                          <Card>
                              <Card.Header key="0">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                  Avant de créer une société
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                      <Row>
                                          <Col xs={12} md={4}>
                                              <Card>
                                                  <Card.Header>
                                                      <h3>Les notions de bases</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <ol>
                                                          <li> <b className="bold">1. Entrepreneur:</b>  un individu ayant une activité génératrice de revenus (vendeur de rues, petite gargotte, freelance à ses heures perdues, …).</li>
                                                          <li><b className="bold">2.Société de fait </b>: un contrat, écrit ou non, entre 2 à plusieurs personnes pour exprimer leur volonté de mettre en commun des biens (financiers, matériels ou compétences) dans un projet afin de partager d’en partager les bénéfices ou profiter de l’économie qui en résulte.</li>
                                                           <li><b className="bold">3. La formalisation </b> : consiste à déclarer à l’administration la constitution d’une société qui aura alors  des identifications fiscales et statistiques la différenciant des autres sociétés de même activité ainsi qu’une identité juridique distincte de celle des personnes qui la constituent.</li> 
                                                      </ol>
                                                  </Card.Body>
                                              </Card>
                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h3>Les avantages de la formalisation :</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <p className="texte_guide_creation">
                                                    <li>La clarification des engagements et les bénéfices correspondants pour chaque personne impliquée.</li>
                                                    <li>L’accès aux financements (prêts bancaires, investissements,...) et appuis spécifiques aux entreprises (formations, annuaires professionnels,..).</li>
                                                    <li>La possibilité de participer aux appels d'offres publics ou devenir les fournisseurs ou distributeurs de grandes sociétés.</li>
                                                    <li> La possibilité de participer aux foires, salons et manifestations commerciales, économiques nationale et internationale.</li>
                                                    <li>La sécurisation et la couverture légale de son fonds de commerce.</li>
                                                    <li>La protection contre la concurrence déloyale.</li>
                                                    <li>Le fait de ne pas s’exposer aux sanctions de l’Etat, de limiter la fraude fiscale et de contribuer à l’animation de la vie économique du pays,</li>
                                                    
                                                    </p>
                                                    </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h3>Bon à savoir :</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <p>
                                                      1. <b className="bold">Quel type de société pour mon projet?</b> est la première question à se poser et les critères à considérer sont :
                                                   
                                                 
                                                <li>  la volonté de s’associer (rester seul maître à bord vs associer d’autres visions).</li>
                                                <li>  le choix de l’activité (spécifiquement associé à mes compétences vs multiples expertises).</li>
                                                <li> les besoins financiers (minimum d’investissement vs besoins en produits/matériels/services).</li>
                                                <li>la gestion des patrimoines (distinguer les biens personnels et ceux générés par l’activité).
                                                    Une fois les critères décidés, vous pouvez voir le type de société correspondant dans la rubrique “Formes Juridiques”.</li>
                                                    
                                                    2. <b className="bold">Comment créer une société? </b>: Constituer une société implique un certain nombre de documents à fournir et d’approcher plusieurs entités.

                                                    <li>les documents minimum : justificatifs d’identité et de résidence, justificatifs de siège social (peut être votre domicile personnel), les statuts de la société.
                                                    </li>
                                                    <li>Les entités à approcher : le centre fiscal pour la déclaration d’activité, l’institut statistique pour l’identification statistique, le Tribunal de Première Instance pour l’inscription au registre des commerce et des sociétés. Celles-ci sont présentes dans les guichets uniques de l’EDBM.
                                                    </li>  Déterminer le dossier à constituer pour votre projet en utilisant l’outil “Constituer son dossier”.
                                                    </p>
                                               
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>

                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                          <Card>
                              <Card.Header key="1">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="1" >
                                  Créer une société
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="1">
                                  <Card.Body>
                                      <Row>
                                          <Col xs={12} md={4}>


                                                  <Card>
                                                      <Card.Header>
                                                          <h3>Statuts de société</h3>
                                                      </Card.Header>
                                                      <Card.Body>
                                                             <p className="texte_guide_creation">
                                                             Document  qui consigne les obligations auxquelles chaque associé se soumet et préciser ses droits.
                                                            Contenu :
                                                            <li>l'identification des associés avec précisions de l'identité du représentant en cas d'un associé personne morale.</li>
                                                           <li>la forme juridique de la société.</li>
                                                           <li>la dénomination sociale avec le nom commercial et le sigle, le cas échéant.</li>
                                                           <li>l'objet social qui définit la nature et le domaine de l'activité.</li>
                                                           <li>le siège social.</li>
                                                           <li>la durée : maximum 99 ans.</li>
                                                           <li>l'exercice social ou période correspondant à l'année fiscale d'une entreprise.</li>
                                                           <li>es apports pour chaque associés : numéraires, en nature ou industriels.</li>
                                                           <li>le montant du capital social = la somme des apports (numéraire et nature).</li>
                                                           <li>le nombre et la valeur des parts sociaux correspondant.</li>
                                                           <li>les modalités de son fonctionnement : nomination des dirigeants et définition de la durée de leurs fonctions et de leur pouvoirs.</li>
                                                            </p>
                                                      </Card.Body>
                                                  </Card>


                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h3>Objet social</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <p className="texte_guide_creation">
                                                        
                                                      <b className="bold">1. Définition : </b> liste des activités qu’une société exerce, va exercer ou pourrait exercer au cours de sa vie sociale. L’objet social concerne les sociétés uniquement.
                                                      <br></br><b className="bold"> 2. Règles de rédaction : </b>Règles de rédaction : 
                                                      <li>contient l’activité principale qui permet l’identification statistique de la société (voir NOMAC)</li>
                                                       <li>précis, explicite et possible tout en restant ouvert sur les futures activités de la société et éviter le dépassement d’objet social.</li>
                                                        <li>Mentions : activité "Import-export" si à termes on compte commercer avec l'étranger,  « et toutes autres activités et opérations pouvant se rattacher directement ou indirectement à ces activités » pour couvrir le développement de l’activité.</li>
                                                        <br></br><b className="bold"> 3. Dépassement d’objet social: </b>
                                                        est du fait d’un dirigeant de société quand il accomplit un ou des actes dépassant la liste des activités prévues dans les statuts. Le dépassement peut entraîner des sanctions telle que la nullité de la société et même engager des responsabilités pénales ou civiles.
                                                        
                                                        
                                                        </p>

                                                  </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h3>Activités réglementées</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <p className="texte_guide_creation">
                                                      Certaines activités sont soumis à une réglementation particulière et nécessitent des autorisations spécifiques pour être exercées en toute légalité. Les secteurs d’activités concernés sont :
                                                        <li>Prestations Touristiques ;</li>
                                                        <li>Professions de la santé ;</li>
                                                        <li>Activité minière ;</li>
                                                        <li>Télécommunication (station radio et TV) ;</li>
                                                        <li>Jeux de hasard / casino  ;</li>
                                                        <li>Production importation et commercialisation tabac et alcool ;</li>
                                                        <li>Établissement financier ;</li>
                                                        <li>Placement de personnel (gardiennage, sécurité) ;</li>
                                                        <li>Éducation (établissements d’enseignement et de formation)</li>
                                                        <li>Transport public et de marchandises</li>
                                                        <li>Commerce de gros</li>
                                                    </p>
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>

                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                          <Card>
                              <Card.Header key="3">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="3" >
                                  Exemples d’objet social 
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="3">
                                  <Card.Body>

                                      <Row>
                                          <Col xs={12} md={4}>


                                              <Card>
                                                  <Card.Header>
                                                      <h3>Pour les artisans</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                    <p className="texte_guide_creation">Exemples d’objets sociaux pour les artisans <br></br>
                                                     <li> Confection vente/achat : "la confection, l'achat, la vente en boutique ou en ligne, l’importation, l’exportation, de vêtements de prêt-à-porter, d’accessoires de mode, de maroquinerie, de matières premières, de textiles, de cuir, d’accessoires d’assemblage et toute autre matière utile et nécessaire à la confection des créations." </li>
                                                     <li> Coiffure :"tout type de soins pour la beauté, pour la femme, l’homme et l’enfant, la coiffure, le maquillage, les ongles, les soins du visage et du corps. L’achat vente de tous types de produits relevant de cette activité." </li>
                                                     <li> Boulangerie : “la fabrication à caractère artisanal et la vente de produits de boulangerie.” </li>
                                                     <li> Garagiste : "toute activité de négoce, d’achat, de vente, de location, de réparation et d’entretien de tous véhicules automobiles, commerce de détail de tous accessoires, équipements et pièces détachées se rapportant à l'automobile, de tous carburants, lubrifiants et produits d'entretien." </li>
                                                     <li> Maçonnerie : "toute activité de maçonnerie, de carrelage, de peinture, de plomberie, d’électricité, ainsi que tous travaux du bâtiment. Pose de faux plafond, cloisons, travaux de vitrerie, ravalement intérieur et extérieur." </li>
                                                     <li> Electricité générale : "toute activité de réalisation, d'installation, d'achat, de vente, de pose se rapportant aux activités concernant : l'électricité générale courant fort et faible, domotique et tous systèmes électriques" </li>
                                                     <li>  Artisanat :" toute réalisation d’activités, de confection de manière individuelle et artisanale, la création d’objet divers, la transformation d’objet par une réalisation manuelle, ou par l’intermédiaire d’instruments traditionnels."</li></p>

                                                   </Card.Body>
                                                </Card>


                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h3>Pour les commerçants</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <p className="texte_guide_creation">
                                                      Exemples d’objets sociaux pour les commerçants<br></br>
                                                        <li>Epicerie : "Commerce de détail d'alimentation générale et produits non alimentaires"</li>
                                                        <li>Fast-food : "la fourniture au comptoir d'aliments et de boissons à consommer sur place ou à emporter, présentés dans des conditionnements jetables. La vente peut être dans une salle sur place ou dans des équipements mobiles."</li>
                                                        <li>boutique de vêtements : “le commerce de détail de tissus et de textiles en magasin spécialisé.L’achat et vente, importation et exportation de toutes marchandises de type textile ou accessoires d’habillement et de mode, et activités connexes.”</li>
                                                        <li>intermédiaire de l'automobile : “le commerce de détail de véhicules automobiles neufs ou d'occasion pour le transport des personnes, y compris les véhicules spéciaux tels qu'ambulances, minibus, etc.”</li>
                                                        <li>magasin d'optique : “vente et montages de verres correcteurs, vente de lunettes, vente de lentilles de contact, vente de produits d'entretien pour les lunettes et les lentilles, vente d'articles divers.”</li>
                                                        <li>Quincallerie/bricolage : "achat et  vente de tous  produits, de matériel de bricolage, d’outillage, jardinage, de produits d'entretiens."</li>
                                                        <li>Import-export : "toute activité d’achat et de vente, d’importation et d’exportation de toutes marchandises alimentaires ou non alimentaires. La commercialisation et la distribution de ces marchandises, et toute activité connexe."</li>
                                                        <li>BTP : "tout type de travaux de BTP, de construction, de rénovation tout corps d’État en entreprise générale, la réalisation d’études techniques, le conseil, l’analyse des essais, la gestion de projets et d’affaires, acquisition pour son propre compte et gestion de toutes valeurs mobilières."</li>
                                                      </p>
                                                  </Card.Body>
                                              </Card>

                                          </Col>
                                          <Col xs={12} md={4}>

                                              <Card>
                                                  <Card.Header>
                                                      <h3>Pour les entreprise de services</h3>
                                                  </Card.Header>
                                                  <Card.Body>
                                                      <p className="texte_guide_creation">
                                                    Exemples d’objets sociaux pour les entreprise de services<br></br>
                                                    <li>Activités immobilières : "L’acquisition, l’administration, la gestion par location ou autrement de tous immeubles et biens immobiliers, la vente de tous immeubles et biens immobiliers."</li>
                                                    <li>cabinet de conseil en relations publiques et communication : "conseil et assistance opérationnelle apportés aux entreprises et autres organisations en matière de relations publiques et de communication"</li>
                                                    <li>société de graphisme : "la création d’objets de communication visuelle, notamment la création des éléments graphiques de sites internet ou d'applications mobiles"</li>
                                                    <li>Conseil et gestion : "toute activité d’aide et d’accompagnements, de service, de conseils aux particuliers et aux entreprises, d’aide à la rédaction et la fourniture de documents administratifs, de recherche, de conseil et de suivi pour l’accession au financement et toutes autres aides d’état. L’aide aux particuliers et aux entreprises pour leurs développements, la transformation de leur d’activité."</li>
                                                    <li>Audiovisuel : "toute activité de production audiovisuelle. La production, la réalisation et la fourniture de prestations audiovisuelles, de rédaction d’articles, vidéo sonore ou muette pour tout support télévisuel, internet, dvd, presse."</li>
                                                    <li>site e-commerce : Toutes operations pouvant se rattacher directement ou indirectement à l'achat et la vente au détail sur internet de tous articles et produits marchands non reglementes sous toutes ses formes d'operations et tous services pouvant s'y rattacher.</li>
                                                    <li>Agence de communication : "Agence de communication tous supports web Print événementiel ,conseil en relations publiques et communication, activités Pre-Presse, gestion d'événements, conseils en stratégie d'entreprise, programmation informatique"</li>
                                                    <li>Programmation informatique: "Création et exploitation de sites internet, conseil en système et logiciels informatiques, portail internet, programmation informatique"</li>
                                                      </p>
                                                  </Card.Body>
                                              </Card>


                                          </Col>
                                      </Row>
                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                 </Accordion>
                 <Row className='pt-5 lien_activite'>
                              <Col xs={12} md={4} className='text-center p-2'>
                              <Link to="/dossier_activite" className='activite'> <Button className="btn_lien_activite">Aidez-moi à trouver mon activité </Button></Link>
                              </Col>

            </Row>

            {/*<a href="#menu"><Image src={arrow} rounded  className="RoundButton"/></a>*/}



                      <ScrollArrow />





                      {/*<Accordion className='InfosElements'>

                          <Row>
                              <Col xs={12} md={4} className='d-flex'>
                                    <div className="ActivityBlock flex-1">

                                        <div className="ActivityPIct"></div>
                                        <div className="ActivityTtl"><h5>Activités du bâtiment</h5></div>
                                        <div className="ActifityContent">
                                            Bâtiment et travaux publics
                                        </div>
                                    </div>

                              </Col>
                              <Col xs={12} md={4} className='d-flex'>
                                  <div className="ActivityBlock flex-1">

                                      <div className="ActivityPIct"></div>
                                      <div className="ActivityTtl"><h5>Activités du secteur alimentaire</h5></div>
                                      <div className="ActifityContent">
                                          Production, fabrication, transformation, conditionnement, entreposage, transport de produits alimentaires ou d'aliments  pour animaux
                                      </div>
                                  </div>

                              </Col>
                              <Col xs={12} md={4} className='d-flex'>
                                  <div className="ActivityBlock flex-1">

                                      <div className="ActivityPIct"></div>
                                      <div className="ActivityTtl"><h5>Activités du secteur de la santé</h5></div>
                                      <div className="ActifityContent">
                                          Auxiliaires Médicaux <br/>
                                          Chirurgie-dentaire
                                      </div>
                                  </div>

                              </Col>
                          </Row>

                          <Row className='pt-5'>
                              <Col xs={12} md={4} className='text-center p-2'>
                                    <Link to='/' className='linksColored'>Aidez-moi à trouver mon activité</Link>
                              </Col>
                              <Col xs={12} md={4} className='text-center p-2'>
                                  <Link to='/' className='ButtonsLink  text-uppercase'>AUTRES ACTIVITES</Link>
                              </Col>

                          </Row>


</Accordion>*/}
                  </Col>
              </Row>
              {/*PART 6*/}
          </ScrollableAnchor>

            <div className="mb-5"></div>

          </main>


      <Footer />
      </div>
    )
  }
  }
  const mapStateToProps= state=>{
    return{

        formejuridique:state.information.formeJuridiques,
        regimeFiscaux:state.information.regimeFiscaux
    }
};

  export default connect(mapStateToProps,actionCreators) (Information);
