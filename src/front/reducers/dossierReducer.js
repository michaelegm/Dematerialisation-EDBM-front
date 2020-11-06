const initState={
    request:[
        {   
            codeFormeJuridique:"",
            idProcedure:"",
            idActiviteReglemente:""
        }
    ],
    dossiersFJ:[{
        nomDossier:"",
    }],
    dossierAR:[{
        casUtilisation:"",
        nomDocument:"",
        dossierCreation:"",
        entiteDelivrance:""
    }]
  
};
const dossierReducer=(state=initState,action)=>{
    switch(action.type){
        case "LISTE_DOSSIER_FORMEJURIDIQUE":return {...state, dossiersFJ:action.dossiersFJ};
        case "LISTE_DOSSIER_ACTIVITE_REGLEMENTE":return {...state, dossierAR:action.dossierAR};
        
        default: return state;
    }
    /*if(action.type==="LISTE_FORME_JURIDIQUE"){
        return {...state, formeJuridiques:action.formeJuridiques
        };
    }*/
    //return state;
};
export default dossierReducer;