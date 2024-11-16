import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ZoneDinterventionStyle.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addZoneDintervention, removeZoneDintervention } from '../../../actions/actionsServices ';
import LocationSearch from '../../fisherFilterAndMap/LocationSearch'
import { MDBRow } from 'mdbreact';
import uuid from 'uuid';


class ZoneDintervention extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Rayon: "",
        }
    }

    handelRayon = () => {
        if (this.state.value) {
            console.log(this.state.value)
        }
    }
    handleChangeRayon = (e) => {
        this.setState({ Rayon: e.target.value })
    }

    render() {
        return (
            <div className="containerrr mt">

                <Accordion defaultActiveKey="1">

                    <Card>

                        <Card.Header>

                            <div className="d-flex justify-content-between  align-items-center" >
                                <div className="panel-heading">MES DISPONIBILITÉS</div>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="near-moon-gradient">
                                    Ajouter Une Zonz Géographique
                                </Accordion.Toggle>
                            </div>

                            <div className="tab-pane active" id="dispo">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-unstyled">
                                            <li>
                                                <table className="table ">
                                                    <thead>
                                                        <tr>
                                                            {/* <td colspan="3">On vous invite à ajouter une zone géographique (périmètre autour duquel vous pourrez intervenir). Ainsi, vous apparaîtrez dans les résultats de recherches uniquement pour la zone indiquée.</td> */}
                                                            <td> <strong>ville</strong> </td>
                                                            <td> <strong>rayon</strong> </td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.allState.zones.map
                                                                (el =>
                                                                    <tr>
                                                                        <td>{el.Ville}</td>
                                                                        <td>{el.Rayon} Km(s)</td>
                                                                        <td>
                                                                            {/* <img src="http://www.yakasaider.fr/images/admin/user_edit.png" alt="" title="Modifier" border="0" /> */}
                                                                            <img onClick={() => this.props.deleteZoneDintervention(el.id)} src="http://www.yakasaider.fr/images/admin/trash.png" alt="" title="Supprimer" border="0" />
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        }

                                                    </tbody>
                                                </table>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </Card.Header>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <table>

                                    <tbody>

                                        <tr>
                                            <td>Ville : </td>
                                            <td>
                                                <div className="input-zone">
                                                    <LocationSearch />
                                                </div>
                                            </td>
                                            <td>Rayon : </td>
                                            <td><div className="input number"><input onChange={this.handleChangeRayon} className="rayon" type="number" id="VinterventionRayon" /></div></td>
                                            <td>&nbsp;&nbsp;Km</td>
                                        </tr>

                                    </tbody>

                                </table>

                                <div className="d-flex justify-content-end">
                                    <button onClick={() => this.props.addNewZoneDintervention({ ...this.state, id: uuid() })} className="outline-primary  " color="primary"><strong>Valider</strong></button>
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
        addNewZoneDintervention: x => dispatch(addZoneDintervention(x)),

        deleteZoneDintervention: id => dispatch(removeZoneDintervention(id))
    }
}
const mapStateToProps = state => {
    return {
        allState: state.Reducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoneDintervention);


