import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class ModalInscrire extends Component {
    state = {
        modal: false,
        nom: "",
        prenom: "",
        email: "",
        motDePasse: "",
        ConfirmezMotDePasse: "",
        utilisateur: "",
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <MDBContainer>
                <i class="fa fa-plus"></i>
                <a className="ml" onClick={this.toggle}><strong>S’inscrire</strong></a>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader className="text-primary" toggle={this.toggle}>S’inscrire</MDBModalHeader>
                    <MDBModalBody>
                        <div className="modal-body mx-3 ">
                            <div class="md-form mb-5">
                                {/* <i class="fas fa-user prefix grey-text"></i> */}
                                <input type="text" onChange={this.handleChange} name="nom" type="text" id="orangeForm-name" class="form-control validate" placeholder="Nom" />
                            </div>

                            <div class="md-form mb-5">
                                {/* <i class="fas fa-user prefix grey-text"></i> */}
                                <input type="text" onChange={this.handleChange} name="prenom" type="text" id="orangeForm-name" class="form-control validate" placeholder="Prénom" />
                            </div>

                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="text" onChange={this.handleChange} name="utilisateur" type="text" id="orangeForm-name" class="form-control validate" placeholder="Nom d'utilisateur" />
                            </div>

                            <div className="md-form mb-5">
                                <i className="fas fa-envelope prefix grey-text"></i>
                                <input type="email" onChange={this.handleChange} name="email" id="form29" className="form-control validate" placeholder="Email" />
                            </div>

                            <div class="md-form mb-4">
                                <i class="fas fa-lock prefix grey-text"></i>
                                <input type="password" onChange={this.handleChange} name="motDePasse" id="orangeForm-pass" class="form-control validate" placeholder="Mot de passe" />
                            </div>

                            <div class="md-form mb-4">
                                <i class="fas fa-lock prefix grey-text"></i>
                                <input type="password" onChange={this.handleChange} name="ConfirmezMotDePasse" id="orangeForm-pass" class="form-control validate" placeholder="Confirmez le mot de passe" />
                            </div>

                        </div>
                    </MDBModalBody>
                    <MDBModalFooter className="text-center">
                    
                        <MDBBtn  onClick={this.toggle} color="primary">S’inscrire</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalInscrire;


















