import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';
// import './stylesheets/App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <PhoneListContainer
                    phoneList={this.props.phoneList} />
            </div>
        );
    }
}

export default Home;