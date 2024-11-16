import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/AuthActions';
import { MDBMask, MDBView } from 'mdbreact';
import Select from 'react-select';
import './HomePageStyle.css';
import LocationSearch from '../fisherFilterAndMap/LocationSearch';

class HomePage extends Component {
    componentWillMount() {
        this.props.loadUser()
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <main>

                <div className="backgroundImg">

                    <div className="sf-bnr-text text-center">
                        <div className="conteneur">
                            <strong className="text-uppercase"> Réservez vos services du quotidien </strong>
                            <span> Baby-sitting, Bricolage, Ménage etc. Réservez maintenant le Serveur qui va vous faciliter la vie ! Moins de stress, plus de temps libre : Bienvenue sur A MON SERVICE ! </span>
                        </div>
                    </div>

                    <div className="sf-search-form-element">

                        <div className="category-select d-flex">

                            <select id="categorysrh" name="catid" className="form-control bs-select-hidden" title="Catégories" data-live-search="true" data-header="Choisir une catégorie">
                                <option className="bs-title-option" value="">Catégories</option>
                                <option value=""> Choisir une catégorie </option>

                                <option value=""> ----------------------------- </option>
                                <option value="Bien-être &amp; Beauté" data-content="<span>Bien-être &amp; Beauté</span>"> Bien-être &amp; Beauté </option>
                                <option value=""> ----------------------------- </option>
                                <option value="Coach Sportif" data-content="<span className='childcat'>Coach Sportif</span>">Coach Sportif</option>
                                <option value="Coach de vie" data-content="<span className='childcat'>Coach de vie</span>">Coach de vie</option>
                                <option value="Coiffure" data-content="<span className='childcat'>Coiffure</span>">Coiffure</option>
                                <option value="Cours artistiques" data-content="<span className='childcat'>Cours artistiques</span>">Cours artistiques</option>
                                <option value="Cours de Chant" data-content="<span className='childcat'>Cours de Chant</span>">Cours de Chant</option>
                                <option value="Cours de Danse" data-content="<span className='childcat'>Cours de Danse</span>">Cours de Danse</option>
                                <option value="Cours de Dessin" data-content="<span className='childcat'>Cours de Dessin</span>">Cours de Dessin</option>
                                <option value="Cours de Langues" data-content="<span className='childcat'>Cours de Langues</span>">Cours de Langues</option>
                                <option value="Cours de Musique" data-content="<span className='childcat'>Cours de Musique</span>">Cours de Musique</option>
                                <option value="Cours de Photographie" data-content="<span className='childcat'>Cours de Photographie</span>">Cours de Photographie</option>
                                <option value="Cours de Théâtre" data-content="<span className='childcat'>Cours de Théâtre</span>">Cours de Théâtre</option>
                                <option value="Cours de couture" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Cours-de-Couture-60x60.jpg'><span className='childcat'>Cours de couture</span>">Cours de couture</option>
                                <option value="Cours de cuisine" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Cours-de-Cuisine-60x60.jpg'><span className='childcat'>Cours de cuisine</span>">Cours de cuisine</option>
                                <option value="Création de Sites Internet" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Création-de-Site-Internet-60x60.jpg'><span className='childcat'>Création de Sites Internet</span>">Création de Sites Internet</option>
                                <option value="Dégustation de Vin &amp; Cours d’œnologie" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Dégustation-de-Vin-Cours-dOEnologie-60x60.jpg'><span className='childcat'>Dégustation de Vin &amp; Cours d’œnologie</span>">Dégustation de Vin &amp; Cours d’œnologie</option>
                                <option value="Détective privé" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Detective-Prive-60x60.jpg'><span className='childcat'>Détective privé</span>">Détective privé</option>
                                <option value="Esthétique" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Cours-dEsthétique-de-Coiffure-60x60.jpg'><span className='childcat'>Esthétique</span>">Esthétique</option>
                                <option value="Massage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Massage-60x60.jpg'><span className='childcat'>Massage</span>">Massage</option>
                                <option value="Relooking &amp; Personal Shopper" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Personal-Shopper-60x60.jpg'><span className='childcat'>Relooking &amp; Personal Shopper</span>">Relooking &amp; Personal Shopper</option>
                                <option value="Retouche Photos" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Retouche-Photos-60x60.jpg'><span className='childcat'>Retouche Photos</span>">Retouche Photos</option>
                                <option value="Yoga" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Yoga-60x60.jpg'><span className='childcat'>Yoga</span>">Yoga</option>

                                <option value=""> ----------------------------- </option>
                                <option value="événements" data-content="<span>événements</span>">événements </option>
                                <option value=""> ----------------------------- </option>
                                <option value="Animation" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Presentateur-60x60.jpg'><span className='childcat'>Animation</span>">Animation</option>
                                <option value="Artiste de Cirque" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Artiste-de-Cirque-60x60.jpg'><span className='childcat'>Artiste de Cirque</span>">Artiste de Cirque</option>
                                <option value="Caricature" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Caricature-60x60.jpg'><span className='childcat'>Caricature</span>">Caricature</option>
                                <option value="Chant &amp; Musique" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Chanteuse-60x60.jpg'><span className='childcat'>Chant &amp; Musique</span>">Chant &amp; Musique</option>
                                <option value="Chef &amp; Traiteur" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Chef-60x60.jpg'><span className='childcat'>Chef &amp; Traiteur</span>">Chef &amp; Traiteur</option>
                                <option value="DJ" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/DJ-60x60.jpg'><span className='childcat'>DJ</span>">DJ</option>
                                <option value="Dance" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Cours-de-Danse-60x60.jpg'><span className='childcat'>Danse</span>">Danse</option>
                                <option value="Humour &amp; Imitation" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Humoriste-60x60.jpg'><span className='childcat'>Humour &amp; Imitation</span>">Humour &amp; Imitation</option>
                                <option value="Magie" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Magicien-60x60.jpg'><span className='childcat'>Magie</span>">Magie</option>
                                <option value="Maquillage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Maquillage-60x60.jpg'><span className='childcat'>Maquillage</span>">Maquillage</option>
                                <option value="Organisation de Mariage / Wedding Planner" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2018/10/weeding-planning-60x60.jpg'><span className='childcat'>Organisation de Mariage / Wedding Planner</span>">Organisation de Mariage / Wedding Planner</option>
                                <option value="Organisation de Soirées" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Organisation-de-Soirée-60x60.jpg'><span className='childcat'>Organisation de Soirées</span>">Organisation de Soirées</option>
                                <option value="Organisation d’Anniversaire" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Anniversaire-60x60.jpg'><span className='childcat'>Organisation d’Anniversaire</span>">Organisation d’Anniversaire</option>
                                <option value="Photographie &amp; Vidéo" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Photographe-60x60.jpg'><span className='childcat'>Photographie &amp; Vidéo</span>">Photographie &amp; Vidéo</option>
                                <option value="Strip-Tease &amp; Go-go dancing" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Go-Go-Dancer-60x60.jpg'><span className='childcat'>Strip-Tease &amp; Go-go dancing</span>">Strip-Tease &amp; Go-go dancing</option>

                                <option value=""> ----------------------------- </option>
                                <option value="Famille" data-content="<span>Famille</span>">Famille</option>
                                <option value=""> ----------------------------- </option>
                                <option value="Activités pour Enfants" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Cours-de-DJ-60x60.jpg'><span className='childcat'>Activités pour Enfants</span>">Activités pour Enfants</option>
                                <option value="Aide à la personne" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Auxiliaire-60x60.jpg'><span className='childcat'>Aide à la personne</span>">Aide à la personne</option>
                                <option value="Assistance administrative" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Assistance-Administrative-60x60.jpg'><span className='childcat'>Assistance administrative</span>">Assistance administrative</option>
                                <option value="Baby Sitting &amp; Garde d'enfants" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Baby-Sitting-60x60.jpg'><span className='childcat'>Baby Sitting &amp; Garde d'enfants</span>">Baby Sitting &amp; Garde d'enfants</option>
                                <option value="Chef à domicile" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Chef-60x60.jpg'><span className='childcat'>Chef à domicile</span>">Chef à domicile</option>
                                <option value="Dressage d’animaux" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Dressage-dAnimaux-60x60.jpg'><span className='childcat'>Dressage d’animaux</span>">Dressage d’animaux</option>
                                <option value="Garde d’animaux / Pet-Sitting" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/garde-animaux-60x60.jpg'><span className='childcat'>Garde d’animaux / Pet-Sitting</span>">Garde d’animaux / Pet-Sitting</option>
                                <option value="Livraison de courses à domicile" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Livraison-de-Courses-60x60.jpg'><span className='childcat'>Livraison de courses à domicile</span>">Livraison de courses à domicile</option>
                                <option value="Promenade d’animaux" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Promenade-danimaux-60x60.jpg'><span className='childcat'>Promenade d’animaux</span>">Promenade d’animaux</option>
                                <option value="Soutien Scolaire" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Soutien-Scolaire-60x60.jpg'><span className='childcat'>Soutien Scolaire</span>">Soutien Scolaire</option>
                                <option value="Toilettage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Toilettage-60x60.jpg'><span className='childcat'>Toilettage</span>">Toilettage</option>

                                <option value=""> ----------------------------- </option>
                                <option value="Maison &amp; Biens du quotidien" data-content="<span>Maison &amp; Biens du quotidien</span>">Maison &amp; Biens du quotidien</option>
                                <option value=""> ----------------------------- </option>
                                <option value="Bricolage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Bricolage-60x60.jpg'><span className='childcat'>Bricolage</span>">Bricolage</option>
                                <option value="Carrosserie" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2018/10/carosserie-60x60.jpg'><span className='childcat'>Carrosserie</span>">Carrosserie</option>
                                <option value="Conseils &amp; Réparation Informatique / Smartphone / TV" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2018/10/cours-informatique-60x60.jpg'><span className='childcat'>Conseils &amp; Réparation Informatique / Smartphone / TV</span>">Conseils &amp; Réparation Informatique / Smartphone / TV</option>
                                <option value="Couture" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Couture-60x60.jpg'><span className='childcat'>Couture</span>">Couture</option>
                                <option value="Décoration d’intérieur" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Decoration-dInterieur-60x60.jpg'><span className='childcat'>Décoration d’intérieur</span>">Décoration d’intérieur</option>
                                <option value="Déménagement" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Déménagement-60x60.jpg'><span className='childcat'>Déménagement</span>">Déménagement</option>
                                <option value="Electricité" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Electricité-60x60.jpg'><span className='childcat'>Electricité</span>">Electricité</option>
                                <option value="Jardinage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Jardinage-60x60.jpg'><span className='childcat'>Jardinage</span>">Jardinage</option>
                                <option value="Lavage Auto &amp; Moto" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Lavage-Automobile-60x60.jpg'><span className='childcat'>Lavage Auto &amp; Moto</span>">Lavage Auto &amp; Moto</option>
                                <option value="Maçonnerie" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Maconnerie-60x60.jpg'><span className='childcat'>Maçonnerie</span>">Maçonnerie</option>
                                <option value="Mécanique" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Mecanique-Carosserie-60x60.jpg'><span className='childcat'>Mécanique</span>">Mécanique</option>
                                <option value="Ménage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Menage-1-60x60.jpg'><span className='childcat'>Ménage</span>">Ménage</option>
                                <option value="Peinture" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Peinture-60x60.jpg'><span className='childcat'>Peinture</span>">Peinture</option>
                                <option value="Plomberie" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Plomberie-60x60.jpg'><span className='childcat'>Plomberie</span>">Plomberie</option>
                                <option value="Pose de pneus" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Pose-de-Pneus-60x60.jpg'><span className='childcat'>Pose de pneus</span>">Pose de pneus</option>
                                <option value="Repassage" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2018/10/Repassage-60x60.jpg'><span className='childcat'>Repassage</span>">Repassage</option>
                                <option value="Serrurerie" data-content="<img className='childcat-img' width='50' height='auto' src='https://www.amonservice.com/wp-content/uploads/2017/09/Serrurier-60x60.jpg'><span className='childcat'>Serrurerie</span>">Serrurerie</option>
                            </select>

                            <div className="type-keyword">
                                <LocationSearch />
                            </div>

                            <div className="type-search">
                                <input type="submit" value="Trouver" className="btn btn-block btn-primary " />
                            </div>

                        </div>

                    </div>

                </div>

                <section className="section-full text-center background-color">

                    <div className="container containerWidth">
                        <div className="section-head">
                            <h2 className="text-uppercase">Quel service vous ferait plaisir aujourd’hui ?</h2>
                            <p>Pour vous ou votre famille... Choisissez le serveur qui va vous faciliter la vie aujourd’hui !</p>
                        </div>
                        <div className="section-content">
                            <div className="row catlist">
                                <div className="col-md-6 col-sm-6 test2">
                                    <div className="sf-element-bx">
                                        <a href="#">
                                            <div className=" overlay-bg">
                                                <MDBView hover >
                                                    <div className="bi1 img-effect1 img-fluid catagories-listing"  >
                                                        <h4 className="service-name pull-left">Bien-être &amp; Beauté</h4>
                                                    </div>
                                                    <MDBMask overlay="black-strong">
                                                    </MDBMask>
                                                </MDBView>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 test2">
                                    <div className="sf-element-bx">
                                        <a href="#">
                                            <div className=" overlay-bg">
                                                <MDBView hover >
                                                    <div className="bi2 img-effect2 catagories-listing" >
                                                        <h4 className="service-name pull-left">événements</h4>
                                                    </div>
                                                    <MDBMask overlay="black-strong">
                                                    </MDBMask>
                                                </MDBView>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 test2">
                                    <div className="sf-element-bx">
                                        <a href="#">
                                            <div className=" overlay-bg">
                                                <MDBView hover >
                                                    <div className="bi3 catagories-listing" >
                                                        <h4 className="service-name pull-left">Famille</h4>
                                                    </div>
                                                    <MDBMask overlay="black-strong">
                                                    </MDBMask>
                                                </MDBView>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 test2">
                                    <div className="sf-element-bx">
                                        <a href="#">
                                            <div className=" overlay-bg">
                                                <MDBView hover >
                                                    <div className="bi4 catagories-listing" >
                                                        <h4 className="service-name pull-left">Maison &amp; Biens du quotidien</h4>
                                                    </div>
                                                    <MDBMask overlay="black-strong">
                                                    </MDBMask>
                                                </MDBView>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-full text-center bg-white how-sf-work">

                    <div className="container">
                        <div className="section-head">
                            <h2 className="text-uppercase">A mon service! Comment ça marche?</h2>
                            <p id="co" >Choisissez. Réservez. Souriez !</p>
                        </div>
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 marginTop">
                                    <div className="sf-element-bx">
                                        <div className="icon-bx-lg rounded-bx mostion">
                                            <img src="https://www.amonservice.com/wp-content/uploads/2017/07/un.png" width="139" height="140" alt="" />
                                        </div>
                                        <div className="shadow-bx mostion">
                                            <img src="https://www.amonservice.com/wp-content/plugins/sf-shortcodes/images/shadow.png" alt="" />
                                        </div>
                                        <h4>Trouvez votre Serveur</h4>
                                        <ul>
                                            <li>Rentrez votre demande dans la barre de recherche.</li>
                                            <li>Choisissez le Serveur – professionnel ou particulier – qui va vous rendre la vie plus facile.</li>
                                        </ul>
                                        <div className="step-no-bx mostion"></div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4 marginTop">
                                    <div className="sf-element-bx">
                                        <div className="icon-bx-lg rounded-bx mostion">
                                            <img src="https://www.amonservice.com/wp-content/uploads/2017/07/deux.png" width="139" height="140" alt="" />

                                        </div>
                                        <div className="shadow-bx mostion">
                                            <img src="https://www.amonservice.com/wp-content/plugins/sf-shortcodes/images/shadow.png" alt="" />
                                        </div>
                                        <h4>Réservez votre Service</h4>
                                        <ul>
                                            <li>Sur le profil du serveur, cliquez sur réservez maintenant.</li>
                                            <li>Choisissez le service, le lieu et le moment qui vous conviennent dans son agenda !</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-4 marginTop">
                                    <div className="sf-element-bx"><div className="icon-bx-lg rounded-bx mostion">
                                        <img src="https://www.amonservice.com/wp-content/uploads/2017/07/trois.png" width="139" height="140" alt="" />

                                    </div>
                                        <div className="shadow-bx mostion">
                                            <img src="https://www.amonservice.com/wp-content/plugins/sf-shortcodes/images/shadow.png" alt="" />
                                        </div>
                                        <h4>C’est fait!</h4>
                                        <ul>
                                            <li>Détendez-vous pendant que votre service est fait et dormez sur vos 2 oreilles :</li>
                                            <li>Le Serveur est payé une fois le service rendu &amp; vous êtes 100% remboursé en cas d’annulation.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-full text-center bg-white background-concierge-bell sf-category overlay-black-middle " >

                    <div className="container ">
                        <div className="section-head">
                            <h2 className=" white_header text-uppercase">Rendez-service</h2>
                            <div className="after-titile-line ">&nbsp;</div>
                            <p className="aaa">Trouvez de nouveaux clients !</p>
                        </div>
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 col-xs-12 rendez__service">
                                        <div className="rendez__service_content sf-element-bx">
                                            <h4>Libérez-vous du temps</h4>
                                            <ul>
                                                <li>Trouver simplement votre service.</li>
                                                <li>Réservez-le directement en ligne.</li>
                                                <li>Le serveur est payé une fois le service fait.</li>
                                            </ul>
                                            <a className="btn btn-primary cta" href="offres">Réservez un service </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 col-xs-12 rendez__service">
                                        <div className="rendez__service_content sf-element-bx">
                                            <h4>Trouvez de nouveaux clients</h4>
                                            <ul>
                                                <li>Les clients vous réservent en ligne.</li>
                                                <li>Répondez aux demandes clients.</li>
                                                <li>Outil de gestion pro &amp; Paiement sécurisé.</li>
                                            </ul>
                                            <a className="btn btn-primary cta" href="/inscrire">Inscrivez-vous</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 col-xs-12 rendez__service">
                                        <div className=" rendez__service_content sf-element-bx">
                                            <h4>Confiez-nous vos besoins!</h4>
                                            <ul>
                                                <li>Décrivez votre demande en 1 mn.</li>
                                                <li>Nous vous trouvons les serveurs.</li>
                                                <li>Recevez les offres et réservez.</li>
                                            </ul>
                                            <a className="btn btn-primary cta" href="">Publiez une demande</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* avon fouter user r100% */}

