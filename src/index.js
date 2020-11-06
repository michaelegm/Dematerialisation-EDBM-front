import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './front/App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,combineReducers } from "redux"
import {Provider} from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom';
import informationReducer from './front/reducers/informationReducer'
import dossierReducer  from './front/reducers/dossierReducer'
import dossierActiviteReducer from './front/reducers/dossierActiviteReducer'
import faqReducer from './front/reducers/faqReducer'
import thunk from 'redux-thunk'


const reducers=combineReducers(
  {
    information:informationReducer,
    dossier:dossierReducer,
    activite:dossierActiviteReducer,
    faq:faqReducer
  }
)

export const store=createStore(
  reducers,
  applyMiddleware(thunk)
  );
ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

