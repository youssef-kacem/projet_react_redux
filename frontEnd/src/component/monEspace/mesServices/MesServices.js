import React, { Component } from 'react';
import { connect } from 'react-redux'
import './MesServicesStyle.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  MDBInput } from 'mdbreact';
import { addServices, removeService } from '../../../actions/actionsServices ';
import { editProfil, editServices } from '../../../actions/AuthActions'
import uuid from 'uuid';

class MesServices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: "",
            commentaire: "",
            // AllServices: []
        }
    }
    handelCategory = () => {
        if (this.state.value) {
            console.log(this.state.value)
        }
    }

    handleChangeCategory = (e) => {
        this.setState({ service: e.target.value })
    }
    handleCommentaire = (e) => {
        this.setState({ commentaire: e.target.value })
    }
    componentWillReceiveProps(nextProps){
        this.setState(nextProps.auth.user)
        console.log(this.state)
    }
    render() {
        return (
            <div className="containerrr mt">

                <Accordion defaultActiveKey="1">
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between  align-items-center" >
                                <div className="panel-heading">SERVICES QUE JE PEUX RENDRE</div>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="near-moon-gradient">
                                    Ajouter un service
                                </Accordion.Toggle>
                            </div>

                            <table className="table ">

                                <thead>
                                    <tr>
                                        <td> Service </td>
                                        <td> Commentaire / Niveau de compétences </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </thead>

                                <tbody>

                                    {/* <tr>
                                        <td  colspan="3">On vous invite à ajouter un service. Les membres pourront vous demander des services selon vos compétences.  </td>
                                    </tr> */}

                                    {
                                        this.props.allState.services.map(el =>
                                            <tr>
                                                <td> {el.service} </td>
                                                <td> {el.commentaire} </td>
                                                <td>
                                                    {/* <img src="http://www.yakasaider.fr/images/admin/user_edit.png" alt="" title="Modifier" border="0" /> */}
                                                    <img onClick={() => this.props.deleteService(el.id)} src="http://www.yakasaider.fr/images/admin/trash.png" alt="" title="Supprimer" border="0" />
                                                </td>
                                            </tr>)
                                    }
                                </tbody>

                            </table>

                        </Card.Header>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Service :

                                <select onChange={this.handleChangeCategory} id="categorysrh" name="catid" className="form-control bs-select-hidden" title="Catégories" data-live-search="true" data-header="Choisir une catégorie">
                                    <option className="bs-title-option" value="">Catégories</option>

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

                                <MDBInput onChange={this.handleCommentaire} type="textarea" label="Commentaire / Niveau de compétences" outline />
                                <div className="d-flex justify-content-end">
                                    <button onClick={() => {
                                        let oneService = {service: this.state.service, commentaire: this.state.commentaire}
                                        // this.props.addServices({...this.state, ...this.props.auth.user})
                                        // this.props.editServices({oneService, ...this.props.auth.user})
                                        this.props.editServices({...this.state, ...this.props.auth.user})
                                    }} className="outline-primary" color="primary"><strong>Valider</strong></button>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>

            </div>
        );
    }

}
const mapDispatchToProps = dispatch => {
    return {
        addNewServices: x => dispatch(addServices(x)),
        deleteService: id => dispatch(removeService(id))  
    }
}
const mapStateToProps = state => {
    return {
        allState: state.Reducer,
        auth: state.auth
    };
};
export default connect(mapStateToProps, {addServices, editServices, editProfil})(MesServices);