                <section class="section-full bg-gray sf-testimonials">

                    <div class="container">

                        <div class="section-head text-center ">
                            <h2 class="text-uppercase">A mon service ! vous rend service !</h2>
                            <div class="after-titile-line"></div>
                            <p>Témoignages</p>
                        </div>

                        <div class="section-content">
                            <div class="section-content">
                                <div class="owl-carousel owl-theme owl-loaded">
                                    <div class="owl-stage-outer">
                                        <div class="owl-stage a1" >
                                            <div class="owl-item active a2" >
                                                <div class="testimonial-bx item">
                                                    <div class="testimonial-pic">
                                                        <img src="https://www.amonservice.com/wp-content/uploads/2017/09/anna.jpg" style={{ width: "100", height: "100" }} alt="" />
                                                    </div>
                                                    <div class="testimonial-text">
                                                        <p> A mon service! m’a permis d’être moins stressée. J’ai trouvé Marie qui s’occupe de récupérer ma fille tous les jours à l’école. Elle s’en occupe jusqu’à ce que je vienne la chercher en rentrant du bureau.</p>
                                                        <div class="testimonial-detail">
                                                            <strong>Anna</strong>
                                                            <span>Manager RH</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-item active a2" >
                                                <div class="testimonial-bx item">
                                                    <div class="testimonial-pic">
                                                        <img src="https://www.amonservice.com/wp-content/uploads/2017/09/elodie.jpg" style={{ width: "100", height: "100" }} alt="" />
                                                    </div>
                                                    <div class="testimonial-text">
                                                        <p>Avec A mon service! j’ai pu trouver Audrey qui fait le ménage 2 fois par semaine. J’ai payé en ligne la prestation. Ma maison est propre. Je peux sereinement aller au parc avec mes 2 enfants.</p>
                                                        <div class="testimonial-detail">
                                                            <strong>Elodie</strong>
                                                            <span>Responsable Marketing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-item a2" >
                                                <div class="testimonial-bx item">
                                                    <div class="testimonial-pic">
                                                        <img src="https://www.amonservice.com/wp-content/uploads/2017/09/frank.jpg" style={{ width: "100", height: "100" }} alt="" />
                                                    </div>
                                                    <div class="testimonial-text">
                                                        <p> A mon service! me permet de trouver des clients sans effort. Je réponds à des demandes de devis. On se met d’accord sur un prix. Et je suis sûr d’être payé avec le paiement en ligne! </p>
                                                        <div class="testimonial-detail">
                                                            <strong>Frank</strong>
                                                            <span>Plombier</span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                            <div class="owl-item a2" >
                                            <div class="testimonial-bx item">
                                                <div class="testimonial-pic">
                                                    <img src="https://www.amonservice.com/wp-content/uploads/2017/09/linda.jpg" style={{width:"100" , height:"100"}} alt=""/>
                                                    </div>      
                                                    <div class="testimonial-text">
                                                                <p> Je suis professeure d’anglais et j’ai donné des cours à Sylvie qui  voulait s’améliorer pour évoluer dans son travail. Au fil des cours, nous sommes devenues amies.  </p>
                                                                <div class="testimonial-detail">
                                                                   <strong>Linda</strong>
                                                                   <span>Chef à domicile</span>
                                                                 </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            <div class="owl-item a2" >
                                            <div class="testimonial-bx item">
                                               <div class="testimonial-pic">
                                                <img src="https://www.amonservice.com/wp-content/uploads/2017/09/justine.jpg" style={{width:"100" , height:"100"}} alt=""/>
                                                    </div>
                                                        <div class="testimonial-text">                              
                                                             <p>Je suis étudiante, et avec A mon service! j’ai trouvé une façon simple de financer mes études. Je donne des cours de Maths à Nicolas, le fils d’une voisine. Je gère mon temps et je gagne de l’argent. </p>
                                                             <div class="testimonial-detail">
                                                                <strong>Justine</strong>
                                                                <span>Etudiante</span>
                                                         </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                               
                                </div>
                            </div>
                       
                        </div>
                  
                    </div>

                </section>
                                  
           
            </main>
                        )
 } 
}
export default connect(null, {loadUser} )(HomePage);