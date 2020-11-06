import axios from "axios";
import * as APIConfig from "../constants/APIConfig";
import * as types from '../constants/FAQActionTypes'
import { listeFormeJuridique } from "./Information";

export const question_sujet=[];
export function listeTHEME(){
    var ressource='listeTheme';
    console.log('call')
    var authorization=APIConfig.ACCES_SITE_INFORMATION;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SITE_INFORMATION+ressource,
                        {   
                           
                            headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: 'application/json',
                            Authorization:authorization ,

                        }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.listethemes);
                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idTheme:value['idTheme'],
                                                                    theme:value['theme']
                                                                     })
                                                             )
                                    );
                                dispatch(updateListeTheme(formattedData));
          
                         })
                        .catch((error) => {
                            console.log(error)
                        })
    }
}
export function updateListeTheme(listeTheme)
{
    return{
            type:types.LISTE_THEME,
            theme:listeTheme
    }
}

export function listeSujet(request){
    var ressource='listeSujet';
    var authorization=APIConfig.ACCES_SITE_INFORMATION;
    var questionRep=null;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SITE_INFORMATION+ressource,
                        {   
                           
                            headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: 'application/json',
                            Authorization:authorization ,

                        },params:{
                            idTheme:request
                        }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.sujets);
                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                { 
                                                    //questionRep=listeQR(value['idSujet'])
                                                    
                                                    /*question.forEach(([key, value]) =>{
                                                        console.log(value['idSujet'])
                                                    })*/
                                                                formattedData.push({  
                                                                    idSujet:value['idSujet'],
                                                                    sujet:value['sujet'],
                                                                    idTheme:value['idTheme']
                                                                    
                                                                     })
                                                                  
                                                            
                                                                    })
                                    );
                               
                                /*formattedData.map(post=> {questionRep=listeQR(post.idSujet)
                                    //console.log(questionRep)
                                    //console.log(questionRep)
                                  questionRep.forEach(task =>
                                        Object.entries(task).forEach(([key, value])=>{console.log(value['idSujet'])}));
                                   
                               })*/ 
                               // console.log(question_sujet)
                               // dispatch(updateListeQuestionReponse(question_sujet));
                                dispatch(updateListeSujet(formattedData));

                                //dispatch(updateListeQuestionReponse(questionRep));
                                //questionRep.map(post=>{return(console.log(questionRep.idSujet))})
                                
          
                         })
                        .catch((error) => {
                            console.error(error)
                        })
    }
}
export function updateListeSujet(listeSujet)
{
    return{
            type:types.LISTE_SUJET,
            sujet:listeSujet
    }
}
export function listeQuestionReponse(){
    var ressource='listeAllQuestionReponse';
    var authorization=APIConfig.ACCES_SITE_INFORMATION;
   
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SITE_INFORMATION+ressource,
                        {   
                           
                            headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: 'application/json',
                            Authorization:authorization ,

                        }
                        })
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.listeQuestionReponses);
                               
                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idTheme:value['idTheme'],
                                                                    idSujet:value['idSujet'],
                                                                    question:value['question'],
                                                                    reponse:value['reponse'],
                                                                    id:value['id']
                                                                    
                                                                     })
                                                             )
                                    );
                                dispatch(updateListeQuestionReponse(formattedData));
                              
          
                         })
                        .catch((error) => {
                            console.error(error)
                        })
                       // return listeQuestionReponse;
    }
}
export function updateListeQuestionReponse(listeQR)
{
    return{
            type:types.LISTE_QUESTION,
            questionFAQ:listeQR
    }
}

// local
export function listeQR(idsujet){
   
    var ressource='listeQuestionReponse';
    var authorization=APIConfig.ACCES_SITE_INFORMATION;
   // const formattedData = questionReponse;
   var list = [];
 axios.get(APIConfig.API_URI_SITE_INFORMATION+ressource,
                        {   
                           
                            headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: 'application/json',
                            Authorization:authorization ,

                        },params:{
                            idSujet:idsujet
                        }})
                        .then((response)=>{
                                
                                const forme = Object.values(response.data.listeQuestionReponses);
                                const questionReponse=[]
                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                    questionReponse.push({  
                                                                    idTheme:value['idTheme'],
                                                                    idSujet:value['idSujet'],
                                                                    question:value['question'],
                                                                    reponse:value['reponse']
                                                                    
                                                                     })
                                                                     
                                                             )
                                                                         
                                    );
                                    //list.push.apply(list, questionReponse.slice(0));
                                  
                                    question_sujet.push({
                                        idSujet:idsujet,
                                        question_reponse:  questionReponse
                                    })
                                    updateListeQuestionReponse(questionReponse)
                                    //insertAt(question_sujet,idsujet,questionReponse)
          
                         })
                        .catch((error) => {
                            console.error(error)
                        })
                       
                      
                        return list
                        //
                      
                    
    
}
function insertAt(array, index, ...elementsArray)
 {    array.splice(index, 0, ...elementsArray);}