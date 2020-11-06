import axios from "axios";
import * as APIConfig from "../../constants/APIConfig";
import * as types from '../../constants/DossierActionTypes'

export function listeProcedure(){
    
    var ressource='listeProcedure';
    var authorization=APIConfig.ACCESS_DOSSIER;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_DOSSIER+ressource,
                        { headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization:authorization ,
                        }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.procedures);
                                console.log(response);
 

                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idProcedure:value['idProcedure'],
                                                                    nomProcedure:value['nomProcedure']
                                                                   
                                                                })
                                    ));
                                dispatch(updateListeProcedure(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeProcedure(listeProc)
{
    return{
            type:types.LISTE_PROCEDURE,
            procedures:listeProc
    }
}
export function listeActiviteReglemente(){
    
    var ressource='listeActiviteReglemente';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        { headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization:authorization ,
                        }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.activiteReglementes);
                                console.log(response);
 

                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idActiviteReglemente:value['idActiviteReglemente'],
                                                                    nomActiviteReglemente:value['nomActiviteReglemente']
                                                                   
                                                                })
                                    ));
                                dispatch(updateListeActiviteReglemente(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeActiviteReglemente(listeActiviteReglemente)
{
    return{
            type:types.LISTE_ACTIVITE_REGLEMENTE,
            activiteReglementes:listeActiviteReglemente
    }
}
export function listeDossier(request){
    console.log('function liste dossier'+request.codeFormeJuridique);
    var ressource='listeDossierFormeJuridique';
    var authorization=APIConfig.ACCESS_DOSSIER;
   // console.log('function liste dossier'+request.codeFormeJuridique);
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_DOSSIER+ressource,
                        { headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                    },
                          params: {
                              idProcedure:request.idProcedure ,
                              codeFormeJuridique:request.codeFormeJuridique
                            }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.dossierFormeJuridiques);
                                console.log(response);
 

                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    nomDossier:value['nomDocument']
                                                                })
                                    ));
                                dispatch(updateListeDossier(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
                        
    }
    
}
export function updateListeDossier(dossiersFJ)
{
    return{
            type:types.LISTE_DOSSIER_FORMEJURIDIQUE,
            dossiersFJ:dossiersFJ
    }
}
export function listeDossierActiviteReglemente(){
   // console.log('function liste dossier'+request.idProcedure);
    var ressource='listeDossierActiviteReglemente';
    var authorization=APIConfig.ACCESS_DOSSIER;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_DOSSIER+ressource,
                        { headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization:authorization ,
                                    },
                          })
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.documentActivites);
                                console.log(response);
 

                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    casUtilisation:value["casUtilisation"],
                                                                    nomDocument:value["nomDocument"],
                                                                    dossierCreation:["dossierCreation"],
                                                                    entiteDelivrance:["entiteDelivrance"]
                                                                })
                                    ));
                                dispatch(updateListeDossierActiviteReglemente(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeDossierActiviteReglemente(dossiersAR)
{
    return{
            type:types.LISTE_DOSSIER_ACTIVITE_REGLEMENTE,
            dossierAR:dossiersAR
    }
}