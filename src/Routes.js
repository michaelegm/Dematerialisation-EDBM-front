import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./front/containers/Accueil/Home";
import Information from "./front/containers/Creation_Entreprise/Information"
import Outils from "./front/containers/Outils/index";
import Dossier from"./front/containers/Outils/Dossier";
import CGU from"./front/containers/CGU";
import Faq from"./front/containers/Faq/index";
import Connexion from"./front/containers/Connexion";
import InscriptionPage from"./front/containers/Inscription";
import DossierActivite from "./front/containers/Outils/DossierActivite";
//import OutilsDroit from "./front/containers/OutilsDroit";
import MentionLegal from "./front/containers/MentionLegal";
import CalculDroit from "./front/containers/Outils/CalculDroit";
import CreationEntreprise from "./front/containers/Creation_Entreprise/index"
import DefinirSonProjet from "./front/containers/Creation_Entreprise/Definir_son_projet/index"
import FormaliteCreation from "./front/containers/Creation_Entreprise/Formalite_Creation/index"
import AutreInformation from "./front/containers/Autre_Information/index"
import Entite from "./front/containers/Autre_Information/entite"
import Fiscalite from "./front/containers/Autre_Information/fiscalite"
import ActiviteReglemente from "./front/containers/Autre_Information/activite_reglemente"
export default function Routes() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/connexion">
          <Connexion />
        </Route>
        <Route exact path="/inscription">
          <InscriptionPage />
        </Route>
        <Route exact path="/information">
          <Information />
        </Route>
        <Route exact path="/outils">
          <Outils />
        </Route>
        <Route exact path="/dossier">
          <Dossier />
        </Route>
        <Route exact path="/cgu">
          <CGU />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/creation_entreprise">
          <CreationEntreprise />
        </Route>
        <Route exact path="/definir_projet">
          <DefinirSonProjet/>

        </Route>
        <Route exact path="/formalite_creation">
          <FormaliteCreation/>
        </Route>

        <Route exact path="/dossier_activite">
          <DossierActivite/>
        </Route>
        <Route exact path="/outils_simulation">
          <CalculDroit/>
        </Route>
        <Route exact path="/mention_legal">
          <MentionLegal/>
        </Route>
        <Route exact path="/autre_information">
          <AutreInformation/>
        </Route>
        <Route exact path="/fiscalite">
          <Fiscalite/>
        </Route>
        <Route exact path="/activite_reglemente">
          <ActiviteReglemente/>
        </Route>
        <Route exact path="/entite">
          <Entite/>
        </Route>
      </Switch>
      </BrowserRouter>
  );
}
