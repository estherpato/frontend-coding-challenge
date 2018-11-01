import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';
import '../stylesheets/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home__container">
                <h1 className="home__title">Phone List</h1>
                <PhoneListContainer
                    phoneList={this.props.phoneList} />
            </div>
        );
    }
}

export default Home;