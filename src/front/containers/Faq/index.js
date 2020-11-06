import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import NavBarAll from '../../components/header/navbarall'
import HeaderCreationEntreprise from'../../components/homecarousel/faq'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/FaqAction'
import {Container, Row, Col, Accordion, Card, Image} from "react-bootstrap"

class Faq extends Component{
    constructor(props)
     {
            super(props);
            console.log('hello')
            this.props.listeTHEME();
            //this.props.listeQuestionReponse()
            this.state={
                sujets:[{sujet:'',question_reponse:{question:'',reponse:''}}],
                question_rep:'',
                contenu:null,
               
                
            }
           
           
     }

     getListeSujet(idTheme){
        this.props.listeSujet(idTheme);
     }
    
     componentDidMount() {
        this.props.listeTHEME()
        window.addEventListener('DOMContentLoaded', this.props.listeTHEME);
        window.addEventListener('DOMContentLoaded', this.props.listeSujet(1));
        window.addEventListener('DOMContentLoaded', this.props.listeQuestionReponse);
        
        const listeQuestionReponse=this.props.questionFAQ;
        console.log(this.props.sujet)
        
      
    }
     
    render(){
        const listeTHEMEs=this.props.theme;
        const listesujets=this.props.sujet;
        const questionReponse=this.props.questionFAQ;
        console.log("question"+questionReponse)
        return (
             <div>
                <NavBarAll/>
                <HeaderCreationEntreprise/>
                <FullWidthTabs listeTheme={listeTHEMEs} listeSujet={listesujets} questionReponse={questionReponse}/>

               <Footer/>
             </div>
        )
    }
}
const mapStateToProps= state=>{
    return{

        theme:state.faq.theme,
        sujet:state.faq.sujet,
        questionFAQ:state.faq.questionFAQ
    }
};
export default connect(mapStateToProps,actionCreators)(Faq);



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));
 function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        
                                        {props.listeTheme.length?(
                                            props.listeTheme.map(post=>{
                                             
                                            return(
                                            <div>
                                                <h3 className="titre-accordion">{post.theme}</h3><br></br>
                                                <AppBar position="static" color="default">
                                                
                                                <Tabs
                                                    value={value}
                                                    onChange={handleChange}
                                                    indicatorColor="primary"
                                                    textColor="primary"
                                                    variant="fullWidth"
                                                    aria-label="full width tabs example"
                                                    >

                                                   
                                                            {props.listeSujet.length?(props.listeSujet.map(sujet=>{
                                                                return(
                                                                  
                                                                <Tab label={sujet.sujet}{...a11yProps(sujet.idSujet)} />
                                                            )})):(<p>aucun Sujet</p>)}
                                                 
                                                </Tabs>
                                                 </AppBar>
                                            </div>)
                                        
                                    })
                                ):(<p> Aucun theme pour le moment!</p>)}
               <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
              >
                {props.listeSujet.length?(props.listeSujet.map(sujet=>{
                return(   
                  <div id={sujet.idSujet}>
              <TabPanel value={value} index={sujet.idSujet-1} dir={theme.direction} > 
                <Accordion>
                                            {
                                                props.questionReponse.length?(props.questionReponse.map(qr=>{if(qr.idSujet===sujet.idSujet){ return(
                                                
                                                 <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey={qr.question} className="cursor-pointer">
                                                <h3 className="m-0 p-0 d-flex flex-row flex-nowrap justify-content-between">{qr.question}</h3>
                                                    </Accordion.Toggle>
                                                  <Accordion.Collapse eventKey={qr.question}>
                                                         <Card.Body>
                                                                <p>{qr.reponse}
                                                                </p>
                                                         </Card.Body>
                                                     </Accordion.Collapse>
                                                     
                                                </Card>    
                                                )}})):(<p>Pas de question</p>)
                                                }
                                              </Accordion>
            </TabPanel>
            </div>
           
               
       )})):(<p>pas de sujet</p>)}</SwipeableViews>
     
    </div>
  );
}
