import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './FooterStyle.css';

const Footer = () => {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <hr  className="hrr"/>
                <div className="containerrr">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">A MON SERVICE !<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="#.">A propos</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Comment ça marche ?</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Confiance</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Devenir Serveur Premium</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Réservation en ligne</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Construire son profil</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Référencement & Option Star</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Charte A MON SERVICE !</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Partenariat</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Recrutement</a></div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">LES + DEMANDÉS<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="#.">Garde d’enfants / Baby Sitting</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Ménage</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Repassage</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Jardinage</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Bricolage</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Soutien Scolaire</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Garde d’animaux / Pet Sitting</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Déménagement</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Coiffure</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">DJ</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Plombier</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">MA FAMILLE EN OR !<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <img style={{ width: "73", height: "73" }} alt="" src="https://www.amonservice.com/wp-content/uploads/2018/01/Déménagement-73x73.png" />
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">DÉMÉNAGEMENT</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">Après de multiples visites, vous avez [...]</a></div>
                                    </li>
                                    <li>
                                        <img style={{ width: "73", height: "73" }} alt="" src="https://www.amonservice.com/wp-content/uploads/2018/01/Pâté-de-Sable-73x73.jpg" />
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">SAVEZ-VOUS COMMENT FAIRE DES PÂTÉS DE SABLE SANS ÊTRE SUR LA PLAGE?</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#.">C'est très simple ! Voici la recette [...]</a></div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget no-box">
                                <h5 className="widget-title">Suivez-Nous<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="#.">presse@amonservice.com</a></div>
                                    </li>
                                </ul>
                                <ul className="social-footer2">
                                    <li className="">
                                        <a title="Facebook" target="_blank" href="https://www.facebook.com/">
                                            <i style={{ color: "#4167b2" }} className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="https://www.google.com/" target="_blank" title="Facebook">
                                            <i style={{ color: "#e7302a" }} className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a title="Twitter" target="_blank" href="https://www.twitter.com/">
                                            <i style={{ color: "#4b92dc" }} className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a title="instagram" target="_blank" href="https://www.instagram.com/">
                                            <i style={{ color: "#673ab7" }} className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="">
                    <div className="row" id="footer-headband">

                        <div className="col-md-12">
                            <ul className="pull-left">
                                <li><a href="https://www.homeexchange.fr/p/conditions-generale-d-utilisation" rel="nofollow">Conditions Générales d'Utilisation</a></li>
                                <li><a href="https://www.homeexchange.fr/p/charte-vie-privee" rel="nofollow">Charte de vie privée</a></li>
                                <li><a href="https://www.homeexchange.fr/p/mentions-legales" rel="nofollow">Mentions légales</a></li>
                                <li><a href="/sitemaps" rel="nofollow">Plan du site</a></li>
                            </ul>
                            <ul className="pull-right">
                                <li>Copyright © 2020</li>
                                <li>A Mon Service </li>
                                <li>Tous droits réservés</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;