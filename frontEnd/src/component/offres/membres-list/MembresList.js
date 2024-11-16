import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserOffers } from '../../../actions/actionsServices '
import './MembresListStyle.css';

import MembresCard from '../membres-card/MembresCard';

class MembresList extends React.Component {
    componentDidMount() {
        this.props.getUserOffers()
    }
    
    render() {
        return (

            <div className="box-membres">
                {this.props.initState.membres.map((el, i) =>  <MembresCard key={i}  membre={el}/>)}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        initState: state.Reducer
    };
};

export default connect(mapStateToProps, { getUserOffers })(MembresList)