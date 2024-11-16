import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/AuthActions';
import { setAlert, removeAlert } from '../../../actions/AlertActions';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import uuid from 'uuid';

class Identifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",  
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.auth.error === 'Please Register Bofore ..' || nextProps.auth.error === 'wrong password') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000)
        }
    }

    loginNow = () => {
        if (this.state.email === '' || this.state.password === '') {
            let id = uuid()
            this.props.setAlert('Please enter your credentials before !', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000)
        } else {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    render() {
        return (
            <div >
                <div className="backgroundImg">
                    <div className="conteneur">
                        <h2 className="fontW">Se connecter</h2>
                    </div>
                </div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        onChange={this.handleChange}
                                        label="E-mail"
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
                                        label="Mot de Passe"
                                        name="password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn onClick={this.loginNow} color="primary">S’identifier</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login, setAlert, removeAlert })(Identifier);