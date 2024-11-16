import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './InscrireStyle.css';
import { setAlert, removeAlert } from '../../../actions/AlertActions';
import { register, clearError } from '../../../actions/AuthActions';
import uuid from 'uuid';

class Inscrire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            Confirmezpassword: "",
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    registerNow = () => {
        if (this.state.role === '' || this.state.name === '' || this.state.lastname === '' || this.state.username === '' || this.state.email === '' || this.state.password === '' || this.state.Confirmezpassword === '') {
            let id = uuid()
            this.props.setAlert('Tous les champs sont requis', 'warning ', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000)
        } else {
            this.props.register({
                name: this.state.name,
                lastname: this.state.lastname,
                username: this.state.username,
                email: this.state.email,
                role: this.state.role,
                password: this.state.password,
                Confirmezpassword: this.state.Confirmezpassword,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.auth.error === 'User already exists..') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }
    }
    handleOptionChange = e => {
        this.setState({
          role: e.target.value
        });
      }
    render() {
        return (
            <div >
                <div className="backgroundImg">
                    <div className="conteneur">
                        <h2 className="fontW">Inscription</h2>
                    </div>
                </div>
                <MDBContainer >
                    <MDBRow>
                        <MDBCol md="12">
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="nom"
                                        name="name"
                                        icon="signature"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="prenom"
                                        name="lastname"
                                        icon="signature"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="Nom d'utilisateur"
                                        name="username"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="Email"
                                        name="email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="Mot de passe"
                                        name="password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="Confirmez le mot de passe"
                                        name="Confirmezpassword"
                                        icon="exclamation-triangle"
                                        group
                                        type="password"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <p>Vous lui vous:</p>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="demander" onChange={this.handleOptionChange} checked={this.state.role === "demander"} />
                                            Demander de service
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="offers" onChange={this.handleOptionChange} checked={this.state.role === 'offers'}/>
                                            Proposer des offers
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="both" onChange={this.handleOptionChange} checked={this.state.role === 'both'} />
                                            Les deux
                                        </label>
                                    </div>
                                    {/* <input name="demands" type="radio" id="checkbox1" defaultValue="demands" onClick={this.handleCheck}/>
                                    <label htmlFor="checkbox1">Demander des services</label>
                                    <input name="offer" type="radio" id="checkbox2" defaultValue="offer" onClick={this.handleCheck}/>
                                    <label htmlFor="checkbox2">Proposer des offres</label>
                                    <input name="both" type="radio" id="checkbox3" defaultValue="both" onClick={this.handleCheck}/>
                                    <label htmlFor="checkbox3">Les deux</label> */}
                                </div>

                                <div className="text-center">
                                    <MDBBtn onClick={this.registerNow} color="primary">S’inscrire</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr className="tr" />
            </div>
        );
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         setAlert: (msg, type, id) => dispatch(setAlert(msg, type, id)),
//         clearAlert: id => dispatch(removeAlert(id))
//     }
// }

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError })(Inscrire);