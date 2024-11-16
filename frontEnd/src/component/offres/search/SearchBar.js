import React, { Component } from 'react';
import './SearchBarStyle.css'
import { connect } from 'react-redux';
import { search } from '../../../actions/OffresActions';
import StarRatingComponent from 'react-star-rating-component';


class Recherchebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            rating: 1
        }
    }

    changeSearch = (e) => {
        this.setState({ name: e.target.value }, () => this.props.rummage({ name: this.state.name, rating: this.state.rating }))
    }

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue }, () => this.props.rummage({ name: this.state.name, rating: this.state.rating }));
    }

    render() {
        const { } = this.state;
        return (

            <div className="container d-flex justify-content-between">
                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div className="input-groooup">
                        <input onChange={this.changeSearch}
                            type="search" placeholder="Type catigory name to search" aria-describedby="button-addon1" value={this.state.name} className="form-controool border-0 bg-light width" />

                        <div className="input-groooup-append">
                            <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                        </div>

                    </div>
                </div>
               
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        rummage: data => dispatch(search(data))
    }
}

export default connect(null, mapDispatchToProps)(Recherchebar)