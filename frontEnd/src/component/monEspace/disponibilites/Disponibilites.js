import React, { Component } from 'react';
import { connect } from 'react-redux'
import './DisponibilitesStyle.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addDisponibilites, removeDisponibilites } from '../../../actions/actionsServices ';
import uuid from 'uuid';

class Disponibilites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jour: "",
            heureDebut: "",
            heureFin: "",
        }
    }

    handelJour = () => {
        if (this.state.value) {
            console.log(this.state.value)
        }
    }
    handleChangeJour = (e) => {
        this.setState({ jour: e.target.value })
    }

    handelHeureDebut = () => {
        if (this.state.value) {
            console.log(this.state.value)
        }
    }
    handleChangeHeureDebut = (e) => {
        this.setState({ heureDebut: e.target.value })
    }

    handelHeureFin = () => {
        if (this.state.value) {
            console.log(this.state.value)
        }
    }
    handleChangeHeureFin = (e) => {
        this.setState({ heureFin: e.target.value })
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
                                    Ajouter
                                </Accordion.Toggle>
                            </div>

                            <div className="tab-pane active" id="dispo">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-unstyled">
                                            <li>
                                                {/* On vous invite à ajouter vos disponibilités. Ainsi, les membres vous contacterons uniquement si vos disponibilités correspondent. */}

                                                <table className="table ">
                                                    <tbody>
                                                        {
                                                            this.props.allState.dispo.map
                                                            (el =>
                                                                <tr>
                                                                    <td>{el.jour} :</td>
                                                                    <td style={{ "width": "80px" }}></td>
                                                                    <td>Heure début :</td>
                                                                    <td>{el.heureDebut}  H </td>
                                                                    <td>Heure de fin :</td>
                                                                    <td>{el.heureFin} H </td>
                                                                    <td><img onClick={() => this.props.deleteDisponibilites(el.id)} src="http://www.yakasaider.fr/images/admin/trash.png" alt="" title="Supprimer" border="0" /></td>
                                                                </tr>)
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
                                            <td className="sWidth" >Jour :</td>
                                            <td className="lWidth" ><select onChange={this.handleChangeJour} className="selectDisponibilites" name="data[Disponibilite][jour_id]" id="DisponibiliteJourId">
                                                <option value=""></option>
                                                <option value="Lundi">Lundi</option>
                                                <option value="Mardi">Mardi</option>
                                                <option value="Mercredi">Mercredi</option>
                                                <option value="Jeudi">Jeudi</option>
                                                <option value="Vendredi">Vendredi</option>
                                                <option value="Samedi">Samedi</option>
                                                <option value="Dimanche">Dimanche</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td className="sWidth" >Heure début:</td>
                                            <td className="lWidth" ><select onChange={this.handleChangeHeureDebut} className="selectDisponibilites" name="data[Disponibilite][heure_debut]" id="DisponibiliteHeureDebut">
                                                <option value=""></option>
                                                <optgroup label="options">
                                                    <option value="00">00</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                </optgroup>
                                                <option value="inputed">00</option>
                                                <option value="label"></option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td className="sWidth" >Heure de fin:</td>
                                            <td className="lWidth" ><select onChange={this.handleChangeHeureFin} className="selectDisponibilites" name="data[Disponibilite][heure_fin]" id="DisponibiliteHeureFin">
                                                <option value=""></option>
                                                <optgroup label="options">
                                                    <option value="00">00</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                </optgroup>
                                                <option value="inputed">00</option>
                                                <option value="label"></option>
                                            </select></td>
                                        </tr>

                                    </tbody>
                                </table>

                                <div className="d-flex justify-content-end">
                                    <button onClick={() => this.props.addNewDisponibilites( {...this.state , id : uuid()} )} className="outline-primary  " color="primary"><strong>Valider</strong></button>
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

        addNewDisponibilites: x => dispatch(addDisponibilites(x)),

        deleteDisponibilites: id => dispatch(removeDisponibilites(id))
    }
}
const mapStateToProps = state => {
    return {
        allState: state.Reducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disponibilites);


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function TimePickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="time"
//         label="Alarm clock"
//         type="time"
//         defaultValue="07:30"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//         inputProps={{
//           step: 300, // 5 min
//         }}
//       />
//     </form>
//   );

// }









