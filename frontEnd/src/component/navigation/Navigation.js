import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './NavigationStyle.css';

// ================================================================  // 
import MonCompte from '../monEspace/monCompte/MonCompte';
import MesServices from '../monEspace/mesServices/MesServices';
import MesDemandes from '../monEspace/mesDemandes/MesDemandes';
import ZoneDintervention from '../monEspace/zoneDintervention/ZoneDintervention';
import Disponibilites from '../monEspace/disponibilites/Disponibilites';
import RendezVous from '../monEspace/rendezVous/RendezVous';
import Messages from '../monEspace/messages/Messages';
//  ==============================================================  //


class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>

                <div className="backgroundImg">
                    <div className="conteneur">
                        <h2 className="fontW">Mon Espace a Mon Services !</h2>
                    </div>
                </div>

                <MDBNav className="nav-tabs mt-5">
                    <MDBNavItem>
                        <MDBNavLink to="/monCompte">MON COMPTE</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/mesServices"> Mes services</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/mesDemandes">Mes demandes</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/zoneDintervention">Zone d'intervention</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/disponibilites">Disponibilités</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/rendezVous">Rendez-vous </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/messages">Messages</MDBNavLink>
                    </MDBNavItem>
                </MDBNav>

                <Switch>
                    <Route  path="/monCompte" component={MonCompte} />
                    <Route  path="/mesServices" component={MesServices} />
                    <Route  path="/mesDemandes" component={MesDemandes} />
                    <Route  path="/zoneDintervention" component={ZoneDintervention} />
                    <Route  path="/disponibilites" component={Disponibilites} />
                    <Route  path="/rendezVous" component={RendezVous} />
                    <Route  path="/messages" component={Messages} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Navigation