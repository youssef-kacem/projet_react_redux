import React from 'react';
import { connect } from 'react-redux';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBIcon } from 'mdbreact';
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom';
import './NavBarStyle.css';
import { logout } from '../../actions/AuthActions';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            // isAuthenticated: true,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    userConnected = () => (
        <div>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <div className="dropdown transparence">
                            <Link to="/monEspace">
                                <button className="dropbtn">
                                    MON ESPACE
                            </button>
                            </Link>

                            <div className="dropdown-content">
                                <Link to="/monCompte">MON COMPTE</Link>
                                <Link to="/mesServices">Mes services</Link>
                                <Link to="/mesDemandes">Mes demandes</Link>
                                <Link to="/zoneDintervention">Zone d'intervention</Link>
                                <Link to="/disponibilites">Disponibilités</Link>
                                <Link to="/rendezVous">Rendez-vous</Link>
                                <Link to="/messages">Messages</Link>
                            </div>
                        </div>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/offres" >
                            <strong> OFFRES </strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/demandes">
                            <strong>DEMANDES</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="bonPlan" >
                            <strong>BON PLAN</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="status">
                        <MDBNavLink to="#" onClick={ () => this.props.logout()} >
                            <MDBIcon className="sign-out" icon="sign-out-alt" />
                            <strong>SE DÉCONNECTER</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="status">
                        <MDBNavLink to="#" >
                            {/* <strong> Hello, {this.props.auth.user.name} </strong> */}
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </div>
    )
    guest = () => (
        <div>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/commentCaMarch">
                            <strong>COMMENT ÇA MARCHE ?</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/exDeServices" ><strong> EXEMPLES DE SERVICES </strong></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink to="/identifier">
                            <i class="fa fa-user"></i>
                            <strong>S’IDENTIFIER</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink to="/inscrire">
                            <i class="fa fa-plus"></i>
                            <strong>S’INSCRIRE</strong>
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </div>
    )

    render() {
        return (
            <header >
                <MDBNavbar dark expand="md">
                    <MDBContainer>
                        <div>
                            <MDBNavbarBrand>
                                <MDBNavLink to="/" >
                                    <img src="https://www.amonservice.com/wp-content/uploads/2017/07/logo.png"
                                        alt="A MON SERVICE !"
                                        title="A MON SERVICE !" />
                                </MDBNavLink>
                            </MDBNavbarBrand>
                        </div>

                        {
                            this.props.auth.isAuthenticated ? this.userConnected() : this.guest()
                        }

                    </MDBContainer>
                </MDBNavbar>
            </header>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout } )(NavBar);