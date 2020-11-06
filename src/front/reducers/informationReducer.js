const initState={
    formeJuridiques:[
        {   idFJ:0,
            codeFormeJuridique:"EI",
            libelleFormeJuridique:"Entreprise Individuelle",
            caracteristique:"Entreprise blabalabla",
            casUtilisation:"cas utilisation balbalbal",
            responsabilite:"responsablite",
            description:"description"

        }
    ],
    regimeFiscaux:[
        {
            idRF:0,
            libelleRegimeFiscal:'',
            acroRegimeFiscal:'',
            caracteristique:'',
            casutilisation:'',
            responsabilite:''
        }
    ],
    procedures:[
        {
            idProcedure:0,
            nomProcedure:'initialisation'
        }
    ],
    activiteReglementes:[
        {
            idActiviteReglemente:0,
            nomActiviteReglemente:'initialisation'
        }
    ],
    activiteReglementesDetail:[
        {
            idActivitedetail:0,
            libelleActivitedetails:'initialisation',
            detailActivitedetails:''
        }
    ],
  
};
const informationReducer=(state=initState,action)=>{
    switch(action.type){
        case "LISTE_FORME_JURIDIQUE":return {...state, formeJuridiques:action.formeJuridiques};
        case "LISTE_REGIME_FISCAL":return{...state,regimeFiscaux:action.regimeFiscaux};
        case "LISTE_PROCEDURE":return{...state,procedures:action.procedures};
        case "LISTE_ACTIVITE_REGLEMENTE":return{...state,activiteReglementes:action.activiteReglementes};
        case "LISTE_ACTIVITE_REGLEMENTE_DETAIL":return{...state,activiteReglementesDetail:action.activiteReglementesDetail}
        default: return state;
    }
    /*if(action.type==="LISTE_FORME_JURIDIQUE"){
        return {...state, formeJuridiques:action.formeJuridiques
        };
    }*/
    //return state;
};
export default informationReducer;