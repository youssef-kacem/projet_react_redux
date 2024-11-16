import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// =========================================================================  //
import NavBar from './component/navbar/NavBar'
import Footer from './component/footer/Footer'

import Inscrire from './component/user/S’inscrire/Inscrire';
import Identifier from './component/user/S’identifier/Identifier';

import Navigation from './component/navigation/Navigation';
import HomePage from './component/homePage/HomePage';
import MonCompte from './component/monEspace/monCompte/MonCompte'
import MesServices from './component/monEspace/mesServices/MesServices';
import MesDemandes from './component/monEspace/mesDemandes/MesDemandes';
import ZoneDintervention from './component/monEspace/zoneDintervention/ZoneDintervention';
import Disponibilites from './component/monEspace/disponibilites/Disponibilites';
import RendezVous from './component/monEspace/rendezVous/RendezVous';
import Messages from './component/monEspace/messages/Messages';

import Offres from './component/offres/Offres';
import Demandes from './component/demandes/Demandes';
import BonPlan from './component/bonPlan/BonPlan'
import CommentCaMarche from './component/comment-ca-marche/CommentCaMarche';
import ExemplesDeServices from './component/exemples-de-services/ExemplesDeServices';
import Contact from './component/contact/Contact';

// =========================================================================  //
import Alerts from './component/alert/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './component/prive/PrivateRoute';

import Description from './component/offres/description/Description';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

class App extends Component {
  
  searchMovie = y => {
    this.setState({
      keyword: y
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="position-background-anime">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/inscrire" component={Inscrire} />
          <Route path="/identifier" component={Identifier} />
          <Route path="/monEspace" component={Navigation} />
          <Route path="/monCompte" component={MonCompte} />
          <Route path="/mesServices" component={MesServices} />
          <Route path="/mesDemandes" component={MesDemandes} />
          <Route path="/zoneDintervention" component={ZoneDintervention} />
          <Route path="/disponibilites" component={Disponibilites} />
          <Route path="/rendezVous" component={RendezVous} />
          <Route path="/messages" component={Messages} />
          <Route path="/commentCaMarch" component={CommentCaMarche} />
          <Route path="/exDeServices" component={ExemplesDeServices} />

          <Route path="/offres" component={Offres} />
          <Route path="/demandes" component={Demandes} />
          <Route path="/description/:id" component={Description} />
          <Route path="/contact" component={Contact} />
          
        </Switch>
        <Alerts />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

