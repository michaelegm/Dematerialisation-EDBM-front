const initState={
    questionFAQ:[
        {
           idTheme:'',
           idSujet:'',
           question:'',
           reponse:'' 

        }

    ],
    sujet:[{
        idSujet:'',
        sujet:'',
        idTheme:''
    }],
    theme:[{
        idTheme:'',
        theme:''
    }],
    questionFAQs:[
        {   idSujet:'',
            question_reponse:{idTheme:'',
            idSujet:'',
            question:'',
            reponse:'',
            id:''
         }

        }

    ],

};

const faqReducer=(state=initState,action)=>{
    switch(action.type){
        case "LISTE_QUESTION":return {...state,questionFAQ:action.questionFAQ};
        case "LISTE_THEME":return {...state,theme:action.theme};
        case "LISTE_SUJET":return {...state, sujet:action.sujet}
        default:return state;
    }
}

export default faqReducer;