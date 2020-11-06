import axios from "axios";
import * as APIConfig from "../../constants/APIConfig";
import * as types from '../../constants/OutilsActionTypes'

export function listeSection(){
    
    var ressource='listeSectionActivite';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                                {       headers: {
                                                'Content-Type': 'application/json',
                                                Accept: 'application/json',
                                                Authorization:authorization ,
                                                //'Access-Control-Allow-Origin': '*',
                                                }})
                                .then((response)=>{
                                                const formattedData = [];
                                                const section = Object.values(response.data.sectionActivites);
                                                console.log(response);
                                                section.forEach(task =>
                                                    Object.entries(task).forEach(([key, value]) =>
                                                                                formattedData.push({  
                                                                                    idSectionActivite:value['idSectionActivite'],
                                                                                    libelleSectionActivite:value['libelleSectionActivite']
                                                                                })
                                    ));
                                dispatch(updateListeSection(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeSection(listeSection)
{
    return{
            type:types.LISTE_SECTION_ACTIVITE,
            section:listeSection
    }
}

//********************************LISTE DIVISION ACTIVITE  */
export function listeDivision(request){
    console.log('je avoir:'+request)
    var ressource='listeDivisionActivite';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        {   headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                    //'Access-Control-Allow-Origin': '*',
                                    },
                            params:{
                                codeSectionActivite:request
                            }
                                })
                        .then((response)=>{
                                const formattedData = [];
                                const section = Object.values(response.data.divisonActivites);
                                console.log(response);
                                section.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idDivisionActivite:value['idDivisionActivite'],
                                                                    libelleDivisionActivite:value['libelleDivisionActivite']
                                                                })
                                    ));
                                dispatch(updateListeDivision(formattedData));
                                console.log(formattedData);
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeDivision(listeDivision)
{
    return{
            type:types.LISTE_DIVISION_ACTIVITE,
            division:listeDivision
    }
}

//********************************LISTE GROUPE ACTIVITE  */
export function listeGroupe(request){
    
    var ressource='listeGroupeActivite';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        {   headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                    //'Access-Control-Allow-Origin': '*'
                                    },
                            params:{
                                idDivisionActivite:request
                            }
                                })
                        .then((response)=>{
                                const formattedData = [];
                                const section = Object.values(response.data.groupeActivites);
                                console.log(response);
                                section.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idGroupeActivite:value['idGroupeActivite'],
                                                                    libelleGroupeActivite:value['libelleGroupeActivite']
                                                                })
                                    ));
                                dispatch(updateListeGroupe(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeGroupe(listeGroupe)
{
    return{
            type:types.LISTE_GROUPE_ACTIVITE,
            groupe:listeGroupe
    }
}
//********************************LISTE CLASSE ACTIVITE  */
export function listeClasse(request){
    
    var ressource='listeClasseActivite';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        {   headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                   // 'Access-Control-Allow-Origin': '*'
                                    },
                            params:{
                                idGroupeActivite:request
                            }
                                })
                        .then((response)=>{
                                const formattedData = [];
                                const section = Object.values(response.data.classeActivites);
                                console.log(response);
                                section.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idClasseActivite:value['idClasseActivite'],
                                                                    libelleClasseActivite:value['libelleClasseActivite']
                                                                })
                                    ));
                                dispatch(updateListeClasse(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeClasse(listeClasse)
{
    return{
            type:types.LISTE_CLASSE_ACTIVITE,
            classe:listeClasse
    }
}
//**********************LISTE CATEGORIE */
export function listeCategorie(request){
    
    var ressource='listeCategorie';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        {   headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                    },
                            params:{
                                codeClasse:request
                            }
                                })
                        .then((response)=>{
                                const formattedData = [];
                                const section = Object.values(response.data.listeCategories);
                                console.log(response);
                                section.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    codeCategorie:value['codeCategorie'],
                                                                    descriptivesCategorie:value['descriptivesCategorie']
                                                                })
                                    ));
                                dispatch(updateListeCategorie(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeCategorie(listeCategorie)
{
    return{
            type:types.LISTE_CATEGORIE_ACTIVITE,
            categorie:listeCategorie
    }
}