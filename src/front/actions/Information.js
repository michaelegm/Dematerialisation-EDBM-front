import axios from "axios";
import * as APIConfig from "../constants/APIConfig";
import * as types from '../constants/InformationActionTypes'

export function listeFormeJuridique(){
    var ressource='formeJuridique';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        {   
                            //withCredentials: true,
                            //credentials: 'same-origin',
                            //mode: 'no-cors',
                            headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: 'application/json',
                            Authorization:authorization ,
                        // Authorization:authorization ,

                        }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.formejuridiques);
                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idFJ:key,
                                                                    codeFormeJuridique:value['codeFormeJuridique'],
                                                                    libelleFormeJuridique:value['libelleFormeJuridique'],
                                                                    caracteristique:value['caracteristique'],
                                                                    casUtilisation:value['casUtilisation'],
                                                                    responsabilite:value['responsabilite'],
                                                                    description:value['description'] })
                                                                    
                                                             )
                                    );
                                dispatch(updateListeFormeJuridique(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                        })
    }
}
export function updateListeFormeJuridique(listeFJ)
{
    return{
            type:types.LISTE_FORME_JURIDIQUE,
            formeJuridiques:listeFJ
    }
}
export function listeRegimeFiscal(){
    var ressource='regimeFiscaux';
    var authorization=APIConfig.ACCESS_SOCIETE;
    return(dispatch)=>{
                    return axios.get(APIConfig.API_URI_SOCIETE+ressource,
                        { headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Accept: 'application/json',
                           // 'Access-Control-Allow-Headers': 'authorization,Access-Control-Allow-Origin,Content-Type',
                            Authorization:authorization ,
                     

                        }})
                        .then((response)=>{
                                const formattedData = [];
                                const forme = Object.values(response.data.regimeFiscaux);
                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idRF:key,
                                                                    libelleRegimeFiscal:value['libelleRegimeFiscal'],
                                                                    acroRegimeFiscal:value['acroRegimeFiscal'],
                                                                    caracteristique:value['caracteristique'],
                                                                    casutilisation:value['casutilisation'],
                                                                    responsabilite:value['responsabilite']
                                                                }))
                                    );
                                dispatch(updateListRegimeFiscaux(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                        })
    }
}
export function updateListRegimeFiscaux(listeRF)
{
    return{
            type:types.LISTE_REGIME_FISCAL,
            regimeFiscaux:listeRF
    }
}
export function listeActiviteReglementeDetail(){
    
    var ressource='listeActiviteReglementeDetail';
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
                                const forme = Object.values(response.data.listeActiviteReglementeDetails);
                                console.log(response);
 

                                forme.forEach(task =>
                                    Object.entries(task).forEach(([key, value]) =>
                                                                formattedData.push({  
                                                                    idActivitedetail:value['idActivitedetail'],
                                                                    libelleActivitedetails:value['libelleActivitedetails'],
                                                                    detailActivitedetails:value['detailActivitedetails']
                                                                   
                                                                })
                                    ));
                                dispatch(updateListeActiviteReglementeDetail(formattedData));
          
                         })
                        .catch((error) => {
                            console.error(error)
                            console.log('ERROR ')
                        })
    }
}
export function updateListeActiviteReglementeDetail(listeActiviteReglemente)
{
    return{
            type:types.LISTE_ACTIVITE_REGLEMENTE_DETAIL,
            activiteReglementesDetail:listeActiviteReglemente
    }
}