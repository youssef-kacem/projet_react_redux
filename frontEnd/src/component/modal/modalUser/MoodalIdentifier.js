import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class MoodalIdentifier extends Component {
  state = {
    modal2: false,
    email: "",
    password: "",
  }

  toggle = nr => () => {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <MDBContainer>
        <i class="fa fa-user"></i>
      
        <a className="ml" color="primary" onClick={this.toggle(2)}>  <strong>S’identifier</strong></a>
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
          <MDBModalHeader className="text-primary" toggle={this.toggle(2)}>S’identifier</MDBModalHeader>
          <MDBModalBody>
            <div class="md-form mb-5">
              <i class="fas fa-envelope prefix grey-text"></i>
              <input type="email" onChange={this.handleChange} name="email" id="defaultForm-email" class="form-control validate" placeholder="Your email" />
            </div>

            <div class="md-form mb-4">
              <i class="fas fa-lock prefix grey-text"></i>
              <input type="password"  onChange={this.handleChange} name="password" id="defaultForm-pass" class="form-control validate" placeholder="Your password" />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            {/* <MDBBtn color="secondary" onClick={this.toggle(2)}>Close</MDBBtn> */}
            <MDBBtn  onClick={this.toggle(2)} color="primary">S’identifier</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default MoodalIdentifier;