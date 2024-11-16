import React, { Component } from 'react'
import './DescriptionStyle.css';
import { connect } from 'react-redux';
import { MDBIcon, MDBNavLink } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState(
            this.props.membres.filter(el => el.id == this.props.match.params.id)[0]
        )
    }

    render() {
        return (
            <div>

                <div className="backgroundImg">
                    <div className="conteneur">
                        <h2 className="fontW">Membre A MON SERVICE!</h2>
                    </div>
                </div>

                <div role="main" className="main">

                    <div className="contaiiner">

                        <div className="roow">

                            <div className="portfolio-title center">
                                <div className="roow">
                                    <div className="col-md-12 center">
                                        <h2 className="shorter">{this.state.name} <span>.</span></h2>
                                    </div>
                                </div>
                            </div>

                            <hr className="tall" />

                            <div className="portfolio-info">
                                <div className="roow">
                                    <div className="col-md-12 center">
                                        <ul>
                                            <li> <i className="fas fa-user"></i> {this.state.year} ans </li>
                                            <li> <i className="fas fa-home"></i> {this.state.region} </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">

                                <div className="center">
                                    <ul className="list-unstyled">
                                        <li> <img className=" img-responsive" src={this.state.profilImg} /> </li>
                                    </ul>
                                </div>

                                <div className="center">
                                    <a href="/member/rdvs/demanderRdv/20398" className="pa-btn btn-primary btn Ripple-parent appear-animation bounceIn appear-animation-visible" data-appear-animation="bounceIn">Demander un service à {this.state.title}</a>
                                </div>

                            </div>

                            <div className="col-md-8">
                                <ul className="list-unstyled">
                                    <li>
                                        <h4 className="titre-ser">Services</h4>
                                        <dl>
                                            <dt><i class="far fa-check-circle"></i> Automobile - VIDANGE </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Bricolage - MONTER UN MEUBLE EN KIT </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Bricolage - REPARATIONS </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Bricolage - PETITS TRAVAUX MANUELS </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Déménagement - AIDE DÉMÉNAGEMENT </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Absences / Vacances - ARROSER LE JARDIN </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Absences / Vacances - EFFECTUER DES RONDES </dt>
                                            <dd></dd>

                                            <dt><i class="far fa-check-circle"></i> Soins beauté - MASSAGE </dt>
                                            <dd>J'ai toujours aimé masser, simplement pour détendre et faire du bien, pas de prétention ni de technique particulière, juste un touché, un ressenti de l'autre qui as plu à toutes les personnes passées entre mes mains et qui en on toutes redemandé...
                                            Massage détente, relaxant à l'huile bio, reçoit et se déplace...</dd>

                                            <dt><i class="far fa-check-circle"></i> Tous les services </dt>
                                            <dd>Bonjour, je suis d'un naturel serviable, manuel et débrouillard depuis toujours, ayant des expériences variées dans le domaine professionnel et aimant toucher un peu à tout, je vous propose mon aide, quelque soit le domaine n'hésitez pas à me contacter, je répondrait oui volontiers si c'est dans mes compétences...
                                            A bientôt.</dd>

                                        </dl>
                                    </li>
                                    <hr />
                                    <li>
                                        <h4 className="titre-ser">Zone d'intervention</h4>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th> Ville </th>
                                                    <th> Rayon </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="ligne">
                                                    <td>Orbey</td>
                                                    <td>50 Km(s)</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </li>
                                    <hr />
                                    <li>
                                        <h4 className="titre-ser">Disponibilités</h4>

                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th> Jour </th>
                                                    <th> Heure début </th>
                                                    <th> Heure fin </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Lundi</td>
                                                    <td>08 H</td>
                                                    <td>21 H</td>
                                                </tr>
                                                <tr>
                                                    <td>Mercredi</td>
                                                    <td>08 H</td>
                                                    <td>21 H</td>
                                                </tr>
                                                <tr>
                                                    <td>Jeudi</td>
                                                    <td>08 H</td>
                                                    <td>21 H</td>
                                                </tr>
                                                <tr>
                                                    <td>Vendredi</td>
                                                    <td>08 H</td>
                                                    <td>21 H</td>
                                                </tr>
                                                <tr>
                                                    <td>Samedi</td>
                                                    <td>08 H</td>
                                                    <td>21 H</td>
                                                </tr>
                                                <tr>
                                                    <td>{this.state.dispo}</td>
                                                    <td>08 H</td>
                                                    <td>21 H</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </li>
                                </ul>
                            </div>

                        </div>

                        <hr className="tall" />
                        <hr className="tall" />

                        <MDBNavLink
                            exact
                            to={`/`}
                        >
                            <div className="d-flex justify-content-end">
                                <button className="btn-primary btn Ripple-parent bounceIn "><MDBIcon icon="home" fixed /> Home</button>
                            </div>
                        </MDBNavLink>

                    </div>

                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        membres: state.Reducer
    }
}
export default connect(mapStateToProps)(Description)
