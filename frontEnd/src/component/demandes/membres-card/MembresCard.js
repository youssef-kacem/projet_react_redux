import React, { Component } from 'react'
import { connect } from 'react-redux';
import './MembresCardStyle.css';
import { MDBNavLink } from 'mdbreact';

class MembresCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { membre } = this.props;
        return (
            <div className="membre-card shadow-lg p-3 mb-5 bg-white rounded ">
                <div className="custom-image">
                    <img className="imggg" src={membre.profilImg} />
                </div>
                <div className="custom-card">
                    <h3>{membre.name}</h3>
                    <p>{membre.adress}</p>
                    <p>{membre.votes}</p>
                    <div className="text-center">
                        <MDBNavLink
                            exact
                            to={`/description/${membre._id}`}
                        >
                            <button type="button" className="btn btn-outline-info waves-effect ">Description</button>
                        </MDBNavLink>
                    </div>
                </div>
            </div>
        )
    }
}



export default connect(null, null)(MembresCard)