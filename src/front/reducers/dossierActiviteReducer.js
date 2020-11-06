const initialState = {
    section:[{
        idSectionActivite:"",
        libelleSectionActivite:""

    }],
    division:[{
      idDivisionActivite:"",
      libelleDivisionActivite:""
    }],
    groupe:[{
      idGroupeActivite:"",
      libelleGroupeActivite:""
    }],
    classe:[{
      idClasseActivite:"",
      libelleClasseActivite:""
    }],
    categorie:[{
      codeCategorie:"",
      descriptivesCategorie:""
      
    }]
  };
  
  const dossierActiviteReducer = (state = initialState, action) => {
    switch(action.type){
        case "LISTE_SECTION_ACTIVITE":return {...state, section:action.section};
        case "LISTE_DIVISION_ACTIVITE":return{...state,division:action.division};
        case "LISTE_GROUPE_ACTIVITE":return{...state,groupe:action.groupe};
        case "LISTE_CLASSE_ACTIVITE":return{...state,classe:action.classe};
        case "LISTE_CATEGORIE_ACTIVITE":return{...state,categorie:action.categorie}
        
        
        default: return state;
    }
  }
  
  export default dossierActiviteReducer;